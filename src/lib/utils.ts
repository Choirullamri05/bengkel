import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatWhatsAppLink(phone: string, message?: string): string {
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    const baseUrl = `https://wa.me/${cleanPhone}`;

    if (message) {
        return `${baseUrl}?text=${encodeURIComponent(message)}`;
    }

    return baseUrl;
}

export function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
}

export function formatPhoneDisplay(phone: string): string {
    // Format: 0812-3456-7890
    const cleaned = phone.replace(/[^0-9]/g, "");
    if (cleaned.startsWith("62")) {
        const local = "0" + cleaned.slice(2);
        return local.replace(/(\d{4})(\d{4})(\d+)/, "$1-$2-$3");
    }
    return cleaned.replace(/(\d{4})(\d{4})(\d+)/, "$1-$2-$3");
}
