export type MenuItem = {
  name: string;
  description: string;
  price: number;
  bestSeller?: boolean;
  image?: string;
};

// Format harga ke Rupiah
export const formatRupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(n);

// 5 menu makanan (preview)
export const foods: MenuItem[] = [
  {
    name: "Nasi Ayam Penyet Dada Besar",
    description: "Dada ayam besar dipenyet, sambal terasi pedas, lalapan segar.",
    price: 25000,
    bestSeller: true,
  },
  {
    name: "Nasi Ayam Kremes",
    description: "Ayam goreng renyah dengan taburan kremes gurih khas Solo.",
    price: 22000,
  },
  {
    name: "Nasi Ayam Bakar",
    description: "Ayam bakar bumbu kecap manis, dibakar di atas bara.",
    price: 22000,
  },
  {
    name: "Nasi Ayam Bakar Dada Besar",
    description: "Potongan dada besar dibakar manis-gurih, bumbu meresap.",
    price: 27000,
    bestSeller: true,
  },
  {
    name: "Nasi Ayam Penyet",
    description: "Ayam penyet klasik, sambal pedas, nasi hangat pulen.",
    price: 20000,
  },
];

// 5 menu minuman (preview)
export const drinks: MenuItem[] = [
  {
    name: "Susu",
    description: "Susu segar hangat atau dingin, manis pas.",
    price: 8000,
  },
  {
    name: "Es / Teh Jeruk",
    description: "Perasan jeruk peras segar, bisa panas atau dingin.",
    price: 7000,
  },
  {
    name: "Es / Teh Kampul",
    description: "Teh dengan irisan jeruk nipis, segar khas Solo.",
    price: 6000,
    bestSeller: true,
  },
  {
    name: "Es / Teh Tawar-Manis",
    description: "Teh klasik, sajian panas atau dingin.",
    price: 5000,
  },
  {
    name: "Susu Sirup",
    description: "Perpaduan susu lembut dengan sirup manis pilihan.",
    price: 9000,
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
