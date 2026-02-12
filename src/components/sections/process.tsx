"use client";

import { FadeIn, StaggerContainer, StaggerChild } from "@/components/animations";
import { processSteps } from "@/content/process";

export function Process() {
    return (
        <section id="proses" className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn className="text-center mb-16">
                    <span className="text-blue-600 font-medium mb-2 block">Alur Kerja</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Proses Pengerjaan
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Dari konsultasi hingga pemasangan, kami memastikan setiap tahap berjalan lancar dan transparan.
                    </p>
                </FadeIn>

                <StaggerContainer className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
                        {processSteps.map((step, index) => (
                            <StaggerChild key={step.id}>
                                <div className="relative text-center">
                                    {/* Step Number Circle */}
                                    <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center mb-4 shadow-sm">
                                        <span className="text-2xl">{step.icon}</span>
                                    </div>

                                    {/* Arrow for mobile */}
                                    {index < processSteps.length - 1 && (
                                        <div className="sm:hidden absolute -bottom-6 left-1/2 -translate-x-1/2">
                                            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            </svg>
                                        </div>
                                    )}

                                    <div className="bg-white relative z-10 px-2">
                                        <span className="text-xs font-medium text-blue-600 mb-2 block">
                                            Langkah {step.step}
                                        </span>
                                        <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-sm text-gray-500">{step.description}</p>
                                    </div>
                                </div>
                            </StaggerChild>
                        ))}
                    </div>
                </StaggerContainer>
            </div>
        </section>
    );
}
