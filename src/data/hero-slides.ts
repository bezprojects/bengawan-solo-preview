export type HeroSlide = {
  id: number;
  image: string;
  title: string;
  description: string;
  alt: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/menu/nasi-ayam-penyet-dada-besar.jpeg",
    title: "Ayam Penyet Dada Besar",
    description: "Dada ayam besar dipenyet dengan sambal terasi pedas khas Solo",
    alt: "Ayam Penyet Dada Besar dengan sambal terasi"
  },
  {
    id: 2,
    image: "/menu/nasi-ayam-bakar-dada-besar.jpeg",
    title: "Nasi Ayam Bakar Dada Besar",
    description: "Potongan dada besar dibakar manis-gurih, bumbu meresap sempurna",
    alt: "Nasi Ayam Bakar Dada Besar dengan bumbu kecap"
  },
  {
    id: 3,
    image: "/menu/nasi-ayam-bakar-paha.jpeg",
    title: "Nasi Ayam Bakar",
    description: "Ayam bakar bumbu kecap manis, dibakar di atas bara api",
    alt: "Nasi Ayam Bakar klasik Solo"
  },
  {
    id: 4,
    image: "/menu/nasi-ayam-kremes.jpeg",
    title: "Nasi Ayam Kremes",
    description: "Ayam goreng renyah dengan taburan kremes gurih khas Solo",
    alt: "Nasi Ayam Kremes dengan taburan kremes"
  },
  {
    id: 5,
    image: "/menu/nasi-ayam-penyet.jpeg",
    title: "Nasi Ayam Penyet",
    description: "Ayam penyet klasik dengan sambal pedas dan nasi hangat pulen",
    alt: "Nasi Ayam Penyet dengan sambal terasi"
  }
];
