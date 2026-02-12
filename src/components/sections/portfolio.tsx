"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerChild } from "@/components/animations";
import { portfolio, portfolioCategories } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredPortfolio =
        activeCategory === "all"
            ? portfolio
            : portfolio.filter((item) => item.category === activeCategory);

    return (
        <section id="portofolio" className="py-20 lg:py-28 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn className="text-center mb-12">
                    <span className="text-blue-600 font-medium mb-2 block">Portofolio</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Hasil Karya Kami
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Lihat berbagai proyek yang telah kami kerjakan untuk klien residensial dan komersial.
                    </p>
                </FadeIn>


                {/* Portfolio Grid */}
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPortfolio.map((item) => (
                        <StaggerChild key={item.id}>
                            <Link href={`/portfolio/${item.slug}`}>
                                <Card className="group cursor-pointer overflow-hidden">
                                    {/* Image Placeholder */}
                                    <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                                        <Badge className="absolute top-3 left-3" variant="secondary">
                                            {portfolioCategories.find((c) => c.id === item.category)?.label || item.category}
                                        </Badge>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                                            {item.shortDescription}
                                        </p>
                                        <div className="flex items-center gap-4 text-xs text-gray-400">
                                            <span className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {item.location}
                                            </span>
                                            <span>{item.year}</span>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        </StaggerChild>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
