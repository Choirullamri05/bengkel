export interface Testimonial {
    id: string;
    name: string;
    location: string;
    rating: number;
    text: string;
    service: string;
    date: string;
}

export const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Budi Santoso",
        location: "Cemara Kuta",
        rating: 5,
        text: "Kanopi yang dibuat sangat rapi dan kuat. Tukangnya profesional, datang tepat waktu, dan hasilnya sesuai ekspektasi. Recommended!",
        service: "Kanopi Carport",
        date: "2025-01",
    },
    {
        id: "2",
        name: "Ibu Rina",
        location: "Cintraland, Pancing",
        rating: 5,
        text: "Pagar rumah saya jadi terlihat modern dan elegan. Prosesnya cepat, komunikasi lancar, dan harga kompetitif. Terima kasih Bengkel Las SS!",
        service: "Pagar Minimalis",
        date: "2024-12",
    },
    {
        id: "3",
        name: "Hendra Wijaya",
        location: "Medan, Marelan",
        rating: 5,
        text: "Railing tangga dengan kaca tempered-nya bagus banget. Desainnya clean, pemasangan rapi. Puas dengan hasilnya.",
        service: "Railing Tangga",
        date: "2024-11",
    },
    {
        id: "4",
        name: "Pak Ahmad",
        location: "Medan, Pancing",
        rating: 5,
        text: "Sudah 2x pakai jasa Bengkel Las SS, selalu puas. Teralis dan kanopi rumah semua dikerjakan dengan baik. Pasti rekomendasikan ke tetangga.",
        service: "Teralis & Kanopi",
        date: "2024-10",
    },
    {
        id: "5",
        name: "Lisa Permata",
        location: "Medan, Marelan",
        rating: 4,
        text: "Pintu lipat garasi akhirnya jadi juga setelah cari-cari bengkel. Hasilnya memuaskan, sistem buka-tutupnya smooth.",
        service: "Pintu Lipat",
        date: "2024-09",
    },
];
