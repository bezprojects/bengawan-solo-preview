export type MenuItem = {
  name: string;
  description: string;
  price: number;
  bestSeller?: boolean;
  image?: string;
  category?: string;
};

// Format harga ke Rupiah
export const formatRupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(n);

// Menu makanan
export const foods: MenuItem[] = [
  {
    name: "Nasi Ayam Penyet Dada Besar",
    description: "Dada ayam besar dipenyet, sambal terasi pedas, lalapan segar.",
    price: 30000,
    bestSeller: true,
    image: "/menu/nasi-ayam-penyet-dada-besar.jpeg",
    category: "Ayam Penyet",
  },
  {
    name: "Nasi Ayam Kremes",
    description: "Ayam goreng renyah dengan taburan kremes gurih khas Solo.",
    price: 22000,
    image: "/menu/nasi-ayam-kremes.jpeg",
    category: "Ayam Goreng",
  },
  {
    name: "Nasi Ayam Bakar",
    description: "Ayam bakar bumbu kecap manis, dibakar di atas bara.",
    price: 30000,
    image: "/menu/nasi-ayam-bakar-paha.jpeg",
    category: "Ayam Bakar",
  },
  {
    name: "Nasi Ayam Bakar Dada Besar",
    description: "Potongan dada besar dibakar manis-gurih, bumbu meresap.",
    price: 30000,
    bestSeller: true,
    image: "/menu/nasi-ayam-bakar-dada-besar.jpeg",
    category: "Ayam Bakar",
  },
  {
    name: "Nasi Ayam Penyet",
    description: "Ayam penyet klasik, sambal pedas, nasi hangat pulen.",
    price: 17000,
    image: "/menu/nasi-ayam-penyet.jpeg",
    category: "Ayam Penyet",
  },
  {
    name: "Nasi Dada Bakar Besar",
    description: "Dada ayam besar dibakar dengan bumbu kecap manis meresap.",
    price: 30000,
    image: "/menu/nasi-dada-bakar-besar.jpeg",
    category: "Ayam Bakar",
  },
  {
    name: "Nasi Dada Goreng Kremes Besar",
    description: "Dada ayam besar goreng renyah, taburan kremes gurih.",
    price: 30000,
    image: "/menu/nasi-dada-goreng-kremes-besar.jpeg",
    category: "Ayam Goreng",
  },
  {
    name: "Nasi Paha Goreng Besar Kremes",
    description: "Paha ayam besar goreng dengan kremes renyah khas Solo.",
    price: 30000,
    image: "/menu/nasi-paha-goreng-besar-kremes.jpeg",
    category: "Ayam Goreng",
  },
  {
    name: "Nasi Sayap Kremes",
    description: "Sayap ayam goreng kremes, renyah di luar lembut di dalam.",
    price: 20000,
    image: "/menu/nasi-sayap-kremes.jpeg",
    category: "Ayam Goreng",
  },
  {
    name: "Ayam Bakar Paha",
    description: "Paha ayam bakar bumbu kecap, tanpa nasi.",
    price: 25000,
    image: "/menu/ayam-bakar-paha.jpeg",
    category: "Ayam Bakar",
  },
  {
    name: "Ayam Paha Kremes",
    description: "Paha ayam goreng kremes, tanpa nasi.",
    price: 16000,
    image: "/menu/ayam-paha-kremes.jpeg",
    category: "Ayam Goreng",
  },
  {
    name: "Dada Bakar Besar",
    description: "Dada ayam besar dibakar, tanpa nasi.",
    price: 25000,
    image: "/menu/dada-bakar-besar.jpeg",
    category: "Ayam Bakar",
  },
  {
    name: "Nasi Goreng Original",
    description: "Nasi goreng klasik dengan bumbu rempah khas Solo.",
    price: 15000,
    image: "/menu/nasi-goreng-original.jpeg",
    category: "Nasi Goreng",
  },
  {
    name: "Nasi Goreng Telur",
    description: "Nasi goreng dengan telur ceplok atau orak-arik.",
    price: 17000,
    image: "/menu/nasi-goreng-telur.jpeg",
    category: "Nasi Goreng",
  },
  {
    name: "Nasi Goreng Ayam Suwir",
    description: "Nasi goreng dengan topping ayam suwir bumbu gurih.",
    price: 17000,
    bestSeller: true,
    image: "/menu/nasi-goreng-ayam-suwir.jpeg",
    category: "Nasi Goreng",
  },
  {
    name: "Nasi Goreng Bakso",
    description: "Nasi goreng dengan irisan bakso sapi kenyal.",
    price: 19000,
    image: "/menu/nasi-goreng-bakso-1.jpeg",
    category: "Nasi Goreng",
  },
  {
    name: "Nasi Goreng Sosis",
    description: "Nasi goreng dengan sosis sapi pilihan.",
    price: 19000,
    image: "/menu/nasi-goreng-sosis-1.jpeg",
    category: "Nasi Goreng",
  },
  {
    name: "Nasi Goreng Bungkus Telur",
    description: "Nasi goreng dibungkus telur dadar tipis, sajian istimewa.",
    price: 23000,
    bestSeller: true,
    image: "/menu/nasi-goreng-bungkus-telur.jpeg",
    category: "Nasi Goreng",
  },
  {
    name: "Traktir Driver (Nasi Goreng + Es Teh)",
    description: "Paket hemat nasi goreng original dan es teh manis, cocok untuk driver ojol.",
    price: 15000,
    image: "/menu/traktir-driver-nasi-goreng-+-es-teh.jpeg",
    category: "Paket",
    bestSeller: true,
  },
];

// Menu minuman
export const drinks: MenuItem[] = [
  {
    name: "Susu Coklat / Putih",
    description: "Susu coklat atau putih, hangat atau dingin.",
    price: 8000,
    image: "/menu/susu-coklat-putih.jpeg",
    category: "Susu",
  },
  {
    name: "Es / Teh Jeruk",
    description: "Perasan jeruk peras segar, bisa panas atau dingin.",
    price: 5000,
    image: "/menu/es-jeruk.jpeg",
    category: "Teh",
  },
  {
    name: "Es / Teh Kampul",
    description: "Teh dengan irisan jeruk nipis, segar khas Solo.",
    price: 5500,
    bestSeller: true,
    image: "/menu/es-kampul.jpeg",
    category: "Teh",
  },
  {
    name: "Es / Teh Tawar-Manis",
    description: "Teh klasik, sajian panas atau dingin.",
    price: 5000,
    image: "/menu/es-teh.jpeg",
    category: "Teh",
  },
];

export const testimonials = [
  {
    name: "Rina P.",
    text: "Ayam bakarnya juara, bumbu meresap sampai dalam. Buka 24 jam pula, pas banget buat lapar tengah malam!",
    rating: 5,
  },
  {
    name: "Andi S.",
    text: "Sambal penyetnya nampol. Porsinya pas dan harganya ramah kantong. Langganan terus.",
    rating: 5,
  },
  {
    name: "Maya L.",
    text: "Es teh kampulnya bikin nagih, segar banget pas siang. Tempatnya nyaman, pelayanannya ramah.",
    rating: 5,
  },
];

export const WHATSAPP_NUMBER = "628877831354"; // format internasional tanpa +
export const WHATSAPP_DISPLAY = "0887-783-1354";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Bengawan%20Solo%20Food%20Hub%2C%20saya%20ingin%20pesan`;

export const SOCIAL_LINKS = {
  instagram: "#",
  shopeefood: "#",
  gofood: "#",
  grabfood: "#",
};
