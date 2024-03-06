import { TypeProducts, navLinks } from "./type";

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

export { navLinks, products };
