import type { Metadata } from "next";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Layanan Bengkel Las Medan | Kanopi, Pagar, Railing, Teralis",
    description:
        "Daftar lengkap layanan bengkel las di Medan: kanopi minimalis, pagar besi, railing tangga, teralis jendela, folding gate, dan custom. Survey & konsultasi gratis!",
    alternates: {
        canonical: "https://bengkellasssmedan.web.id/layanan",
    },
    openGraph: {
        title: "Layanan Bengkel Las Medan | Kanopi, Pagar, Railing",
        description:
            "Jasa las profesional di Medan untuk kanopi, pagar besi, railing tangga, teralis jendela & folding gate. Garansi konstruksi, survey gratis!",
        url: "https://bengkellasssmedan.web.id/layanan",
        type: "website",
        locale: "id_ID",
    },
};

const serviceDetails: Record<string, { slug: string; longDesc: string; areas: string[] }> = {
    kanopi: {
        slug: "kanopi-medan",
        longDesc:
            "Kanopi adalah solusi terbaik untuk melindungi garasi, carport, teras, dan area outdoor dari hujan dan panas. Kami menggunakan besi hollow galvanis berkualitas tinggi yang tahan karat, dikombinasikan dengan atap spandek atau polycarbonate. Tersedia berbagai model: kanopi minimalis modern, kanopi dekoratif klasik, dan kanopi custom sesuai desain Anda.",
        areas: ["Medan Sunggal", "Medan Helvetia", "Deli Serdang", "Binjai"],
    },
    pagar: {
        slug: "pagar-besi-medan",
        longDesc:
            "Pagar besi adalah investasi keamanan dan estetika untuk rumah dan bisnis Anda. Kami membuat pagar dengan desain minimalis modern hingga klasik ornamental, lengkap dengan pintu pagar geser, dorong, atau swing. Semua menggunakan material besi berkualitas dengan finishing powder coating atau cat duco anti karat.",
        areas: ["Medan Kota", "Medan Johor", "Sunggal", "Deli Serdang"],
    },
    railing: {
        slug: "railing-tangga-medan",
        longDesc:
            "Railing tangga dan balkon yang kuat dan stylish untuk mempercantik tampilan interior dan eksterior rumah. Kami mengerjakan railing dari besi hollow, solid stainless, dan kombinasi dengan kaca tempered untuk tampilan premium. Desain aman untuk seluruh anggota keluarga termasuk anak-anak.",
        areas: ["Medan Area", "Medan Tembung", "Percut Sei Tuan", "Hamparan Perak"],
    },
    teralis: {
        slug: "teralis-jendela-medan",
        longDesc:
            "Teralis jendela adalah pengaman rumah yang efektif tanpa mengurangi estetika. Kami memproduksi teralis dengan desain minimalis jahit besi solid yang tidak mudah dibobol, sekaligus tetap memungkinkan cahaya dan udara masuk secara optimal. Cocok untuk rumah tinggal, kos-kosan, ruko, dan gedung.",
        areas: ["Medan Barat", "Medan Baru", "Medan Polonia", "Sunggal"],
    },
    "pintu-lipat": {
        slug: "folding-gate-medan",
        longDesc:
            "Pintu lipat harmonika (folding gate) adalah pilihan ideal untuk garasi, toko retail, dan area komersial yang membutuhkan akses lebar namun hemat ruang. Sistem lipat yang halus dan material besi tebal membuat pintu ini awet dan mudah dioperasikan.",
        areas: ["Medan Kota", "Medan Timur", "Deli Serdang", "Binjai"],
    },
    balkon: {
        slug: "pagar-balkon-medan",
        longDesc:
            "Pagar balkon dan pembatas area dengan desain kontemporer minimalis yang cocok untuk rumah modern dua lantai. Menggunakan hollow premium dengan finishing anti cuaca untuk ketahanan jangka panjang.",
        areas: ["Medan Area", "Sunggal", "Deli Serdang"],
    },
    "rak-besi": {
        slug: "rak-besi-medan",
        longDesc:
            "Rak besi dan meja kerja industrial untuk gudang, toko, workshop, dan dapur. Custom ukuran, jumlah level, dan kapasitas beban sesuai kebutuhan bisnis Anda. Tahan lama dengan finishing powder coating.",
        areas: ["Medan Industrial", "Medan Labuhan", "Deli Serdang"],
    },
    custom: {
        slug: "las-custom-medan",
        longDesc:
            "Tidak menemukan layanan yang sesuai? Kami menerima segala jenis pekerjaan las custom berdasarkan desain atau referensi gambar Anda. Tim kami akan membantu mengonsultasikan material, estimasi biaya, dan waktu pengerjaan secara gratis.",
        areas: ["Seluruh Medan Raya", "Deli Serdang", "Binjai", "Langkat"],
    },
};

export default function LayananPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 pt-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <nav aria-label="Breadcrumb" className="mb-4 text-blue-200 text-sm">
                        <Link href="/" className="hover:text-white">Beranda</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white font-medium">Layanan</span>
                    </nav>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        Layanan Bengkel Las di Medan
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Jasa las profesional untuk kanopi, pagar, railing, teralis, folding gate, dan pekerjaan custom.
                        Melayani Medan, Deli Serdang, Binjai & sekitarnya.
                    </p>
                </div>
            </section>

            {/* Services Detail */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12">
                        {services.map((service) => {
                            const detail = serviceDetails[service.id];
                            return (
                                <article
                                    key={service.id}
                                    id={service.id}
                                    className="grid md:grid-cols-3 gap-8 p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all"
                                >
                                    <div className="md:col-span-2">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                            {service.title} Medan
                                        </h2>
                                        <p className="text-gray-600 mb-4">
                                            {detail?.longDesc || service.description}
                                        </p>
                                        <h3 className="font-semibold text-gray-800 mb-2">Keunggulan:</h3>
                                        <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                                            {service.features.map((f, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                        {detail?.areas && (
                                            <p className="text-sm text-gray-500">
                                                <span className="font-medium">Area layanan: </span>
                                                {detail.areas.join(", ")}
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-4 text-center">
                                        <div className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                                            {service.priceRange}
                                        </div>
                                        <a
                                            href={`https://wa.me/${siteConfig.whatsapp}?text=Halo, saya tertarik dengan layanan ${service.title} Medan. Bisa minta info harga dan survey?`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            Tanya Harga
                                        </a>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="bg-blue-700 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Butuh Jasa Las di Medan?
                    </h2>
                    <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                        Konsultasi dan survey lokasi gratis! Tim kami siap datang ke rumah / lokasi proyek Anda.
                    </p>
                    <a
                        href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.cta.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Konsultasi Gratis via WhatsApp
                    </a>
                </div>
            </section>
        </main>
    );
}
