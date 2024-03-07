export type navLinks = {
  text: string;
  path: string;
};

export type TypeProducts = {
  id: number;
  name: string;
  to: string;
  src: string;
};

export type socialLinks = {
  id: number;
  src: string;
  alt: string;
  href: string;
};

export type ProductItem = {
  id: number;
  description: string;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};
