export interface PortfolioItem {
    id: string;
    title: string;
    slug: string;
    category: string;
    location: string;
    year: number;
    images: string[];
    shortDescription: string;
    fullDescription?: string;
    materials: string[];
    processSteps: string[];
    dimensions?: string;
    duration?: string;
}

export const portfolioCategories = [
    { id: "all", label: "Semua" },
    { id: "kanopi", label: "Kanopi" },
    { id: "pagar", label: "Pagar" },
    { id: "railing", label: "Railing" },
    { id: "teralis", label: "Teralis" },
    { id: "custom", label: "Custom" },
] as const;

export const portfolio: PortfolioItem[] = [
    {
        id: "1",
        title: "Kanopi Carport Minimalis",
        slug: "kanopi-carport-minimalis",
        category: "kanopi",
        location: "Cemara Kuta",
        year: 2025,
        images: ["/portfolio/kanopi-1.jpg"],
        shortDescription:
            "Kanopi carport untuk 2 mobil dengan desain minimalis dan atap polycarbonate.",
        fullDescription:
            "Proyek pembuatan kanopi carport untuk rumah tinggal dengan kapasitas 2 mobil. Menggunakan desain minimalis dengan struktur hollow galvanis dan atap polycarbonate bening yang memungkinkan cahaya alami masuk.",
        materials: ["Hollow galvanis 4x8", "Polycarbonate 6mm", "Cat besi hitam doff"],
        processSteps: [
            "Survey lokasi dan pengukuran",
            "Desain struktur dan konfirmasi",
            "Fabrikasi di bengkel",
            "Instalasi on-site 2 hari",
            "Finishing dan serah terima",
        ],
        dimensions: "6m x 5m",
        duration: "5 hari kerja",
    },
    {
        id: "2",
        title: "Pagar Rumah Minimalis Modern",
        slug: "pagar-rumah-minimalis-modern",
        category: "pagar",
        location: "Komplek Citraland Pancing",
        year: 2025,
        images: ["/portfolio/pagar-1.jpg"],
        shortDescription:
            "Pagar depan rumah dengan kombinasi besi hollow dan panel solid minimalis.",
        materials: ["Hollow 4x4", "Plat besi 3mm", "Powder coating abu-abu"],
        processSteps: [
            "Konsultasi desain",
            "Pengukuran dan gambar kerja",
            "Produksi di workshop",
            "Pemasangan dan finishing",
        ],
        dimensions: "12m panjang x 1.8m tinggi",
        duration: "7 hari kerja",
    },
    {
        id: "3",
        title: "Railing Tangga Kaca Tempered",
        slug: "railing-tangga-kaca-tempered",
        category: "railing",
        location: "Medan Marelan",
        year: 2025,
        images: ["/portfolio/railing-1.jpg"],
        shortDescription:
            "Railing tangga modern dengan kombinasi besi hitam dan kaca tempered.",
        materials: ["Besi hollow 3x3", "Kaca tempered 10mm", "Finishing hitam doff"],
        processSteps: [
            "Survey dan ukur tangga",
            "Desain dan approval",
            "Fabrikasi frame besi",
            "Instalasi + pasang kaca",
        ],
        dimensions: "8m linear",
        duration: "4 hari kerja",
    },
    {
        id: "4",
        title: "Teralis Jendela Rumah 2 Lantai",
        slug: "teralis-jendela-rumah",
        category: "teralis",
        location: "Medan",
        year: 2024,
        images: ["/portfolio/teralis-1.jpg"],
        shortDescription:
            "Teralis untuk seluruh jendela rumah 2 lantai dengan desain minimalis.",
        materials: ["Besi bulat 12mm", "Cat powder coating putih"],
        processSteps: [
            "Survey semua jendela",
            "Produksi per unit",
            "Instalasi bertahap",
            "Finishing & QC",
        ],
        dimensions: "12 unit jendela",
        duration: "6 hari kerja",
    },
    {
        id: "5",
        title: "Pintu Lipat Garasi",
        slug: "pintu-lipat-garasi",
        category: "custom",
        location: "Medan",
        year: 2024,
        images: ["/portfolio/folding-1.jpg"],
        shortDescription:
            "Pintu lipat harmonika untuk garasi dengan sistem rel atas.",
        materials: ["Hollow 4x4", "Roda bearing", "Rel galvanis"],
        processSteps: [
            "Ukur lebar bukaan",
            "Desain jumlah daun pintu",
            "Fabrikasi + rel",
            "Instalasi sistem",
        ],
        dimensions: "4m lebar x 2.5m tinggi",
        duration: "5 hari kerja",
    },
    {
        id: "6",
        title: "Pagar Balkon Lantai 2",
        slug: "pagar-balkon-lantai-2",
        category: "railing",
        location: "Sei Mencirim Sunggal",
        year: 2024,
        images: ["/portfolio/balkon-1.jpg"],
        shortDescription:
            "Pagar pembatas balkon lantai 2 dengan desain garis horizontal modern.",
        materials: ["Hollow 2x4", "Finishing hitam glossy"],
        processSteps: [
            "Survey dan ukur balkon",
            "Produksi di bengkel",
            "Instalasi dengan anchor",
            "Cek keamanan",
        ],
        dimensions: "6m linear x 1m tinggi",
        duration: "3 hari kerja",
    },
];

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
    return portfolio.find((item) => item.slug === slug);
}

export function getPortfolioByCategory(category: string): PortfolioItem[] {
    if (category === "all") return portfolio;
    return portfolio.filter((item) => item.category === category);
}
