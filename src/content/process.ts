export interface ProcessStep {
    id: string;
    step: number;
    title: string;
    description: string;
    icon: string;
}

export const processSteps: ProcessStep[] = [
    {
        id: "konsultasi",
        step: 1,
        title: "Konsultasi",
        description:
            "Hubungi kami via WhatsApp atau telepon untuk diskusi kebutuhan dan estimasi awal.",
        icon: "💬",
    },
    {
        id: "survey",
        step: 2,
        title: "Survey Lokasi",
        description:
            "Tim kami datang ke lokasi untuk pengukuran detail dan analisis kondisi lapangan.",
        icon: "📐",
    },
    {
        id: "desain",
        step: 3,
        title: "Desain & Penawaran",
        description:
            "Kami buatkan desain dan penawaran harga lengkap. Revisi sampai sesuai keinginan.",
        icon: "📝",
    },
    {
        id: "produksi",
        step: 4,
        title: "Produksi",
        description:
            "Pengerjaan di workshop dengan material berkualitas dan pengawasan ketat.",
        icon: "⚙️",
    },
    {
        id: "pemasangan",
        step: 5,
        title: "Pemasangan",
        description:
            "Instalasi on-site oleh tim berpengalaman. Finishing rapi dan serah terima.",
        icon: "✅",
    },
];
