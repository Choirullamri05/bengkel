"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerChild } from "@/components/animations";
import { services } from "@/content/services";

export function Services() {
    return (
        <section id="layanan" className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn className="text-center mb-16">
                    <span className="text-blue-600 font-medium mb-2 block">Layanan Kami</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Solusi Las untuk Segala Kebutuhan
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Dari pekerjaan rumah tangga hingga proyek komersial, kami menyediakan layanan las berkualitas tinggi dengan hasil yang presisi dan tahan lama.
                    </p>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <StaggerChild key={service.id}>
                            <Card className="h-full">
                                <CardContent className="pt-6">
                                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                                        {service.icon && service.icon.startsWith("/") ? (
                                            <Image
                                                src={service.icon}
                                                alt={service.title}
                                                width={64}
                                                height={64}
                                                className="object-contain"
                                            />
                                        ) : (
                                            <span className="text-4xl">{service.icon}</span>
                                        )}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.features.slice(0, 3).map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-500">
                                                <svg
                                                    className="w-4 h-4 text-blue-500 mt-0.5 shrink-0"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    {service.priceRange && (
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <span className="text-sm font-medium text-blue-600">
                                                {service.priceRange}
                                            </span>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </StaggerChild>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
