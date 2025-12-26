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

        // Update Open Graph tags
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

        // Canonical Link
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        // Use window.location.href but strip query params
        canonical.setAttribute('href', window.location.protocol + "//" + window.location.host + window.location.pathname);

        // Update HTML Lang Attribute
        // Detect language from title keywords or passed prop if we updated the hook signature
        // For now, heuristic: if title has "Fisioterapia" -> es, else en
        const isSpanish = title.includes('Fisioterapia') || title.includes('Máximo') || title.includes('Protocolo');
        document.documentElement.lang = isSpanish ? 'es' : 'en';

    }, [title, description]);
};
