import { siteConfig } from "@/content/site";
import { services } from "@/content/services";
import { faqItems } from "@/content/faq";

const BASE_URL = "https://bengkellasssmedan.web.id";

function LocalBusinessJsonLd() {
    const localBusiness = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        name: siteConfig.name,
        alternateName: [siteConfig.shortName, "Bengkel Las SS Medan", "Las SS Medan"],
        description: siteConfig.description,
        url: BASE_URL,
        telephone: `+${siteConfig.whatsapp}`,
        email: siteConfig.email,
        foundingDate: "2015",
        currenciesAccepted: "IDR",
        paymentAccepted: "Cash, Transfer Bank",
        priceRange: "$$",
        address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.address.street,
            addressLocality: "Medan",
            addressRegion: "Sumatera Utara",
            postalCode: siteConfig.address.postalCode,
            addressCountry: "ID",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 3.585014,
            longitude: 98.592019,
        },
        hasMap: `https://maps.google.com/?q=Bengkel+Las+SS+Medan&ll=3.585014,98.592019`,
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
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "87",
            bestRating: "5",
            worstRating: "1",
        },
        image: [
            `${BASE_URL}/images/hero-bg.webp`,
            `${BASE_URL}/images/hero-bg.jpg`,
        ],
        sameAs: [
            siteConfig.social.instagram,
            siteConfig.social.facebook,
        ].filter(Boolean),
        areaServed: [
            { "@type": "City", name: "Medan" },
            { "@type": "City", name: "Deli Serdang" },
            { "@type": "City", name: "Binjai" },
            { "@type": "City", name: "Sunggal" },
            { "@type": "City", name: "Lubuk Pakam" },
        ],
        serviceArea: {
            "@type": "GeoCircle",
            geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 3.585014,
                longitude: 98.592019,
            },
            geoRadius: "40000",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Layanan Las Medan",
            itemListElement: services.map((service, index) => ({
                "@type": "Offer",
                position: index + 1,
                itemOffered: {
                    "@type": "Service",
                    name: service.title,
                    description: service.description,
                    serviceType: "Jasa Las",
                    provider: {
                        "@id": BASE_URL,
                    },
                    areaServed: "Medan, Sumatera Utara",
                },
            })),
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: `+${siteConfig.whatsapp}`,
            contactType: "customer service",
            availableLanguage: "Indonesian",
            contactOption: "TollFree",
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

function BreadcrumbJsonLd() {
    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Beranda",
                item: BASE_URL,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Layanan",
                item: `${BASE_URL}/#layanan`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Portofolio",
                item: `${BASE_URL}/#portofolio`,
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
    );
}

export function JsonLd() {
    return (
        <>
            <LocalBusinessJsonLd />
            <FAQPageJsonLd />
            <BreadcrumbJsonLd />
        </>
    );
}
