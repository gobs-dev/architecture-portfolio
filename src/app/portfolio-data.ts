interface PortfolioItem {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  location: string;
  description: string;
}

export type ProjectCategory =
  | "residensial"
  | "komersial"
  | "publik"
  | "lanskap"
  | "industri"
  | "religius";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Modern Family Home",
    category: "residensial",
    image: "https://placehold.co/400x300.webp?text=Modern",
    location: "Vancouver, Canada",
    description: "Contemporary family residence with sustainable features",
  },
  {
    id: "2",
    title: "Urban Office Complex",
    category: "komersial",
    image: "https://placehold.co/400x300.webp?text=Urban",
    location: "Toronto, Canada",
    description: "State-of-the-art office space in downtown core",
  },
  {
    id: "3",
    title: "Minimalist Apartment",
    category: "lanskap",
    image: "https://placehold.co/400x300.webp?text=Minimalist",
    location: "Montreal, Canada",
    description: "Modern interior design with clean lines and natural light",
  },
];

export const categories: readonly ProjectCategory[] = [
  "residensial",
  "komersial",
  "publik",
  "lanskap",
  "industri",
  "religius",
] as const;

// 1. Arsitektur Residensial
// Rumah Tinggal: Desain rumah minimalis, modern, tradisional, atau klasik.
// Apartemen atau Kondominium: Unit hunian vertikal dengan fokus pada efisiensi ruang.
// Villa: Desain rumah liburan dengan suasana mewah atau natural.
// 2. Arsitektur Komersial
// Ruko (Rumah Toko): Bangunan multifungsi untuk bisnis dan hunian.
// Perkantoran: Desain gedung atau kantor coworking space.
// Pusat Perbelanjaan: Mall, plaza, atau retail store.
// Restoran dan Kafe: Desain interior dan eksterior untuk tempat makan.
// 3. Arsitektur Publik
// Fasilitas Pendidikan: Sekolah, universitas, atau pusat pelatihan.
// Fasilitas Kesehatan: Rumah sakit, klinik, atau puskesmas.
// Perpustakaan atau Museum: Bangunan untuk pendidikan dan budaya.
// Transportasi: Stasiun, terminal, atau bandara.
// 4. Arsitektur Lanskap
// Taman Kota: Desain ruang terbuka hijau di perkotaan.
// Kebun atau Landscape Rumah: Area hijau untuk rumah atau villa.
// Fasilitas Outdoor: Tempat olahraga, area piknik, atau taman bermain.
// 5. Arsitektur Industri
// Pabrik: Desain fasilitas produksi.
// Gudang: Bangunan untuk penyimpanan skala besar.
// Fasilitas Energi: Bangunan untuk pembangkit listrik atau infrastruktur energi.
// 6. Arsitektur Religius
// Masjid: Tempat ibadah umat Islam.
// Gereja: Tempat ibadah umat Kristiani.
// Pura, Wihara, atau Klenteng: Tempat ibadah sesuai budaya lokal.
// 7. Arsitektur Bersejarah atau Konservasi
// Restorasi Bangunan Tua: Melestarikan nilai historis bangunan lama.
// Renovasi Tradisional: Bangunan adat seperti joglo atau rumah panggung.
// 8. Arsitektur Ramah Lingkungan (Green Architecture)
// Bangunan Hemat Energi: Desain berkelanjutan dengan penggunaan energi efisien.
// Bangunan Berbahan Daur Ulang: Menggunakan material ramah lingkungan.
// 9. Arsitektur Khusus
// Interior Desain: Fokus pada estetika dan fungsi ruang dalam.
// Furniture Custom: Desain mebel sesuai kebutuhan proyek.
// Arsitektur Eksperimental: Bangunan dengan konsep futuristik atau unik.
