module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBackDesk: "url('/assets/home/desktop/image-hero.jpg')",
        heroBackMob: "url('/assets/home/mobile/image-header.jpg')",
        heroBackTab: "url('/assets/home/tablet/image-header.jpg')",
      },
      colors: {
        dark: "#191919",
        primary: "#d87d4a",
      },
      fontFamily: {
        Manrope: "Manrope",
      },
    },
  },
  plugins: [],
};
