import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { stats } from "../data/type";
import { formatCurrency } from "../utils/util";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("e-money");
  const navigate = useNavigate();
  const state: stats = useSelector((state: stats) => state);
  const cart = state.cart.cart;
  const total = cart.reduce(
    (total, pro) => (total += pro.price * pro.quantity),
    0
  );
  return (
    <div className="w-full bg-[#f4f4f4] relative">
      <div className="flex items-center justify-center lg:px-32 px-6">
        <div className="lg:max-w-[1220px] w-full py-16 bg-[#f4f4f4]">
          <button
            className="text-slate-500 font-[500] mb-16 hover:text-primary transition-all ease-in-out duration-300"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
          <div className="flex w-full gap-6 tracking-wide lg:flex-row flex-col">
            <div className="lg:w-[65%] w-full rounded-lg p-6 bg-white">
              <h2 className="text-3xl font-bold  uppercase">Checkout</h2>
              <div className="mt-12">
                <h2 className="text-[16px] uppercase font-semibold text-primary">
                  Billing details
                </h2>
                <div className="flex lg:flex-row flex-col lg:items-center items-start gap-4 mt-8">
                  <div className="flex flex-col gap-3 items-start justify-start">
                    <label htmlFor="name" className="font-semibold">
                      Name
                    </label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Alex Ward"
                      className="px-4 py-3 rounded-md border border-slate-400 font-semibold focus:border-primary"
                    />
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start">
                    <label htmlFor="email" className="font-semibold">
                      Email Address
                    </label>
                    <input
                      name="email"
                      id="email"
                      type="text"
                      placeholder="Alex@email.com"
                      className="px-4 py-3 rounded-md border border-slate-400 font-semibold focus:border-primary"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start mt-8">
                  <label htmlFor="phonenumber" className="font-semibold">
                    Phone Number
                  </label>
                  <input
                    name="phonenumber"
                    id="phonenumber"
                    type="text"
                    placeholder="+93 784283819"
                    className="px-4 py-3 rounded-md border border-slate-400 font-semibold focus:border-primary"
                  />
                </div>
                <div className="mt-12">
                  <h2 className="text-[16px] uppercase font-semibold text-primary mb-8">
                    Shipping info
                  </h2>
                  <div className="flex flex-col gap-3 items-start justify-start">
                    <label htmlFor="address" className="font-semibold">
                      Address
                    </label>
                    <input
                      name="address"
                      id="address"
                      type="text"
                      placeholder="Jebral Herat Afghanistan"
                      className="px-4 py-3 rounded-md border border-slate-400 font-semibold focus:border-primary w-full"
                    />
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:items-center items-start gap-4 mt-8">
                  <div className="flex flex-col gap-3 items-start justify-start">
                    <label htmlFor="zipcode" className="font-semibold">
                      Zip Code
                    </label>
                    <input
                      name="zipcode"
                      id="zipcode"
                      type="text"
                      placeholder="3002"
                      className="px-4 py-3 rounded-md border border-slate-400 font-semibold focus:border-primary"
                    />
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start">
                    <label htmlFor="city" className="font-semibold">
                      City
                    </label>
                    <input
                      name="city"
                      id="city"
                      type="text"
                      placeholder="Herat"
                      className="px-4 py-3 rounded-md border border-slate-400 font-semibold focus:border-primary"
                    />
                  </div>
                </div>
                <div className="mt-12">
                  <h2 className="text-[16px] uppercase font-semibold text-primary mb-8">
                    Payment Details
                  </h2>
                  <div className="flex lg:flex-row flex-col lg:justify-between items-start gap-y-4 lg:items-center">
                    <h2 className="text-[14px] uppercase font-bold">
                      Payment Method
                    </h2>
                    <div className="w-[50%] flex flex-col gap-4">
                      <label
                        htmlFor="e-money"
                        className="px-4 py-3 rounded-md border border-slate-400 font-semibold focus:border-primary"
                      >
                        <input
                          type="radio"
                          name="e-money"
                          value="e-money"
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          id="e-money"
                          checked={paymentMethod === "e-money"}
                        />{" "}
                        e-Money
                      </label>
                      <label
                        htmlFor="money"
                        className="px-4 py-3 rounded-md border border-slate-400 font-semibold focus:border-primary"
                      >
                        <input
                          type="radio"
                          name="money"
                          value="money"
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          id="money"
                          checked={paymentMethod === "money"}
                        />{" "}
                        Cash On Delivery
                      </label>
                    </div>
                  </div>
                  {paymentMethod === "e-money" && (
                    <div className="flex sm:flex-row flex-col sm:items-center items-start gap-4 ">
                      <div className="flex flex-col gap-3 items-start justify-start mt-8">
                        <label
                          htmlFor="e-money-number"
                          className="font-semibold"
                        >
                          e-Money Number
                        </label>
                        <input
                          name="e-money-number"
                          id="e-money-number"
                          type="text"
                          placeholder="528475837"
                          className="px-4 py-3 rounded-md border border-slate-400 font-semibold focus:border-primary"
                        />
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start mt-8">
                        <label htmlFor="e-money-pin" className="font-semibold">
                          e-Money Pin
                        </label>
                        <input
                          name="e-money-pin"
                          id="e-money-pin"
                          type="text"
                          placeholder="9514"
                          className="px-4 py-3 rounded-md border border-slate-400 font-semibold focus:border-primary"
                        />
                      </div>
                    </div>
                  )}
                  {paymentMethod === "money" && (
                    <div className="flex items-center gap-4 mt-8">
                      <Icon
                        icon="icon-park-outline:delivery"
                        className="text-primary"
                        width={96}
                      />
                      <p className="text-gray-500">
                        The ‘Cash on Delivery’ option enables you to pay in cash
                        when our delivery courier arrives at your residence.
                        Just make sure your address is correct so that your
                        order will not be cancelled.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="lg:w-[35%] w-full bg-white rounded-lg p-6 h-fit">
              <h2 className="text-2xl uppercase font-bold">Summary</h2>
              <ul className="flex flex-col gap-4 justify-center items-center mt-12">
                {cart.map((pro) => (
                  <li key={pro.id} className="flex flex-col w-full">
                    <div className="overflow-hidden w-full">
                      <div className="flex w-full gap-4">
                        <img
                          src={pro.image.desktop}
                          width={96}
                          height={96}
                          className="rounded-md"
                        />
                        <div className="flex justify-between w-full items-start">
                          <div>
                            <h2 className="font-bold text-lg mb-2">
                              {pro.name}
                            </h2>
                            <span className="font-semibold text-gray-500">
                              {formatCurrency(pro.price)}
                            </span>
                          </div>
                          <span className="font-bold text-gray-500">
                            X{pro.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-gray-400 font-semibold text-lg uppercase">
                    Total
                  </h2>
                  <span className="text-slate-950 hover:underline text-xl trans font-bold">
                    {formatCurrency(total)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <h2 className="text-gray-400 font-semibold text-lg uppercase">
                    Shipping
                  </h2>
                  <span className="text-slate-950 hover:underline trans text-xl font-bold">
                    $50
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <h2 className="text-gray-400 font-semibold text-lg uppercase">
                    Grand total
                  </h2>
                  <span className="text-primary hover:underline trans text-xl font-bold">
                    {formatCurrency(total + 50)}
                  </span>
                </div>
                <button
                  className={`${
                    cart.length !== 0 ? "bg-orange-400" : "bg-orange-300"
                  }  uppercase text-center mt-2 hover:bg-dark ring-primary hover:ring-1  ease-in-out duration-300 transition-all text-white font-bold px-6 py-3 text-medium`}
                >
                  Continue & Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
