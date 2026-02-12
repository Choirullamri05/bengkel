"use client";

import { FadeIn } from "@/components/animations";
import { siteConfig } from "@/content/site";

const features = [
    {
        icon: "🔧",
        title: "Pengalaman Terpercaya",
        description: `Lebih dari ${siteConfig.experience.years} tahun melayani pelanggan di Bandung dan sekitarnya dengan hasil kerja yang memuaskan.`,
    },
    {
        icon: "✨",
        title: "Kualitas Terjamin",
        description:
            "Material pilihan dan pengerjaan presisi. Garansi konstruksi untuk setiap proyek.",
    },
    {
        icon: "💬",
        title: "Konsultasi Gratis",
        description:
            "Survey lokasi dan konsultasi desain gratis. Tim kami siap membantu mewujudkan ide Anda.",
    },
    {
        icon: "⏰",
        title: "Tepat Waktu",
        description:
            "Komitmen penyelesaian sesuai jadwal yang disepakati tanpa mengorbankan kualitas.",
    },
];

export function About() {
    return (
        <section id="tentang" className="py-20 lg:py-28 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <FadeIn direction="right">
                        <span className="text-blue-600 font-medium mb-2 block">Tentang Kami</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            Bengkel Las Terpercaya di Medan
                        </h2>
                        <p className="text-gray-600 mb-6">
                            <strong className="text-gray-900">{siteConfig.name}</strong> adalah bengkel las profesional yang melayani kebutuhan rumah tangga dan proyek komersial. Dengan pengalaman lebih dari {siteConfig.experience.years} tahun, kami telah menyelesaikan {siteConfig.experience.projects}+ proyek dan melayani {siteConfig.experience.clients}+ klien yang puas.
                        </p>
                        <p className="text-gray-600 mb-8">
                            Kami berkomitmen memberikan hasil terbaik dengan material berkualitas, pengerjaan presisi, dan harga kompetitif. Area layanan mencakup {siteConfig.serviceArea.join(", ")}.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex gap-3">
                                    <span className="text-2xl">{feature.icon}</span>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-500">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Right - Image Placeholder */}
                    <FadeIn direction="left" delay={0.2}>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                            </div>
                            {/* Floating Stats Card */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                        <span className="text-2xl">🏆</span>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">{siteConfig.experience.years}+</div>
                                        <div className="text-sm text-gray-500">Tahun Pengalaman</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
