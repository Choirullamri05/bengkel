"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerChild } from "@/components/animations";
import { testimonials } from "@/content/testimonials";

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-4 h-4 ${star <= rating ? "text-yellow-400" : "text-gray-200"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export function Testimonials() {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn className="text-center mb-16">
                    <span className="text-blue-600 font-medium mb-2 block">Testimoni</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Apa Kata Pelanggan
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Kepuasan pelanggan adalah prioritas utama kami. Berikut testimoni dari klien yang telah menggunakan jasa kami.
                    </p>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <StaggerChild key={testimonial.id}>
                            <Card className="h-full" hover={false}>
                                <CardContent className="pt-6">
                                    <StarRating rating={testimonial.rating} />
                                    <p className="mt-4 text-gray-600 italic">
                                        &ldquo;{testimonial.text}&rdquo;
                                    </p>
                                    <div className="mt-6 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                            <span className="text-blue-600 font-semibold text-sm">
                                                {testimonial.name.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">{testimonial.name}</div>
                                            <div className="text-sm text-gray-500">
                                                {testimonial.location} • {testimonial.service}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </StaggerChild>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
