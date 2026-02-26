"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations";
import { siteConfig } from "@/content/site";
import { formatWhatsAppLink } from "@/lib/utils";
import Link from "next/link";

export function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            {/* Background — WebP with JPEG fallback via <picture>, no JS needed */}
            <div className="absolute inset-0">
                <picture>
                    <source srcSet="/images/hero-bg.webp" type="image/webp" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/images/hero-bg.jpg"
                        alt=""
                        aria-hidden="true"
                        loading="eager"
                        decoding="async"
                        className="w-full h-full object-cover"
                        style={{ filter: "blur(1px) brightness(0.45)" }}
                    />
                </picture>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn delay={0.1}>
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30">
                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                            Melayani Medan &amp; Sekitarnya
                        </span>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Bengkel Las{" "}
                            <span className="text-blue-400">Senang &amp; Senang</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
                            {siteConfig.tagline}. Kanopi, pagar, railing, teralis, dan pekerjaan custom dengan kualitas terbaik.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.25}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href={formatWhatsAppLink(siteConfig.whatsapp, siteConfig.cta.whatsappMessage)}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="lg" className="w-full sm:w-auto gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    {siteConfig.cta.consultationText}
                                </Button>
                            </a>
                            <Link href="#portofolio">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900">
                                    {siteConfig.cta.portfolioText}
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
                            <div className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-white">
                                    {siteConfig.experience.years}+
                                </div>
                                <div className="text-sm text-white/70 mt-1">Tahun Pengalaman</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-white">
                                    {siteConfig.experience.projects}+
                                </div>
                                <div className="text-sm text-white/70 mt-1">Proyek Selesai</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-white">
                                    {siteConfig.experience.clients}+
                                </div>
                                <div className="text-sm text-white/70 mt-1">Klien Puas</div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
