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

export type FullInfoProduct = {
  id: number;
  description: string;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  new: boolean;
  price: number;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
};
export type cartProduct = {
  id: number;
  slug: string;
  name: string;
  quantity: number;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  new: boolean;
  price: number;
};

export type initState = {
  cart: cartProduct[];
};
export type stats = {
  cart: {
    cart: cartProduct[];
  };
};
