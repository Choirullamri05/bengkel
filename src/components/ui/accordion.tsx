"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
}

export function AccordionItem({
    title,
    children,
    isOpen = false,
    onToggle,
}: AccordionItemProps) {
    return (
        <div className="border-b border-gray-200 last:border-b-0">
            <button
                onClick={onToggle}
                className="flex items-center justify-between w-full py-5 text-left"
            >
                <span className="font-medium text-gray-900">{title}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-500"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-5 text-gray-600">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

interface AccordionProps {
    items: { id: string; title: string; content: string }[];
    className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
    const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

    return (
        <div className={cn("divide-y divide-gray-200 border-t border-gray-200", className)}>
            {items.map((item) => (
                <AccordionItem
                    key={item.id}
                    title={item.title}
                    isOpen={openId === item.id}
                    onToggle={() => setOpenId(openId === item.id ? null : item.id)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
}
