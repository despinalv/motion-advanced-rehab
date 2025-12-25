import { createClient, Entry } from 'contentful';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
    console.warn('Contentful keys are missing. Blog features will fallback or fail.');
}

const client = createClient({
    space: spaceId || 'placeholder',
    accessToken: accessToken || 'placeholder',
});

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    date: string;
    category: string;
    author: string;
    image: string;
    excerpt: string;
    content: string; // Rich text or long text depending on setup, we'll assume text for now or handle rich text later
    readTime?: string;
}

// Contentful Entry Type Definition
interface BlogPostSkeleton {
    contentTypeId: 'blogPost';
    fields: {
        title: import('contentful').EntryFieldTypes.Text;
        slug: import('contentful').EntryFieldTypes.Text;
        date: import('contentful').EntryFieldTypes.Date;
        category: import('contentful').EntryFieldTypes.Text;
        author: import('contentful').EntryFieldTypes.Text;
        image: import('contentful').EntryFieldTypes.AssetLink;
        excerpt: import('contentful').EntryFieldTypes.Text;
        content: import('contentful').EntryFieldTypes.Text; // or RichText
    }
}

export const getBlogPosts = async (locale: 'en' | 'es' = 'en'): Promise<BlogPost[]> => {
    try {
        const localeCode = locale === 'es' ? 'es-HN' : 'en-US';
        const response = await client.getEntries<BlogPostSkeleton>({
            content_type: 'blogPost',
            locale: localeCode,
            order: ['-fields.date'],
        });

        return response.items.map((item) => {
            const fields = item.fields;
            const imageAsset = fields.image as any; // Cast to any to access file url safely
            const imageUrl = imageAsset?.fields?.file?.url
                ? `https:${imageAsset.fields.file.url}`
                : '';

            return {
                id: item.sys.id,
                slug: fields.slug as string,
                title: fields.title as string,
                date: fields.date as string, // Transform date format if necessary
                category: fields.category as string,
                author: fields.author as string,
                image: imageUrl,
                excerpt: fields.excerpt as string,
                content: fields.content as string, // If rich text, this needs parsing
                readTime: '5 min read' // Placeholder or calculated
            };
        });
    } catch (error) {
        console.error('Error fetching blog posts from Contentful:', error);
        return [];
    }
};

export const getBlogPostBySlug = async (slug: string, locale: 'en' | 'es' = 'en'): Promise<BlogPost | null> => {
    try {
        const localeCode = locale === 'es' ? 'es-HN' : 'en-US';
        const response = await client.getEntries<BlogPostSkeleton>({
            content_type: 'blogPost',
            'fields.slug': slug,
            locale: localeCode,
            limit: 1
        });

        if (response.items.length === 0) return null;

        const item = response.items[0];
        const fields = item.fields;
        const imageAsset = fields.image as any;
        const imageUrl = imageAsset?.fields?.file?.url
            ? `https:${imageAsset.fields.file.url}`
            : '';

        return {
            id: item.sys.id,
            slug: fields.slug as string,
            title: fields.title as string,
            date: fields.date as string,
            category: fields.category as string,
            author: fields.author as string,
            image: imageUrl,
            excerpt: fields.excerpt as string,
            content: fields.content as string,
            readTime: '5 min read'
        };
    } catch (error) {
        console.error(`Error fetching post ${slug}:`, error);
        return null;
    }
}
