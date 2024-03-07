import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { navLinks } from "../data/index";
import Logo from "/logo.svg";
import Products from "./Products";
const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  console.log(toggleNav);

  return (
    <div className="w-full font-Manrope">
      <div className="flex items-center justify-center lg:px-32 px-6 bg-dark">
        <div className="lg:max-w-[1220px] w-full py-8 border-b border-slate-400">
          <nav className="w-full flex justify-between items-center relative">
            <div
              className={`absolute top-[64px] ${
                toggleNav
                  ? "animation-top-to-bottom"
                  : "animation-bottom-to-top"
              } sm:hidden ${
                toggleNav ? "block" : "hidden"
              } w-full shadow-lg rounded-b-lg overflow-hidden z-20`}
            >
              <Products />
            </div>
            <div className="flex gap-x-32">
              <div className="flex justify-center items-center">
                <Icon
                  icon="ci:hamburger-md"
                  color="#fff"
                  className={`md:hidden ${
                    !toggleNav ? "block" : "hidden"
                  } mr-14 cursor-pointer`}
                  width={32}
                  onClick={() => setToggleNav((pre) => !pre)}
                />
                <Icon
                  icon="ic:round-close"
                  color="#fff"
                  className={`md:hidden ${
                    toggleNav ? "block" : "hidden"
                  } mr-14 cursor-pointer`}
                  width={32}
                  onClick={() => setToggleNav((pre) => !pre)}
                />
                <a href="#">
                  <img src={Logo} width={143} height={25} />
                </a>
              </div>
              <ul className="text-white md:flex gap-x-8 hidden ">
                {navLinks.map((link) => (
                  <li key={link.text}>
                    <Link className="font-[500]" to={`/${link.path}`}>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <button>
              <Icon
                icon="heroicons-outline:shopping-cart"
                width={32}
                color="#fff"
              />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
