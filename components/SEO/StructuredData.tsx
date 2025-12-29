import React from 'react';

export const StructuredData = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Motion Advanced Rehab",
        "image": "https://motionarehab.com/images/hero_bg.webp",
        "telephone": "+504 9334-3693",
        "email": "info@motionarehab.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "8 y 9 Calle S.O, 7 Avenida S",
            "addressLocality": "San Pedro Sula",
            "addressRegion": "Cortés",
            "addressCountry": "HN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 15.4990091,
            "longitude": -88.0284667
        },
        "url": "https://motionarehab.com/",
        "sameAs": [
            "https://www.instagram.com/motionadvancedrehab",
            "https://www.facebook.com/motionadvancedrehab"
        ],
        "priceRange": "$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "08:00",
                "closes": "12:00"
            }
        ],
        "serviceArea": {
            "@type": "City",
            "name": "San Pedro Sula"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Physiotherapy Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Fisioterapia Deportiva"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Rehabilitación de Lesiones"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Biomecánica Clínica"
                    }
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
};
