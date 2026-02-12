import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { portfolio, getPortfolioBySlug, portfolioCategories } from "@/content/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/sections/footer";
import { siteConfig } from "@/content/site";
import { formatWhatsAppLink } from "@/lib/utils";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return portfolio.map((item) => ({
        slug: item.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const item = getPortfolioBySlug(slug);

    if (!item) {
        return { title: "Not Found" };
    }

    const category = portfolioCategories.find((c) => c.id === item.category);
    const pageTitle = `${item.title} - ${category?.label || item.category} | ${siteConfig.shortName}`;

    return {
        title: pageTitle,
        description: item.fullDescription || item.shortDescription,
        keywords: [
            item.title,
            category?.label || item.category,
            "bengkel las medan",
            "jasa las",
            siteConfig.address.city,
            ...item.materials,
        ],
        alternates: {
            canonical: `/portfolio/${item.slug}`,
        },
        openGraph: {
            title: pageTitle,
            description: item.fullDescription || item.shortDescription,
            type: "article",
            locale: "id_ID",
            siteName: siteConfig.name,
            url: `/portfolio/${item.slug}`,
        },
        twitter: {
            card: "summary_large_image",
            title: pageTitle,
            description: item.shortDescription,
        },
    };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const item = getPortfolioBySlug(slug);

    if (!item) {
        notFound();
    }

    const category = portfolioCategories.find((c) => c.id === item.category);
    const whatsappMessage = `Halo, saya tertarik dengan proyek "${item.title}". Bisa konsultasi untuk proyek serupa?`;

    return (
        <>
            <article className="pt-24 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Link
                        href="/#portofolio"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Kembali ke Portofolio
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Image */}
                        <div>
                            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <Badge className="mb-4">{category?.label || item.category}</Badge>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                {item.title}
                            </h1>
                            <p className="text-gray-600 mb-6">
                                {item.fullDescription || item.shortDescription}
                            </p>

                            {/* Details Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <div className="text-sm text-gray-500 mb-1">Lokasi</div>
                                    <div className="font-medium text-gray-900">{item.location}</div>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <div className="text-sm text-gray-500 mb-1">Tahun</div>
                                    <div className="font-medium text-gray-900">{item.year}</div>
                                </div>
                                {item.dimensions && (
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <div className="text-sm text-gray-500 mb-1">Dimensi</div>
                                        <div className="font-medium text-gray-900">{item.dimensions}</div>
                                    </div>
                                )}
                                {item.duration && (
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <div className="text-sm text-gray-500 mb-1">Durasi</div>
                                        <div className="font-medium text-gray-900">{item.duration}</div>
                                    </div>
                                )}
                            </div>

                            {/* Materials */}
                            {item.materials.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="font-semibold text-gray-900 mb-3">Material</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {item.materials.map((material, idx) => (
                                            <Badge key={idx} variant="secondary">{material}</Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Process Steps */}
                            {item.processSteps.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="font-semibold text-gray-900 mb-3">Proses Pengerjaan</h3>
                                    <ol className="space-y-2">
                                        {item.processSteps.map((step, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-sm font-medium flex items-center justify-center shrink-0">
                                                    {idx + 1}
                                                </span>
                                                <span className="text-gray-600">{step}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            )}

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={formatWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button size="lg" className="w-full sm:w-auto gap-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        Konsultasi Proyek Serupa
                                    </Button>
                                </a>
                                <Link href="/#portofolio">
                                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                        Lihat Proyek Lainnya
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </>
    );
}
