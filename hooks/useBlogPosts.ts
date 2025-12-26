import { useState, useEffect } from 'react';
import { getBlogPosts, BlogPost, getBlogPostBySlug } from '../src/services/contentful';
import { blogPosts as fallbackData } from '../src/data/blogPosts';

export const useBlogPosts = (language: 'en' | 'es') => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                // Try fetching from Contentful
                const fetchedPosts = await getBlogPosts(language);

                // If fetch succeeds, use the result (even if empty) to strict truth
                setPosts(fetchedPosts);

                // Debugging for user
                if (fetchedPosts.length === 0) {
                    console.log('Contentful returned 0 posts. Ensure posts are Published and locale matches.');
                }

            } catch (err) {
                console.error(err);
                setError(err as Error);
                // Fallback on error (network/auth issues)
                const localPosts = Object.values(language === 'en' ? fallbackData.en : fallbackData.es).map((p: any) => ({
                    ...p,
                    id: p.id || p.slug,
                    readTime: p.readTime || '5 min read'
                }));
                setPosts(localPosts);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [language]);

    return { posts, loading, error };
};

export const useBlogPost = (slug: string | undefined, language: 'en' | 'es') => {
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!slug) return;

        const fetchPost = async () => {
            setLoading(true);
            try {
                const fetchedPost = await getBlogPostBySlug(slug, language);
                if (fetchedPost) {
                    setPost(fetchedPost);
                } else {
                    // Fallback to local
                    const localData = language === 'en' ? fallbackData.en : fallbackData.es;
                    const localPost = Object.values(localData).find((p: any) => p.slug === slug);
                    if (localPost) {
                        setPost({
                            ...localPost,
                            id: localPost.id || localPost.slug,
                            readTime: localPost.readTime || '5 min read'
                        } as BlogPost);
                    } else {
                        setPost(null);
                    }
                }
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug, language]);

    return { post, loading, error };
};
