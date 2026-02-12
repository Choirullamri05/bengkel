"use client";

import { Accordion } from "@/components/ui/accordion";
import { FadeIn } from "@/components/animations";
import { faqItems } from "@/content/faq";

export function FAQ() {
    const accordionItems = faqItems.map((item) => ({
        id: item.id,
        title: item.question,
        content: item.answer,
    }));

    return (
        <section id="faq" className="py-20 lg:py-28 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn className="text-center mb-16">
                    <span className="text-blue-600 font-medium mb-2 block">FAQ</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Pertanyaan Umum
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Temukan jawaban untuk pertanyaan yang sering diajukan seputar layanan kami.
                    </p>
                </FadeIn>

                <FadeIn delay={0.2} className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
                        <Accordion items={accordionItems} />
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
