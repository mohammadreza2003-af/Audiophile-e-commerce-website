import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { navLinks } from "../data/index";
import Logo from "/logo.svg";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { cartProduct, stats } from "../data/type";
import {
  DecQuantity,
  DeleteItem,
  IncQuantity,
  RemoveAll,
} from "../contexts/redux";
import { formatCurrency } from "../utils/util";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const [toggleShop, setToggleShop] = useState<boolean>(false);
  const dispatch = useDispatch();
  const state: stats = useSelector((state: stats) => state);
  const cart = state.cart.cart;
  const navigate = useNavigate();

  const total = cart.reduce(
    (total, pro) => (total += pro.price * pro.quantity),
    0
  );
  const setAmountProduct = (type: string, pro: cartProduct) => {
    if (type === "increase") {
      dispatch(IncQuantity(pro));
    }
    if (type === "decrease" && pro.quantity > 1) {
      dispatch(DecQuantity(pro));
    }
  };
  return (
    <div className="w-full font-Manrope">
      <div className="flex items-center justify-center lg:px-32 px-6 bg-dark">
        <div className="lg:max-w-[1220px] w-full py-8 border-b border-slate-400 relative">
          <div
            className={`${
              toggleShop ? "animation-top-to-bottom" : "animation-bottom-to-top"
            }  absolute w-[350px] top-24 sm:right-0 right-7 py-6 px-5 bg-white z-10 shadow-md rounded-b-lg`}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-slate-950 font-semibold text-2xl">
                Cart ({cart.length})
              </h2>
              <button
                className="text-gray-500 hover:underline trans font-semibold"
                onClick={() => dispatch(RemoveAll())}
              >
                Remove All
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-y-6 w-full">
              {cart.length === 0 && (
                <p className="mt-2 text-slate-500">You have not product</p>
              )}
              <ul className="flex flex-col justify-center gap-y-6 w-full">
                {cart.map((pro) => (
                  <li
                    key={pro.id}
                    className="flex justify-between w-full items-end"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={pro.image.desktop}
                        width={96}
                        height={96}
                        className="rounded-md"
                      />
                    </div>
                    <div>
                      <div className="w-full mb-4">
                        <button
                          className="flex justify-end w-full"
                          onClick={() => dispatch(DeleteItem(pro.id))}
                        >
                          <Icon
                            className="text-primary hover:text-dark trans"
                            width={36}
                            icon="material-symbols:delete-outline"
                          />
                        </button>
                      </div>
                      <div className="flex bg-slate-100 justify-between items-center gap-8 px-4 py-3">
                        <button
                          onClick={() => setAmountProduct("decrease", pro)}
                        >
                          <Icon
                            icon="ic:outline-minus"
                            width={18}
                            className="text-primary"
                          />
                        </button>
                        <p>{pro.quantity}</p>
                        <button
                          onClick={() => setAmountProduct("increase", pro)}
                        >
                          <Icon
                            icon="ic:outline-plus"
                            width={18}
                            className="text-primary"
                          />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-slate-950 font-semibold text-xl uppercase">
                    Total
                  </h2>
                  <span className="text-gray-500 hover:underline trans font-semibold">
                    {formatCurrency(total)}
                  </span>
                </div>
                <button
                  disabled={cart.length === 0}
                  onClick={() => {
                    setToggleShop((pre) => !pre);
                    navigate("/checkout");
                    window.scroll(0, 0);
                  }}
                  className={`${
                    cart.length !== 0 ? "bg-orange-400" : "bg-orange-300"
                  }  uppercase text-center hover:bg-dark ring-primary hover:ring-1  ease-in-out duration-300 transition-all text-white font-semibold px-6 py-3 text-medium`}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
          <nav className="w-full flex justify-between items-center relative">
            <div
              className={`absolute top-[64px] ${
                toggleNav ? "animation-top-to-bottom" : "translate-y-[100%]"
              } md:hidden ${
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

            <button
              onClick={() => setToggleShop((pre) => !pre)}
              className="relative"
            >
              {cart.length !== 0 && (
                <div className="w-5 h-5 bg-primary -top-2 -right-1 text-white rounded-full flex justify-center items-center absolute">
                  {cart.length}
                </div>
              )}
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
