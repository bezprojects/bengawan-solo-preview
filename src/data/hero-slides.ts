export type HeroSlide = {
  id: number;
  image: string;
  title: string;
  description: string;
  alt: string;
};

export type HeroSlide = {
  id: number;
  image: string;
  avifImage: string;
  webpImage: string;
  title: string;
  description: string;
  alt: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/ayam-penyet-dada-besar.webp", // Fallback
    avifImage: "/ayam-penyet-dada-besar.avif",
    webpImage: "/ayam-penyet-dada-besar.webp",
    title: "Ayam Penyet Dada Besar",
    description: "Dada ayam besar dipenyet dengan sambal terasi pedas khas Solo",
    alt: "Ayam Penyet Dada Besar dengan sambal terasi"
  },
  {
    id: 2,
    image: "/nasi-ayam-bakar-dada-besar.webp",
    avifImage: "/nasi-ayam-bakar-dada-besar.avif",
    webpImage: "/nasi-ayam-bakar-dada-besar.webp",
    title: "Nasi Ayam Bakar Dada Besar",
    description: "Potongan dada besar dibakar manis-gurih, bumbu meresap sempurna",
    alt: "Nasi Ayam Bakar Dada Besar dengan bumbu kecap"
  },
  {
    id: 3,
    image: "/nasi-ayam-bakar.webp",
    avifImage: "/nasi-ayam-bakar.avif",
    webpImage: "/nasi-ayam-bakar.webp",
    title: "Nasi Ayam Bakar",
    description: "Ayam bakar bumbu kecap manis, dibakar di atas bara api",
    alt: "Nasi Ayam Bakar klasik Solo"
  },
  {
    id: 4,
    image: "/nasi-ayam-kremes.webp",
    avifImage: "/nasi-ayam-kremes.avif",
    webpImage: "/nasi-ayam-kremes.webp",
    title: "Nasi Ayam Kremes",
    description: "Ayam goreng renyah dengan taburan kremes gurih khas Solo",
    alt: "Nasi Ayam Kremes dengan taburan kremes"
  },
  {
    id: 5,
    image: "/nasi-ayam-penyet.webp",
    avifImage: "/nasi-ayam-penyet.avif",
    webpImage: "/nasi-ayam-penyet.webp",
    title: "Nasi Ayam Penyet",
    description: "Ayam penyet klasik dengan sambal pedas dan nasi hangat pulen",
    alt: "Nasi Ayam Penyet dengan sambal terasi"
  }
];