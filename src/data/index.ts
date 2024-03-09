import { ProductItem, TypeProducts, navLinks, socialLinks } from "./type";
import data from "../../public/data.json";

const headphonesProductsFilter = data.filter(
  (item) => item.category === "headphones"
);

const headphonesProducts: ProductItem[] = headphonesProductsFilter.map(
  (item) => {
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      slug: item.slug,
      image: item.image,
    };
  }
);
const speakersProductsFilter = data.filter(
  (item) => item.category === "speakers"
);

const speakersProducts: ProductItem[] = speakersProductsFilter.map((item) => {
  return {
    id: item.id,
    name: item.name,
    description: item.description,
    slug: item.slug,
    image: item.image,
  };
});
const earphonesProductsFilter = data.filter(
  (item) => item.category === "earphones"
);

const earphonesProducts: ProductItem[] = earphonesProductsFilter.map((item) => {
  return {
    id: item.id,
    name: item.name,
    description: item.description,
    slug: item.slug,
    image: item.image,
  };
});

const navLinks: navLinks[] = [
  {
    text: "Home",
    path: "",
  },
  {
    text: "Headphones",
    path: "headphones",
  },
  {
    text: "Speakers",
    path: "speakers",
  },
  {
    text: "Earphones",
    path: "earphones",
  },
];

const products: TypeProducts[] = [
  {
    id: 1,
    name: "Headphones",
    to: "/headphones",
    src: "/assets/shared/desktop/image-headphones.png",
  },
  {
    id: 2,
    name: "Speakers",
    to: "/speakers",
    src: "/assets/shared/desktop/image-speakers.png",
  },

  {
    id: 3,
    name: "Earphones",
    to: "/earphones",
    src: "/assets/shared/desktop/image-earphones.png",
  },
];

const socialLinks: socialLinks[] = [
  {
    id: 1,
    src: "/assets/shared/desktop/icon-facebook.svg",
    alt: "facebook",
    href: "#",
  },
  {
    id: 2,
    src: "/assets/shared/desktop/icon-instagram.svg",
    alt: "instagram",
    href: "#",
  },
  {
    id: 3,
    src: "/assets/shared/desktop/icon-twitter.svg",
    alt: "twitter",
    href: "#",
  },
];

export {
  navLinks,
  products,
  socialLinks,
  headphonesProducts,
  speakersProducts,
  earphonesProducts,
};
