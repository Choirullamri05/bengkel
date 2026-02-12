export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export const faqItems: FAQItem[] = [
    {
        id: "1",
        question: "Berapa lama waktu pengerjaan?",
        answer:
            "Waktu pengerjaan tergantung kompleksitas proyek. Untuk pekerjaan standar seperti kanopi atau pagar, biasanya 3-7 hari kerja. Proyek custom bisa lebih lama. Estimasi waktu akan kami informasikan saat penawaran.",
    },
    {
        id: "2",
        question: "Apakah ada garansi?",
        answer:
            "Ya, kami memberikan garansi konstruksi selama 3 bulan untuk semua pekerjaan. Garansi mencakup kerusakan akibat kesalahan konstruksi, bukan akibat penggunaan atau force majeure.",
    },
    {
        id: "3",
        question: "Area mana saja yang dilayani?",
        answer:
            "Kami melayani wilayah Medan Raya, termasuk Kota Medan, Deli Serdang, Binjai, dan sekitarnya. Untuk area di luar wilayah tersebut, silakan konsultasi terlebih dahulu.",
    },
    {
        id: "4",
        question: "Apakah survey dan konsultasi gratis?",
        answer:
            "Ya, survey dan konsultasi gratis untuk wilayah layanan kami. Kami akan datang ke lokasi, melakukan pengukuran, dan memberikan penawaran tanpa biaya.",
    },
    {
        id: "5",
        question: "Bagaimana sistem pembayarannya?",
        answer:
            "Sistem pembayaran standar adalah DP 50% saat deal, dan pelunasan 50% setelah pekerjaan selesai dan diterima. Untuk proyek besar, bisa dinegosiasikan termin pembayaran.",
    },
    {
        id: "6",
        question: "Bisa request desain custom?",
        answer:
            "Tentu! Kami menerima request desain custom sesuai keinginan Anda. Tim kami akan membantu mewujudkan ide Anda menjadi produk nyata dengan kualitas terbaik.",
    },
    {
        id: "7",
        question: "Material apa yang digunakan?",
        answer:
            "Kami menggunakan material berkualitas seperti besi hollow galvanis, besi solid, plat besi tebal, dan finishing powder coating atau cat duco. Semua material anti karat dan tahan lama.",
    },
];
