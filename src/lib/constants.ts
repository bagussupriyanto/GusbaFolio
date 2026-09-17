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
    title: "Modern Corporate Profile & B2B E-Catalog System — PT SMS",
    category: "B2B Portal & Headless CMS",
    summary: "Platform Web korporat & katalog digital B2B modern dengan Smart Google Maps Sanitizer, pipelining kompresi WebP 88%, PageSpeed 100/100, dan redesain mobile 50:50.",
    problem: "1) Katalog produk industri & jasa teknis belum terstruktur, menyulitkan pencarian spesifikasi barang oleh klien B2B. 2) Tampilan mobile terlalu panjang (endless scrolling) & kusam memicu bounce rate tinggi. 3) Error iframe saat admin memasukkan shortlink Google Maps (maps.app.goo.gl) akibat X-Frame-Options. 4) Gambar mentah (>4 MB) & iframe peta awal menurunkan skor PageSpeed Insights pada jaringan 4G.",
    solution: "Mengembangkan web aplikasi B2B modern berbasis Next.js 15 (App Router), Prisma, & Tailwind CSS: A) Smart Google Maps Sanitizer Engine di lib/maps.ts mengonversi shortlink maps.app.goo.gl, koordinat, atau tag iframe menjadi Embed URL resmi real-time tanpa error. B) Optimasi Performa & PageSpeed: Kompresi WebP (hemat 88%, dari 7.2 MB jadi ~897 KB), Lazy-Loading iframe footer via IntersectionObserver (hemat 300-500 KB JS), Code-Splitting below-the-fold via next/dynamic, & defer analytics (lazyOnload). C) Redesain UI/UX Mobile-First: Banner Hero full-screen dengan floating overlap card & layout simetris 50:50 (RFQ Form + WA CS) memangkas scroll height HP hingga 50%. D) Self-Service Headless CMS Panel (/admin) untuk mengelola katalog, klien, portofolio, testimoni, iklan promo popup, & RFQ inquiries. E) SEO & Structured Data Lokal (JSON-LD LocalBusiness Schema, OpenGraph Metadata, XML Sitemap).",
    outcome: "🟢 PageSpeed Score 100/100 SEO & Best Practices, Desktop Performance 88-95+, Mobile 82-90+ (FCP 1.1s). 🗺️ Integrasi Google Maps shortlink 100% bebas error CORS/iframe. ⚡ Proses RFQ & WA CS 2x lebih cepat di HP tanpa scrolling melelahkan. 🏆 Meningkatkan kredibilitas merek PT SMS di mata klien industri, pabrik, & galangan kapal.",
    keyFeatures: [
      "Smart Google Maps Sanitizer Engine (Shortlink Auto-Convert)",
      "Pipelining Kompresi WebP (Ukuran Media Hemat 88%)",
      "Lazy-Loading Iframe Footer berbasis IntersectionObserver",
      "Layout Simetris 50:50 Mobile-First (Scroll Height -50%)",
      "Self-Service Headless CMS Panel (/admin) & RFQ Management",
      "SEO LocalBusiness JSON-LD Schema & Automated XML Sitemap"
    ],
    techStack: ["Next.js 15", "Prisma ORM", "Tailwind CSS", "TypeScript", "WebP", "Headless CMS"],
    liveUrl: "https://www.suryamitraservice.com/",
    mockupPath: "/assets/projects/sms-hero.png?v=10",
    galleryImages: [
      { url: "/assets/projects/sms-hero.png?v=10", label: "SHOT 01: HERO WEBSITE" },
      { url: "/assets/projects/sms-dashboard.png?v=10", label: "SHOT 02: CMS DASHBOARD" },
      { url: "/assets/projects/sms-katalog.png?v=10", label: "SHOT 03: KATALOG PRODUK" },
      { url: "/assets/projects/sms-promo.png?v=10", label: "SHOT 04: PROMO & SERVIS" },
    ],
    caseStudy: {
      challenge: "1) Katalog produk industri & layanan teknis belum terstruktur secara sistematis, membuat klien B2B kesulitan mencari spesifikasi barang secara mandiri. 2) Tampilan mobile terlalu panjang (endless scrolling), tidak proporsional, & gambar hero kusam memicu bounce rate tinggi. 3) Admin sering mengalami error saat memasukkan link bagikan (shortlink maps.app.goo.gl) ke web karena batasan keamanan iframe Google (X-Frame-Options). 4) Gambar mentah (>4 MB) & iframe peta serentak menurunkan skor PageSpeed Insights (merah/oranye) pada 4G.",
      approach: "Merancang arsitektur High-Performance B2B Corporate Profile berbasis Next.js 15 App Router & Prisma ORM: Mengembangkan Smart Google Maps Sanitizer di lib/maps.ts, pipelining kompresi media WebP, lazy-loading berbasis IntersectionObserver, serta redesain antarmuka mobile-first simetris 50:50.",
      solution: "Web aplikasi full-stack B2B modern: 1) Smart Google Maps Sanitizer Engine mengonversi shortlink maps.app.goo.gl, koordinat, atau tag HTML iframe secara real-time menjadi Embed URL resmi Google Maps tanpa error. 2) Pipelining kompresi WebP (menghemat ukuran file hingga 88%, dari 7.2 MB jadi ~897 KB). 3) IntersectionObserver lazy-loading untuk iframe footer (menghemat 300-500 KB JS). 4) Code-splitting below-the-fold via next/dynamic & defer analytics (lazyOnload). 5) Layout simetris 50:50 RFQ Form & WA CS Card memangkas scroll height HP 50%. 6) Self-Service Headless CMS Panel (/admin) untuk mengelola katalog, klien, testimoni, promo popup, & penawaran RFQ. 7) JSON-LD LocalBusiness Schema & XML Sitemap.",
      keyFeatures: [
        "Smart Google Maps Sanitizer Engine di lib/maps.ts (Shortlink Auto-Convert)",
        "Pipelining Kompresi Gambar WebP (Hemat Ukuran Media 88%)",
        "Lazy-Loading Iframe Footer berbasis IntersectionObserver (Hemat 300-500 KB JS)",
        "Redesain Layout Mobile-First Simetris 50:50 (Memangkas Scroll Height 50%)",
        "Self-Service Headless CMS Panel (/admin) & Manajemen RFQ Inquiries",
        "SEO LocalBusiness JSON-LD Schema & Automated XML Sitemap"
      ],
      outcome: "🟢 PageSpeed Score 100/100 SEO & Best Practices, Desktop Performance 88-95+, Mobile 82-90+ (First Contentful Paint 1.1s). 🗺️ Integrasi Google Maps shortlink 100% bebas error CORS/iframe. ⚡ Jangkauan form RFQ & WA CS 2x lebih cepat di HP. 🏆 Meningkatkan kredibilitas PT SMS di mata klien industri, pabrik, & galangan kapal.",
      techStack: ["Next.js 15", "Prisma ORM", "Tailwind CSS", "TypeScript", "WebP", "Headless CMS"]
    }
  },
  {
    id: "smartcafe-pos",
    title: "SmartCafe — Cloud POS & Digital Menu SaaS",
    category: "F&B Micro-SaaS & Realtime KDS",
    summary: "Platform All-in-One Cloud POS, Kitchen Display System (KDS) real-time, QR self-order tanpa app, dan shift cash reconciliation khusus UMKM F&B.",
    problem: "1) POS konvensional mahal, lisensi rumit, & memotong komisi MDR per transaksi. 2) Miskomunikasi kasir & dapur akibat struk kertas manual memicu pesanan terselip di jam sibuk. 3) Self-order berbasis app mewajibkan unduh aplikasi sehingga menurunkan niat pesan pelanggan. 4) Keterbatasan dukungan hardware POS tradisional.",
    solution: "Mengembangkan arsitektur Cloud POS & Digital Menu SaaS berbasis Next.js & Supabase: A) Real-time Order Synchronization via Supabase Realtime pub/sub antara kasir, QR meja, & KDS dapur tanpa refresh. B) RBAC & Multi-Tenant Security via Supabase RLS membatasi hak akses Owner, Manager, Cashier, & Kitchen Staff. C) Frictionless QR Self-Order berbasis web-native tanpa instalasi app/registrasi. D) Cross-Platform Print Engine via window.print() iframe rendering kompatibel 100% dengan printer thermal Bluetooth/USB/WiFi. E) Subscription Lifecycle Engine (14-day free trial, auto-lock screen, flat Rp99.000/bulan tanpa komisi).",
    outcome: "💰 Hemat biaya software kasir >70% dibanding POS konvensional (flat Rp99.000/bln tanpa komisi). ⚡ Pemrosesan pesanan real-time presisi dengan 0% kesalahan penyajian. 📱 Kompatibel 100% di HP Android, Tablet, & Laptop eksisting. 🚀 Arsitektur cloud-native siap untuk skalabilitas multi-cabang.",
    keyFeatures: [
      "Real-time Kitchen Display System (KDS Queue)",
      "Frictionless QR Code Menu & Table Self-Order",
      "Point of Sale (POS) Cashier & Multi-Payment",
      "Shift Management & Cash Drawer Reconciliation",
      "Cross-Platform Thermal Print Engine (window.print)",
      "Subscription Engine (14-Day Trial & Auto-Lock)"
    ],
    techStack: ["Next.js", "TypeScript", "Supabase Realtime", "Supabase RLS", "Tailwind CSS", "Web Print APIs"],
    liveUrl: "https://smartcafe-nine.vercel.app/",
    mockupPath: "/assets/projects/smartcafe/landing.png",
    galleryImages: [
      { url: "/assets/projects/smartcafe/landing.png", label: "LANDING" },
      { url: "/assets/projects/smartcafe/dashboard.png", label: "DASHBOARD" },
      { url: "/assets/projects/smartcafe/qr-order.png", label: "QR ORDER" },
      { url: "/assets/projects/smartcafe/kitchen-kds.png", label: "KITCHEN KDS" }
    ],
    caseStudy: {
      challenge: "1) Sistem POS populer umumnya mahal, memiliki lisensi rumit, atau memotong biaya komisi (MDR fee) berulang per transaksi yang memberatkan margin UMKM. 2) Penggunaan struk kertas manual menyebabkan pesanan terselip, keterlambatan penyajian, & kesalahan pesanan pada jam sibuk. 3) Self-order berbasis app seluler mewajibkan pelanggan mengunduh aplikasi terlebih dahulu sehingga menurunkan niat pesan mandiri. 4) Banyak POS hanya mendukung hardware/OS tertentu (misal iPad saja).",
      approach: "Merancang arsitektur B2B Micro-SaaS cloud-native berbasis Next.js App Router & Supabase Realtime: Membangun sinkronisasi pub/sub kasir-dapur seketika, keamanan multi-tenant dengan Supabase RLS & RBAC, menu QR web-native tanpa instalasi app, serta engine cetak struk lintas platform tanpa API fee.",
      solution: "Platform SaaS Point of Sale (POS) & Menu Digital terintegrasi: 1) Real-time Order Sync (Supabase Realtime) memperbarui layar dapur (KDS) seketika saat pesanan dibuat dari kasir atau QR meja. 2) Row Level Security (RLS) & RBAC mengisolasi data antar-cabang dan membatasi akses peran (Owner, Manager, Cashier, Kitchen Staff). 3) Frictionless QR Self-Order web-native cukup pindai kamera hp tanpa unduh app/registrasi. 4) Cross-Platform Print Engine berbasis window.print() iframe rendering kompatibel 100% di Android, iOS, Windows, & Mac pada beragam printer thermal. 5) Subscription Engine menangani 14-day free trial, penguncian akun otomatis, & verifikasi bayar flat Rp99.000/bulan.",
      keyFeatures: [
        "Real-time Order Synchronization via Supabase Realtime Pub/Sub",
        "Row Level Security (RLS) & Role-Based Access Control (RBAC)",
        "Frictionless QR Code Menu & Table Self-Order Web-Native",
        "Cross-Platform Thermal Print Engine (window.print Iframe Rendering)",
        "Shift Management & Cash Drawer Reconciliation",
        "Subscription Lifecycle Engine (14-Day Free Trial & Flat B2B SaaS)"
      ],
      outcome: "💰 Menekan pengeluaran software kasir UMKM >70% (flat Rp99.000/bln tanpa komisi per transaksi). ⚡ Pemrosesan pesanan real-time presisi dengan 0% kesalahan pesanan. 📱 Kompatibel 100% pada HP Android, Tablet, & Laptop eksisting. 🚀 Siap menangani skalabilitas banyak cabang kafe secara bersamaan.",
      techStack: ["Next.js", "TypeScript", "Supabase Realtime", "Supabase RLS", "Tailwind CSS", "Web Print APIs"]
    }
  },
  {
    id: "invoice-management-system",
    title: "Smart Inventory & E-Invoice System (PWA)",
    category: "Business Operations & E-Invoice PWA",
    summary: "Aplikasi Web & Progressive Web App (PWA) untuk manajemen inventaris stok barang, transaksi invoice penjualan, piutang jatuh tempo (JTO), serta laporan arus kas dual-layer (Cash vs Accrual).",
    problem: "1) Sering terjadi kerancuan antara omzet penjualan (accrual) dan arus kas riil (cash-basis pelunasan JTO). 2) Pengisian data pelanggan manual berulang memicu typo dan pemborosan waktu. 3) Admin memerlukan pembatasan jam login operasional resmi dan audit trail data sensitif. 4) Risiko keamanan Server Actions, filter injection, serta batas koneksi cloud DB free-tier.",
    solution: "Mengembangkan arsitektur Web & PWA berbasis Next.js 16 (App Router) & Supabase: A) Dual-Layer Financial Engine (Cash-Basis untuk Kas Riil & Accrual-Basis untuk Omzet) dengan visualisasi Recharts 3-deret data. B) Smart Customer Autocomplete pada Combobox dengan auto-fill kontekstual. C) Work Hours Guard RBAC membatasi waktu login Admin pada jam kerja operasional. D) Security Hardening dengan requireAuth() guard, CSP headers, PostgREST regex sanitization, SHA-256 password hashing, dan Automatic Audit Trail. E) Next.js tag-based cache invalidation (revalidateTag) dan integrasi PWA.",
    outcome: "⚡ Efisiensi pembuatan invoice 60-70% lebih cepat dengan smart autocomplete. 🎯 Keakuratan laporan keuangan 100% tanpa salah hitung piutang. 🛡️ 100% Server Actions terproteksi auth guard & akses admin terisolasi sesuai jam operasional. 📱 Installable PWA di Desktop & Mobile.",
    keyFeatures: [
      "Dual-Layer Financial Engine (Cash vs Accrual)",
      "Smart Customer Autocomplete Combobox",
      "Work Hours Guard & RBAC Access Control",
      "Enterprise Audit Trail & SHA-256 Hashing",
      "Recharts Multi-Series Financial Analytics",
      "PWA Support & Tag-Based Cache Invalidation"
    ],
    techStack: ["Next.js 16", "Supabase", "TypeScript", "Tailwind CSS", "Recharts", "PWA"],
    mockupPath: "/assets/projects/invoice/login.png",
    galleryImages: [
      { url: "/assets/projects/invoice/login.png", label: "LOGIN PORTAL" },
      { url: "/assets/projects/invoice/dashboard-blurred.png", label: "DASHBOARD (NDA)" }
    ],
    caseStudy: {
      challenge: "Sebelum aplikasi dibangun: 1) Sering terjadi kerancuan antara omzet penjualan (invoice baru) dengan kas riil (pelunasan JTO). 2) Pengisian manual data pelanggan berulang memicu typo & pemborosan waktu. 3) Pemilik bisnis memerlukan pembatasan jam login Admin pada jam kerja operasional resmi serta rekam jejak (audit trail) perubahan data sensitif. 4) Risiko keamanan Server Actions/API, filter injection, dan concurrent connection limits pada cloud DB free-tier.",
      approach: "Merancang arsitektur Dual-Layer Financial Engine memisahkan Cash-Basis (pemasukan/pengeluaran riil) dan Accrual-Basis (omzet penjualan saat invoice dibuat). Menerapkan Work Hours Guard melalui Middleware & Server Actions, Combobox Autocomplete deduplikasi data pelanggan tanpa tabel tambahan, serta Security Hardening komprehensif.",
      solution: "Aplikasi berbasis Web & PWA terintegrasi: 1) Visualisasi Recharts AreaChart 3-deret data (Pemasukan, Pengeluaran, Omzet) dengan skala Y-axis dinamis. 2) Combobox Autocomplete auto-fill nama, alamat, & telepon pelanggan. 3) RBAC Flex-Guard membatasi login Admin sesuai jadwal shift (termasuk lintas tengah malam) & Owner 24/7. 4) Auth guard requireAuth(), CSP headers, PostgREST regex sanitization, SHA-256 salted password hashing, dan tabel audit_logs otomatis. 5) Optimization dengan unstable_cache & revalidateTag.",
      keyFeatures: [
        "Dual-Layer Financial Engine (Cash-Basis vs Accrual-Basis)",
        "Smart Customer Autocomplete Combobox dengan Auto-Fill Kontekstual",
        "Work Hours Guard & Multi-Level Role Access (RBAC 24/7 vs Shift)",
        "Security Hardening: requireAuth() Guard, CSP Headers, Regex Sanitization",
        "Automatic Enterprise Audit Trail (audit_logs)",
        "Recharts Multi-Series Interactive AreaChart & Rupiah Tooltip",
        "Next.js Tag-Based Cache Invalidation & PWA Integration"
      ],
      outcome: "⚡ Pembuatan Invoice 60-70% lebih cepat. 🎯 Keakuratan Laporan Keuangan 100% tanpa salah hitung piutang JTO. 🛡️ 100% Server Actions terproteksi & jam akses admin terisolasi. 📱 Progressive Web App (PWA) berjalan dengan 0 Build Error.",
      techStack: ["Next.js 16", "Supabase", "TypeScript", "Tailwind CSS", "Recharts", "PWA"]
    }
  },
  {
    id: "3-putri-mulya",
    title: "Integrated Car Rental & Financial Management Ecosystem — 3 Putri Mulya & FinancialFlow",
    category: "Multi-Client Web Ecosystem (Customer Portal + Admin ERP + REST API)",
    summary: "Ekosistem web multi-aplikasi terintegrasi: Portal Pemesanan Rental Mobil & Wisata Bintan (Customer SPA) + Dashboard ERP Manajemen Armada & Keuangan (FinancialFlow Backoffice) terhubung melalui Central RESTful API berbasis Laravel 12 & MySQL.",
    problem: "1) Pemesanan rental mobil & paket tour sebelumnya dilakukan secara manual via WhatsApp tanpa katalog live, memicu lambatnya konfirmasi dan hilangnya potensi turis asing. 2) Tidak ada pembukuan digital terpusat untuk memantau pendapatan sewa, biaya operasional armada (BBM, servis rutin, cuci mobil, gaji driver), serta laporan laba-rugi bisnis secara real-time. 3) Ketergantungan tinggi pada update manual file koding jika ada penambahan mobil, perubahan harga, atau status ketersediaan armada.",
    solution: "Merancang dan mengimplementasikan arsitektur Multi-Client Web Ecosystem decoupled: A) Customer Booking Portal (Vue 3 / Vite / Tailwind CSS) dengan live fleet catalog, dual-pricing switcher (Lepas Kunci vs Supir), konversi mata uang otomatis (IDR ⇄ SGD ⇄ MYR), dwibahasa (ID/EN), panduan 15+ destinasi Bintan, pemesanan instan via WhatsApp Deep-Link Engine, serta resilience/fallback cache jika server backend offline/cold-start. B) FinancialFlow Backoffice Admin Dashboard: Autentikasi token Laravel Sanctum (/api/auth/login), CRUD armada mobil (kursi, transmisi Matic/Manual, status Tersedia/Disewa/Bengkel, foto, tarif), manajemen paket tour, pembukuan cash flow operasional, dan visualisasi laporan laba-rugi interaktif (ApexCharts). C) Central RESTful API Engine (Laravel 12, PHP 8.2, MySQL) dengan dual-tier architecture: public rate-limited endpoints (/api/public/*) & secured authenticated endpoints (auth:sanctum) untuk sinkronisasi data real-time.",
    outcome: "🚀 Real-time data synchronization: perubahan armada/tarif di Admin langsung ter-update di Website Publik tanpa sentuh kodingan. 💰 Pembukuan keuangan armada 100% terotomasi dengan kalkulasi laba bersih, neraca kas, dan biaya servis per unit. 🌏 Jangkauan pasar turis internasional (Singapura & Malaysia) meningkat berkat multi-currency & bilingual localization. ⚡ Uptime tinggi & 0% blank screen berkat sistem offline resilience fallback.",
    keyFeatures: [
      "Multi-Client Architecture (Customer Portal, Admin ERP & Central API)",
      "Live Fleet Catalog & Dual-Pricing Switcher (Lepas Kunci vs Supir)",
      "Multi-Currency (IDR ⇄ SGD ⇄ MYR) & Bilingual Localization (ID ⇄ EN)",
      "WhatsApp Deep-Link Booking Engine & 15+ Bintan Tour Guide",
      "FinancialFlow ERP: Fleet CRUD, Status Tracking & Driver Salary Logs",
      "Interactive Profit & Loss Analytics & Cash Flow Reports (ApexCharts)",
      "Central REST API (Laravel 12, Sanctum Auth & Rate-Limited Public Routes)",
      "Resilience Fallback: Offline Cache Protection Anti Cold-Start"
    ],
    techStack: ["Vue 3", "Laravel 12", "TypeScript", "Tailwind CSS", "MySQL", "Sanctum", "ApexCharts", "Pinia", "Vite"],
    liveUrl: "https://www.3putrimulya.com/",
    mockupPath: "/assets/projects/3pm-hero.png",
    galleryImages: [
      { url: "/assets/projects/3pm-hero.png", label: "PORTAL PELANGGAN: HERO & BOOKING" },
      { url: "/assets/projects/3pm/dashboard.png", label: "FINANCIALFLOW: RINGKASAN & STATUS ARMADA" },
      { url: "/assets/projects/3pm/armada.png", label: "FINANCIALFLOW: MANAJEMEN ARMADA & TARIF" },
      { url: "/assets/projects/3pm/laba-rugi.png", label: "FINANCIALFLOW: LAPORAN LABA RUGI & BIAYA" }
    ],
    caseStudy: {
      challenge: "Bisnis rental mobil dan wisata CV 3 Putri Mulya di Pulau Bintan menghadapi tantangan operasional: 1) Ketiadaan platform pemesanan online membuat pelanggan (terutama turis Singapura & Malaysia) kesulitan membandingkan tipe mobil, harga sewa lepas kunci vs supir, dan kurs mata uang secara mandiri. 2) Pengelolaan operasional dan keuangan masih dicatat terpisah (atau di kertas/Excel), menyulitkan pemantauan biaya bensin, servis rutin, cuci mobil, gaji supir, dan laba-rugi per unit mobil. 3) Pembaruan armada atau tarif membutuhkan intervensi teknis pengembang tanpa adanya panel admin terintegrasi.",
      approach: "Membangun ekosistem headless multi-client dengan pemisahan tanggung jawab (Separation of Concerns): Website Publik dibuat ultra-ringan, SEO-friendly, dan berorientasi konversi tinggi dengan perlindungan fallback offline. Website Backoffice Admin (FinancialFlow) dirancang khusus untuk efisiensi operasional dan intelijen keuangan dengan token security Sanctum. Keduanya dihubungkan oleh Central REST API berbasis Laravel 12 & MySQL.",
      solution: "Ekosistem Perangkat Lunak 3-Tier Terpadu: 1) Website Publik: Single Page Application berbasis Vue 3 & Tailwind dengan etalase armada live, kalkulator dual pricing, konversi mata uang instan IDR/SGD/MYR, katalog 15+ destinasi Bintan, dan WhatsApp Deep-Link generator. Sistem resilience memastikan website tetap menyajikan data lokal jika backend cold-start. 2) Website Dashboard Admin (FinancialFlow): Terproteksi Laravel Sanctum untuk manajemen inventaris mobil (kursi, transmisi, tarif, status ketersediaan), paket wisata, pencatatan transaksi masuk/keluar harian, dan grafik analitik laba-rugi (ApexCharts). 3) Central REST API: Dibangun dengan Laravel 12 (PHP 8.2) & MySQL, memisahkan rute publik ter-throttle (/api/public/fleet) dan rute privat (auth:sanctum) sehingga setiap pembaruan admin otomatis tersinkronisasi ke website publik seketika.",
      keyFeatures: [
        "Separation of Concerns: Customer Booking Portal vs Internal Admin ERP",
        "Dual Pricing Engine (Lepas Kunci vs Supir) & Real-time Multi-Currency",
        "WhatsApp Deep-Link Engine untuk Konfirmasi Booking Instan",
        "FinancialFlow: Manajemen Armada, Kesiapan Unit & Transaksi Operasional",
        "Laporan Laba-Rugi Performa Tiap Mobil & ApexCharts Financial Analytics",
        "Central REST API (Laravel 12, MySQL, Throttle Rate Limiting & Sanctum RBAC)",
        "Resilience Architecture: Offline Fallback Cache Data Protection"
      ],
      outcome: "🚀 Sinkronisasi Real-Time: Admin bebas menambah mobil dan mengubah tarif tanpa perlu utak-atik kode program. 💰 Visibilitas Finansial: Arus kas dan laba bersih per unit armada terpantau jelas secara digital. 🌐 Peningkatan Konversi Turis: Wisatawan mancanegara dapat booking mudah dengan mata uang SGD/MYR dan dwibahasa. 🛡️ Keamanan & Kestabilan: Data privat aman di balik Sanctum dan website publik tetap aktif tanpa pernah down.",
      techStack: ["Vue 3", "Laravel 12", "TypeScript", "Tailwind CSS", "MySQL", "Sanctum", "ApexCharts", "Pinia", "Vite"]
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
