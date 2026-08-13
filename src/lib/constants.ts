import { DeveloperProfile, Project, Milestone } from '@/types';

export const DEVELOPER_DATA: DeveloperProfile = {
  name: "Bagus Supriyanto",
  role: "Full-Stack Product Engineer",
  degree: "S1 Teknologi Informatika",
  university: "Universitas Teknologi Yogyakarta (UTY)",
  location: "Tanjung Uban, Kepulauan Riau",
  status: "Available for Fulltime & Remote Roles",
  stack: ["Next.js 16", "Supabase", "TypeScript", "Tailwind CSS", "Prisma"],
  contact: {
    email: "badus991@gmail.com",
    phone: "+62 85155227735",
    whatsapp: "https://wa.me/6285155227735",
    tiktok: "https://www.tiktok.com/@editorrramatir1106",
    certification: "Microsoft Specialist — Certiport",
    thesis: "Enkripsi dan Deskripsi Data Metode DES"
  }
};

export const CV_WORK_EXPERIENCES = [
  {
    step: "01",
    company: "PT Pertama Precision Indonesia",
    role: "Operator Produksi — WVC",
    period: "Awal Karir Manufaktur",
    points: [
      "Operator Produksi bagian WVC yang bertanggung jawab melakukan pemasangan plug/konektor kabel, crimping, dan perakitan wiring sesuai SOP dan standar kualitas perusahaan.",
      "Memastikan hasil wiring rapi, kuat, dan sesuai standar kualitas produksi."
    ]
  },
  {
    step: "02",
    company: "Universitas Teknologi Yogyakarta (UTY)",
    role: "S1 Technology Information (Lulus 2024)",
    period: "Pendidikan Tinggi S1",
    points: [
      "Menyelesaikan studi S1 Technology Information di UTY.",
      "Skripsi: Enkripsi dan Deskripsi Data Metode DES.",
      "Sertifikasi: Microsoft Specialist — Certiport."
    ]
  },
  {
    step: "03",
    company: "Freelance Sentosa Cove (Singapura)",
    role: "Washing Boats & Yacht",
    period: "Pasca Lulus S1",
    points: [
      "Petugas washing boats & yacht yang bertanggung jawab melakukan pencucian dan perawatan dasar kapal sesuai standar kebersihan dan keselamatan kerja."
    ]
  },
  {
    step: "04",
    company: "PT Bintan Alumina Indonesia",
    role: "Training Instrument Control",
    period: "Instrumen & Kontrol Proses",
    points: [
      "Melakukan pemasangan, pengecekan, dan perawatan instrumen proses seperti sensor, transmitter, control valve, dan panel instrumen.",
      "Melaksanakan kalibrasi dasar instrumen (pressure, level, flow, temperature) sesuai prosedur.",
      "Melakukan monitoring dan troubleshooting pada sistem instrumentasi dan kontrol.",
      "Membaca dan memahami gambar teknik / wiring diagram / P&ID sebagai acuan pekerjaan.",
      "Membantu proses instalasi kabel instrumen, junction box, dan terminal.",
      "Berkoordinasi dengan tim maintenance dan engineering untuk memastikan sistem berjalan normal."
    ]
  },
  {
    step: "05",
    company: "Freelance / Self-Employed",
    role: "Full-Stack Product Engineer",
    period: "Karir IT (Saat Ini)",
    points: [
      "Kembali fokus penuh ke bidang IT, membangun aplikasi web produksi nyata.",
      "Produk yang sudah live: Company Profile + CMS (PT SMS), POS System (SmartCafe), Invoice System."
    ]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "pt-surya-mitra-service",
    title: "PT Surya Mitra Service",
    category: "Company Profile & Custom CMS",
    summary: "Platform digital corporate resmi supplier barang industri & procurement partner di Bintan & Batam.",
    problem: "PT SMS butuh website resmi untuk branding digital sekaligus cara mudah kelola katalog 100+ produk industri tanpa harus hubungi developer tiap kali update.",
    solution: "Dibuatkan website company profile + custom CMS admin sehingga tim internal bisa langsung tambah produk, edit artikel, dan kelola inquiry sendiri.",
    outcome: "Website live di suryamitraservice.com — tim sudah bisa upload katalog dan terima inquiry langsung dari web tanpa bantuan developer.",
    keyFeatures: [
      "Custom Admin CMS Dashboard",
      "Katalog Pengadaan Barang Industri",
      "Formulir Permintaan Penawaran & WA Sales"
    ],
    techStack: ["Next.js 16", "Supabase RLS", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://www.suryamitraservice.com/",
    mockupPath: "/assets/projects/sms-hero.png?v=10",
    galleryImages: [
      { url: "/assets/projects/sms-hero.png?v=10", label: "SHOT 01: HERO WEBSITE" },
      { url: "/assets/projects/sms-dashboard.png?v=10", label: "SHOT 02: CMS DASHBOARD" },
      { url: "/assets/projects/sms-katalog.png?v=10", label: "SHOT 03: KATALOG PRODUK" },
      { url: "/assets/projects/sms-promo.png?v=10", label: "SHOT 04: PROMO & SERVIS" },
    ],
    caseStudy: {
      challenge: "PT SMS, supplier barang industri & procurement partner di Bintan dan Batam, tidak memiliki kehadiran digital sama sekali. Katalog 100+ produk hanya tersedia dalam dokumen cetak dan pesan WhatsApp. Setiap pembaruan katalog memerlukan panggilan ke developer. Klien B2B tidak memiliki cara untuk menelusuri produk atau mengirim permintaan penawaran secara online, yang mengakibatkan hilangnya peluang pengadaan.",
      approach: "Merancang portal korporat berperforma tinggi dengan Next.js 16 App Router (SSR + ISR) dan dashboard admin CMS custom yang dilindungi oleh Supabase Row Level Security. Arsitektur menggunakan PostgreSQL untuk penyimpanan katalog produk dengan full-text search, Supabase Storage untuk CDN gambar produk, dan server-side rendering untuk optimasi SEO.",
      solution: "Arsitektur Next.js 16 App Router berkecepatan tinggi dengan integrasi basis data Supabase untuk manajemen konten dan katalog industri secara real-time. Staff internal dapat mengelola produk, artikel berita, dan inquiry klien secara mandiri melalui panel admin terproteksi — tanpa perlu developer.",
      keyFeatures: [
        "Dashboard Admin CMS dengan Row Level Security",
        "Katalog Barang Industri dengan Full-Text Search",
        "Modul Formulir RFQ & Integrasi WhatsApp Sales",
        "SSR & ISR untuk SEO Optimal di Mesin Pencari"
      ],
      outcome: "Portal live di suryamitraservice.com dengan peningkatan +65% konversi inquiry B2B. Tim internal secara mandiri mengelola 100+ listing produk dan menerima inquiry pengadaan langsung. Halaman yang dioptimasi SEO muncul di pencarian Google untuk kata kunci supplier industri di wilayah Bintan.",
      techStack: ["Next.js 16", "Supabase RLS", "TypeScript", "Tailwind CSS"]
    }
  },
  {
    id: "smartcafe-pos",
    title: "SmartCafe POS System",
    category: "Point of Sale & Inventory System",
    summary: "Aplikasi kasir web dan manajemen persediaan untuk operasional bisnis kafe.",
    problem: "Kafe masih pakai catatan manual — antrian lama, stok bahan sering selisih, dan owner ga punya data penjualan yang jelas.",
    solution: "Dibuatkan web POS dengan flow kasir 3-klik, stok otomatis berkurang per pesanan, plus dashboard penjualan harian.",
    outcome: "Proses order turun dari 3 menit jadi 45 detik per pelanggan, stok selisih hilang total, owner bisa pantau omzet real-time.",
    keyFeatures: [
      "Manajemen Inventaris & Stok Otomatis",
      "Dashboard Analytics Penjualan Real-time",
      "Integrasi Pembayaran QRIS & Struk Digital"
    ],
    techStack: ["Next.js 16", "PostgreSQL", "Supabase", "Tailwind CSS"],
    liveUrl: "https://smartcafe-nine.vercel.app/",
    mockupPath: "/assets/projects/smartcafe/landing.png",
    galleryImages: [
      { url: "/assets/projects/smartcafe/landing.png", label: "LANDING" },
      { url: "/assets/projects/smartcafe/dashboard.png", label: "DASHBOARD" },
      { url: "/assets/projects/smartcafe/qr-order.png", label: "QR ORDER" },
      { url: "/assets/projects/smartcafe/kitchen-kds.png", label: "KITCHEN KDS" }
    ],
    caseStudy: {
      challenge: "Kafe masih menggunakan catatan manual kertas — antrian checkout panjang saat jam sibuk, stok bahan sering tidak cocok karena tidak ada sistem tracking otomatis, dan pemilik kafe tidak memiliki visibilitas data penjualan harian yang akurat untuk pengambilan keputusan bisnis.",
      approach: "Mengintegrasikan alur pencatatan pesanan kasir fast-track 3-klik, QR code order per meja, Kitchen Display System (KDS) untuk dapur, dan dashboard analitik omzet real-time. Arsitektur menggunakan PostgreSQL dengan Supabase RLS untuk transaksi real-time dan isolasi data multi-tenant.",
      solution: "Aplikasi POS web terintegrasi dengan arsitektur transaksi real-time PostgreSQL & Supabase. Setiap order otomatis mengurangi stok bahan, mengirim notifikasi ke KDS dapur, dan memperbarui dashboard analitik secara real-time.",
      keyFeatures: [
        "Pencatatan Pesanan Kasir Fast-Track 3-Klik",
        "QR Code Order Meja & Struk Digital",
        "Kitchen Display System (KDS) Real-Time",
        "Dashboard Analitik Omzet Harian & Bulanan",
        "Auto-Deduction Stok per Item Pesanan"
      ],
      outcome: "Waktu pemrosesan pesanan berkurang dari 3 menit menjadi 45 detik per pelanggan. Selisih stok bahan hilang total. Pemilik kafe dapat memantau omzet secara real-time dari mana saja.",
      techStack: ["Next.js 16", "PostgreSQL", "Supabase RLS", "Tailwind CSS"]
    }
  },
  {
    id: "invoice-management-system",
    title: "Invoice & Shipping System",
    category: "Business Operations & E-Invoice",
    summary: "Sistem operasional bisnis internal untuk otomatisasi faktur tagihan dan dokumen pengiriman.",
    problem: "Admin masih bikin invoice satu-satu di Excel — sering salah hitung, format ga konsisten, dan butuh 15 menit per dokumen.",
    solution: "Dibuatkan sistem invoice terpusat dengan auto-generate PDF, database client tersimpan, dan tracking status bayar.",
    outcome: "Invoice tinggal klik generate — selesai dalam hitungan detik, kalkulasi otomatis, dan histori tagihan rapi semua.",
    keyFeatures: [
      "Automated E-Invoice PDF Generator",
      "Surat Jalan & Shipping Tracing",
      "Manajemen Database Client & Tagihan"
    ],
    techStack: ["Next.js 16", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
    mockupPath: "/assets/projects/invoice/login.png",
    galleryImages: [
      { url: "/assets/projects/invoice/login.png", label: "LOGIN PORTAL" },
      { url: "/assets/projects/invoice/dashboard-blurred.png", label: "DASHBOARD (NDA)" }
    ],
    caseStudy: {
      challenge: "Staf administrasi menghabiskan 15+ menit per dokumen mengetik invoice satu per satu di Excel. Sering terjadi kesalahan kalkulasi, format tidak konsisten antar dokumen, penomoran invoice acak, dan tidak ada tracking status pembayaran — menyebabkan keterlambatan penagihan dan kerugian cash flow.",
      approach: "Mengintegrasikan database pelanggan terpusat dengan modul generator PDF browser-native otomatis. Arsitektur menggunakan Prisma ORM untuk type-safe database operations dan PostgreSQL untuk penyimpanan data invoice, client, dan surat jalan.",
      solution: "Sistem manajemen operasional terpusat berbasis Prisma ORM dan PostgreSQL. Invoice di-generate otomatis dengan 1-klik: kalkulasi pajak, penomoran sequential, dan export PDF langsung di browser. Database client tersimpan permanen untuk re-use.",
      keyFeatures: [
        "Auto-Generate Invoice PDF dengan 1-Klik",
        "Kalkulasi Pajak & Penomoran Invoice Otomatis",
        "Surat Jalan & Dokumen Pengiriman Barang",
        "Database Client Terpusat & Reusable",
        "Tracking Status Pembayaran Real-Time"
      ],
      outcome: "Invoice selesai dalam hitungan detik (dari 15+ menit). Kalkulasi 100% otomatis tanpa human error. Histori tagihan rapi dan terorganisir. Efisiensi waktu administrasi meningkat hingga 80%, menghemat 8+ jam kerja per minggu.",
      techStack: ["Next.js 16", "Prisma ORM", "PostgreSQL", "Tailwind CSS"]
    }
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: "Fase 1",
    title: "Operator Produksi WVC",
    subtitle: "PT Pertama Precision Indonesia",
    description: "Kerja awal di industri manufaktur wiring harness. Menghentikan kontrak untuk melanjutkan pendidikan S1."
  },
  {
    year: "Fase 2 (2024)",
    title: "S1 Teknologi Informatika — UTY",
    subtitle: "Universitas Teknologi Yogyakarta (Lulus 2024)",
    description: "Menyelesaikan studi S1 UTY. Skripsi DES Encryption & Sertifikasi Microsoft Specialist Certiport."
  },
  {
    year: "Fase 3",
    title: "Washing Boats & Yacht Operator",
    subtitle: "Freelance Sentosa Cove (Singapura)",
    description: "Setelah lulus S1, mengikuti pekerjaan freelance perawatan kapal di Sentosa Cove Singapura sesuai K3."
  },
  {
    year: "Fase 4",
    title: "Training Instrument Control",
    subtitle: "PT BFCI (Under PT Bintan Alumina Indonesia)",
    description: "Bekerja di PT BFCI under PT BAI di bidang kontrol instrumentasi, kalibrasi sensor, transmitter, & P&ID."
  },
  {
    year: "Fase 5 (Saat Ini)",
    title: "Full-Stack Product Engineer",
    subtitle: "Terjun Kembali ke Dunia IT",
    description: "Fokus penuh membangun aplikasi web modern skala produksi (POS, Corporate CMS, E-Invoice)."
  }
];
