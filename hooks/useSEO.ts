import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
}

export const useSEO = ({ title, description }: SEOProps) => {
    useEffect(() => {
        // Update Document Title
        document.title = title;

        // Update Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);

        // Update Open Graph tags for social sharing (basic)
        const setMetaTag = (property: string, content: string) => {
            let element = document.querySelector(`meta[property="${property}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('property', property);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        setMetaTag('og:title', title);
        setMetaTag('og:description', description);

    }, [title, description]);
};
