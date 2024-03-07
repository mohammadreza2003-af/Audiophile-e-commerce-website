import { navLinks, socialLinks } from "../data";
import Logo from "/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center lg:px-32 px-6 bg-dark">
        <div className="lg:max-w-[1220px] w-full md:py-16 py-14 relative">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-y-8 mb-14">
            <div className="flex  justify-center items-center">
              <a href="#">
                <img src={Logo} width={143} height={25} />
              </a>
            </div>
            <ul className="text-white flex lg:flex-row flex-col gap-x-8 justify-center items-center uppercase font-bold gap-y-4">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    className="transition-all ease-in-out duration-300 hover:underline hover:text-primary"
                    to={`/${link.path}`}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 justify-between items-center">
            <div className="w-full order-1">
              <p className="text-slate-400 mb-8 text-center lg:text-left text-[16px] font-[500]">
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
              </p>
            </div>
            <div className="w-full flex justify-center items-center lg:justify-end lg:order-2 order-3">
              <ul className="flex gap-6 items-center justify-center">
                {socialLinks.map((item) => (
                  <li key={item.id}>
                    <a href={item.href}>
                      <img src={item.src} alt={item.alt} width={24} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:order-3 order-2">
              <p className="text-slate-400 mb-8 text-center lg:text-left text-[16px] font-[500]">
                Copyright 2023. All Rights Reserved
              </p>
            </div>
          </div>
          <div className="absolute lg:left-0 top-0 left-[50%] lg:translate-x-[0] translate-x-[-50%] w-[143px] h-1 bg-primary" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
