import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { navLinks } from "../data/index";
import Logo from "/logo.svg";
import Products from "./Products";
const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <div className="w-full font-Manrope">
      <div className="flex items-center justify-center lg:px-32 px-6 bg-dark">
        <div className="lg:max-w-[1220px] w-full py-8 border-b border-slate-400">
          <nav className="w-full flex justify-between items-center relative">
            <div
              className={`absolute top-[64px] ${
                toggleNav ? "animation-top-to-bottom" : "translate-y-[100%]"
              } sm:hidden ${
                toggleNav ? "block" : "hidden"
              } w-full shadow-lg rounded-b-lg overflow-hidden z-20`}
            >
              <Products share={false} />
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
                <Link to="/" onClick={() => window.scroll(0, 0)}>
                  <img src={Logo} width={143} height={25} />
                </Link>
              </div>
              <ul className="text-white md:flex gap-x-8 hidden uppercase font-bold">
                {navLinks.map((link) => (
                  <li key={link.text}>
                    <Link
                      onClick={() => window.scroll(0, 0)}
                      className="transition-all ease-in-out duration-300 hover:underline hover:text-primary "
                      to={`/${link.path}`}
                    >
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
