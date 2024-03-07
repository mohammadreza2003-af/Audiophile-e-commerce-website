import { TypeProducts, navLinks, socialLinks } from "./type";

const navLinks: navLinks[] = [
  {
    text: "Home",
    path: "/",
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
    name: "Headphones",
    to: "/headphones",
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

export { navLinks, products, socialLinks };
