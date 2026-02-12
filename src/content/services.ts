export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
    priceRange?: string;
}

export const services: Service[] = [
    {
        id: "kanopi",
        title: "Kanopi",
        description:
            "Kanopi besi hollow dan galvanis untuk garasi, carport, teras, dan area outdoor lainnya. Tersedia berbagai model minimalis hingga klasik.",
        icon: "/images/canopy.png",
        features: [
            "Besi hollow galvanis anti karat",
            "Atap spandek / polycarbonate",
            "Custom ukuran sesuai lahan",
            "Garansi konstruksi 1 tahun",
        ],
        priceRange: "Hubungi untuk estimasi",
    },
    {
        id: "pagar",
        title: "Pagar & Pintu Pagar",
        description:
            "Pagar rumah dan pintu pagar dengan desain minimalis modern hingga klasik. Kokoh, aman, dan estetik.",
        icon: "/images/iron-fence.png",
        features: [
            "Desain custom sesuai permintaan",
            "Pintu geser / dorong / swing",
            "Finishing cat / powder coating",
            "Sistem pengunci aman",
        ],
        priceRange: "Hubungi untuk estimasi",
    },
    {
        id: "railing",
        title: "Railing Tangga & Balkon",
        description:
            "Railing tangga dan balkon yang kuat dan stylish. Pilihan material besi, hollow, atau kombinasi kaca.",
        icon: "/images/stair.png",
        features: [
            "Desain minimalis modern",
            "Kombinasi besi + kaca tempered",
            "Anti karat dengan coating",
            "Aman untuk anak-anak",
        ],
        priceRange: "Hubungi untuk estimasi",
    },
    {
        id: "teralis",
        title: "Teralis Jendela",
        description:
            "Teralis jendela untuk keamanan rumah dengan desain yang tidak menghalangi cahaya dan sirkulasi udara.",
        icon: "/images/windows.png",
        features: [
            "Desain minimalis & klasik",
            "Besi solid anti bobol",
            "Finishing rapi & tahan lama",
            "Tidak menghalangi view",
        ],
        priceRange: "Hubungi untuk estimasi",
    },
    {
        id: "balkon",
        title: "Balkon & Pagar Minimalis",
        description:
            "Pagar balkon dan pembatas area dengan gaya minimalis kontemporer yang cocok untuk rumah modern.",
        icon: "/images/window.png",
        features: [
            "Desain clean & modern",
            "Material hollow premium",
            "Tahan cuaca ekstrem",
            "Instalasi rapi",
        ],
        priceRange: "Hubungi untuk estimasi",
    },
    {
        id: "pintu-lipat",
        title: "Pintu Lipat / Folding Gate",
        description:
            "Pintu lipat harmonika untuk garasi, toko, dan area yang membutuhkan akses lebar. Praktis dan hemat ruang.",
        icon: "/images/folding.png",
        features: [
            "Sistem lipat smooth",
            "Material besi tebal",
            "Finishing anti karat",
            "Mudah dioperasikan",
        ],
        priceRange: "Hubungi untuk estimasi",
    },
    {
        id: "rak-besi",
        title: "Rak Besi & Meja Kerja",
        description:
            "Rak gudang, rak display, dan meja kerja industrial dari besi. Kuat, tahan beban berat, dan awet.",
        icon: "/images/table.png",
        features: [
            "Custom ukuran & level",
            "Kapasitas beban tinggi",
            "Cocok untuk gudang/toko",
            "Finishing powder coating",
        ],
        priceRange: "Hubungi untuk estimasi",
    },
    {
        id: "custom",
        title: "Pekerjaan Custom",
        description:
            "Layanan pembuatan custom sesuai desain Anda. Konsultasikan ide Anda, kami wujudkan dengan presisi.",
        icon: "/images/ellipsis.png",
        features: [
            "Free konsultasi desain",
            "3D preview (opsional)",
            "Material sesuai budget",
            "Pengerjaan presisi",
        ],
        priceRange: "Hubungi untuk estimasi",
    },
];

export type { Service as ServiceType };
