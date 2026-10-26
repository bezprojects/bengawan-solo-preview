// Daftar tempat makan (tenant) yang tergabung di Bengawan Solo Food Hub.
// Ditampilkan sebagai banner autoslide di Hero.
//
// CATATAN: logo & foto menu andalan BELUM dikirim klien. Isi `logo` dan `image`
// saat ini masih placeholder (undefined → tampil inisial & gradien).
// Saat file sudah ada, taruh di public/tenants/ lalu isi path-nya, contoh:
//   logo: "/tenants/putri-bengawan-logo.png",
//   image: "/tenants/putri-bengawan-ayam-tulang-lunak.jpeg",

export type Tenant = {
  id: string;
  name: string;
  signature: string; // menu andalan
  description: string;
  price: number; // harga asli (dummy sementara)
  originalPrice?: number; // harga coret (dummy sementara)
  logo?: string;
  image?: string;
  initials: string; // fallback saat logo belum ada
};

export const tenants: Tenant[] = [
  {
    id: "putri-bengawan",
    name: "Ayam Tulang Lunak Putri Bengawan",
    signature: "Ayam Tulang Lunak",
    description: "Ayam presto empuk sampai ke tulang, bumbu rempah khas Solo meresap sempurna.",
    price: 30000,
    originalPrice: 36000,
    initials: "PB",
  },
  {
    id: "raja-pedas",
    name: "Ayam Penyet Raja Pedas",
    signature: "Ayam Penyet Sambal Bawang",
    description: "Ayam goreng garing dengan ulekan sambal bawang pedas nampol.",
    price: 22000,
    originalPrice: 27000,
    initials: "RP",
  },
  {
    id: "pedas-dower",
    name: "Ayam Geprek Pedas Dower",
    signature: "Ayam Geprek Rawit",
    description: "Geprek renyah dengan cabai rawit melimpah, pedasnya bikin nagih.",
    price: 18000,
    originalPrice: 22000,
    initials: "PD",
  },
  {
    id: "seafood-jawara",
    name: "Nasi Goreng Seafood Jawara",
    signature: "Nasi Goreng Seafood",
    description: "Nasi goreng bumbu rempah premium dengan topping seafood melimpah.",
    price: 25000,
    originalPrice: 30000,
    initials: "SJ",
  },
  {
    id: "martabak-jawara",
    name: "Martabak Manis Jawara",
    signature: "Martabak Manis Spesial",
    description: "Martabak manis tebal legendaris dengan aneka topping lezat.",
    price: 35000,
    originalPrice: 42000,
    initials: "MJ",
  },
];
