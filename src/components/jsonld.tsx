import { siteConfig } from "@/content/site";
import { services } from "@/content/services";
import { faqItems } from "@/content/faq";

const BASE_URL = "https://bengkellasssmedan.web.id";

function LocalBusinessJsonLd() {
    const localBusiness = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        description: siteConfig.description,
        url: BASE_URL,
        telephone: `+${siteConfig.whatsapp}`,
        email: siteConfig.email,
        address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.address.street,
            addressLocality: siteConfig.address.city,
            addressRegion: siteConfig.address.province,
            postalCode: siteConfig.address.postalCode,
            addressCountry: "ID",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 3.585014,
            longitude: 98.592019,
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "08:00",
                closes: "17:00",
            },
        ],
        priceRange: "$$",
        image: `${BASE_URL}/images/hero-bg.png`,
        sameAs: [
            siteConfig.social.instagram,
            siteConfig.social.facebook,
        ].filter(Boolean),
        areaServed: siteConfig.serviceArea.map((area) => ({
            "@type": "City",
            name: area,
        })),
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Layanan Las",
            itemListElement: services.map((service, index) => ({
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: service.title,
                    description: service.description,
                },
                position: index + 1,
            })),
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
    );
}

function FAQPageJsonLd() {
    const faqPage = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
        />
    );
}

export function JsonLd() {
    return (
        <>
            <LocalBusinessJsonLd />
            <FAQPageJsonLd />
        </>
    );
}
