import { Link, useNavigate, useParams } from "react-router-dom";
import { checkEvenOrOdd, formatNumberWithCommas } from "../utils/util";
import data from "../../public/data.json";
import { useEffect, useState } from "react";
import { FullInfoProduct } from "../data/type";
import { Icon } from "@iconify/react/dist/iconify.js";
import ShareComponet from "./ShareComponet";

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [productData, setProductData] = useState<FullInfoProduct[]>([]);

  useEffect(() => {
    const tempData: FullInfoProduct[] = data.filter(
      (pro) => pro.slug === productId
    );
    setProductData(tempData);
  }, [productId]);

  return (
    <div className="w-full bg-white relative">
      <div className="flex items-center justify-center lg:px-32 px-6">
        <div className="lg:max-w-[1220px] w-full py-16 bg-white">
          <button
            className="text-slate-500 font-[500] mb-16 hover:text-primary transition-all ease-in-out duration-300"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
          {productData.map((product, index) => (
            <>
              <div
                key={product.id}
                className="flex lg:flex-row flex-col lg:justify-between gap-16 lg:gap-[200px] lg:w-full md:w-[700px] w-[100%] mx-auto lg:mb-24 mb-14"
              >
                <div
                  className={`${
                    checkEvenOrOdd(index + 1) === false
                      ? "lg:order-1"
                      : "lg:order-2"
                  } w-full`}
                >
                  <div className="flex justify-center items-center rounded-lg overflow-hidden lg:order-2 ease-in-out transition-all duration-300 hover:scale-[110%]">
                    <img
                      src={product.image.desktop}
                      className="lg:block hidden w-[512px]"
                    />
                    <img
                      src={product.image.mobile}
                      className="lg:hidden w-[300px]"
                    />
                  </div>
                </div>
                <div
                  className={`${
                    checkEvenOrOdd(index + 1) === false
                      ? "lg:order-2"
                      : "lg:order-1"
                  } w-full lg:flex lg:justify-center lg:items-center`}
                >
                  <div className="flex flex-col justify-center items-start gap-y-4 text-left">
                    {product.new && (
                      <h2 className="font-[300] text-primary uppercase">
                        new product
                      </h2>
                    )}
                    <h2 className="font-bold text-slate-950 md:text-5xl text-4xl tracking-wider">
                      {product.name}
                    </h2>
                    <p className="text-gray-500 lg:text-left">
                      {product.description}
                    </p>
                    <span className="font-semibold text-[20px]">
                      ${formatNumberWithCommas(product.price)}
                    </span>
                    <div className="flex gap-x-8 justify-center items-center">
                      <div className="flex bg-slate-100 justify-between items-center gap-8 px-4 py-3">
                        <button>
                          <Icon
                            icon="ic:outline-minus"
                            width={18}
                            className="text-primary"
                          />
                        </button>
                        <p>1</p>
                        <button>
                          <Icon
                            icon="ic:outline-plus"
                            width={18}
                            className="text-primary"
                          />
                        </button>
                      </div>
                      <button className="bg-orange-400 uppercase hover:bg-dark ring-primary hover:ring-1  ease-in-out duration-300 transition-all text-white font-semibold px-6 py-3 text-medium">
                        Add To Card
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between w-full items-start gap-16 py-16">
                <div className="flex flex-col justify-center items-start gap-8 flex-1">
                  <h2 className="font-bold text-slate-950 md:text-4xl text-3xl uppercase tracking-wider">
                    Features
                  </h2>
                  <p className="text-gray-500 lg:text-left">
                    {product.features}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-start gap-8">
                  <h2 className="font-bold text-slate-950 md:text-4xl text-3xl uppercase tracking-wider">
                    In the box
                  </h2>
                  <ul className="flex flex-col gap-y-2">
                    {product.includes.map((item) => (
                      <li className="flex items-center gap-3 justify-start">
                        <span className="font-[600] text-lg text-primary ">
                          {item.quantity}x
                        </span>
                        <p className="font-[500] text-slate-600">{item.item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex flex-col md:flex-row md:justify-between gap-4 items-start w-full ">
                  <div className="flex flex-col md:h-full md:justify-between gap-4 items-start">
                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={product.gallery.first.mobile}
                        className="md:hidden"
                      />
                      <img
                        src={product.gallery.first.tablet}
                        className="lg:hidden md:block hidden"
                      />
                      <img
                        src={product.gallery.first.desktop}
                        className="lg:block hidden"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={product.gallery.second.mobile}
                        className="md:hidden"
                      />
                      <img
                        src={product.gallery.second.tablet}
                        className="lg:hidden md:block hidden"
                      />
                      <img
                        src={product.gallery.second.desktop}
                        className="lg:block hidden"
                      />
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={product.gallery.third.mobile}
                      className="md:hidden"
                    />
                    <img
                      src={product.gallery.third.tablet}
                      className="lg:hidden md:block hidden"
                    />
                    <img
                      src={product.gallery.third.desktop}
                      className="lg:block hidden"
                    />
                  </div>
                </div>
              </div>
              <div className="py-16">
                <h2 className="text-center font-[700] text-2xl text-slate-950 uppercase mb-8">
                  You may also like
                </h2>
                <ul className="flex w-full flex-col justify-between gap-6 lg:flex-row">
                  {product.others.map((item) => (
                    <li
                      key={item.slug}
                      className="mb-16 relative rounded-lg w-full"
                    >
                      <div className="flex flex-col justify-center items-center gap-y-4 w-full">
                        <div className="overflow-hidden rounded-lg ease-in-out transition-all duration-300 hover:scale-[105%]">
                          <img src={item.image.mobile} className="md:hidden" />
                          <img
                            src={item.image.tablet}
                            className="lg:hidden md:block hidden"
                            width={400}
                          />
                          <img
                            src={item.image.desktop}
                            className="lg:block hidden"
                          />
                        </div>
                        <h2 className="font-bold uppercase text-[18px] -tracking-[0.01rem]">
                          {item.name}
                        </h2>
                        <Link
                          onClick={() => window.scroll(0, 0)}
                          to={`/product/${item.slug}`}
                          className="bg-orange-400 uppercase hover:bg-dark ring-primary hover:ring-1  ease-in-out duration-300 transition-all text-white font-semibold px-6 py-3 text-medium"
                        >
                          See Product
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ))}
          <ShareComponet />
        </div>
      </div>
    </div>
  );
};

export default Product;
