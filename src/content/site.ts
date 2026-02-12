export const siteConfig = {
  name: "Bengkel Las Senang & Senang",
  shortName: "Bengkel Las SS",
  tagline: "Spesialis Las untuk Kebutuhan Rumah & Proyek",
  description:
    "Bengkel Las Senang & Senang menyediakan jasa las berkualitas untuk kebutuhan rumah tangga dan proyek komersial. Kanopi, pagar, railing, teralis, dan pekerjaan custom lainnya.",

  // Contact Info
  phone: "081376421361",
  whatsapp: "6281376421361",
  email: "bengkellas.ss@gmail.com",

  // Address
  address: {
    street: "Jl. Sei Mencirim",
    district: "Kecamatan Deli Serdang",
    city: "Sunggal",
    province: "Sumatera Utara",
    postalCode: "20352",
    full: "Jl. Sei Mencirim Dusun III, Desa Paya Geli, Kec. Sunggal, Kabupaten Deli Serdang, Sumatera Utara 20352",
  },

  // Operating Hours
  hours: {
    weekdays: "08:00 - 18:00",
    saturday: "08:00 - 17:00",
    sunday: "Tutup",
  },

  // Social Media
  social: {
    instagram: "https://instagram.com/bengkellas.ss_",
    facebook: "https://facebook.com/bengkellasss",
  },

  // Service Area
  serviceArea: ["Medan", "Binjai", "Deli Serdang", "dan Sekitarnya"],

  // Experience
  experience: {
    years: 10,
    projects: 500,
    clients: 300,
  },

  // CTA Messages
  cta: {
    whatsappMessage: "Halo, saya tertarik dengan jasa las dari Bengkel Las SS. Bisa konsultasi?",
    consultationText: "Konsultasi Gratis",
    surveyText: "Survey & Estimasi",
    portfolioText: "Lihat Portofolio",
  },
} as const;

export type SiteConfig = typeof siteConfig;
