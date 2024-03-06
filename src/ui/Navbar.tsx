import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { navLinks } from "../data/index";

import Logo from "/logo.svg";
const Navbar = () => {
  return (
    <div className="w-full font-Manrope">
      <div className="flex items-center justify-center lg:px-32 px-6 bg-dark">
        <div className="lg:max-w-[1220px] w-full py-8 border-b border-slate-400">
          <nav className="w-full flex justify-between items-center">
            <div className="flex gap-x-32">
              <div className="flex justify-center items-center">
                <Icon
                  icon="ci:hamburger-md"
                  color="#fff"
                  className="lg:hidden mr-14"
                  width={32}
                />
                <a href="#">
                  <img src={Logo} width={143} height={25} />
                </a>
              </div>
              <ul className="text-white lg:flex gap-x-8 hidden ">
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
