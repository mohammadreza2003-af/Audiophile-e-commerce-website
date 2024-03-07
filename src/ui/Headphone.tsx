import { Link } from "react-router-dom";
import { headphonesProducts } from "../data";
import ShareComponet from "./ShareComponet";

const checkEvenOrOdd = (number: number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const Headphone = () => {
  return (
    <div className="w-full bg-white relative">
      <div className="flex items-center justify-center">
        <div className="w-full">
          <div className="bg-dark w-full flex justify-center items-center mb-16 md:py-32 py-24 ">
            <div className="lg:max-w-[1220px] w-full text-center">
              <h2 className="text-white uppercase text-2xl lg:text-5xl font-bold">
                Headphones
              </h2>
            </div>
          </div>
          <div className="w-full bg-white md:py-16 py-14 flex justify-center items-center lg:px-32 px-6">
            <div className="lg:max-w-[1220px] w-full">
              <div className="flex flex-col justify-center items-center gap-y-32">
                {headphonesProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="flex lg:flex-row flex-col lg:justify-between w-full gap-16 lg:gap-[200px]"
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
                        <img src={product.image.mobile} className="lg:hidden" />
                      </div>
                    </div>
                    <div
                      className={`${
                        checkEvenOrOdd(index + 1) === false
                          ? "lg:order-2"
                          : "lg:order-1"
                      } w-full lg:flex lg:justify-center lg:items-center`}
                    >
                      <div className="flex flex-col justify-center items-center gap-y-8 lg:items-start text-center lg:text-left">
                        <h2 className="font-bold text-slate-950 md:text-5xl text-4xl tracking-wider">
                          {product.name}
                        </h2>
                        <p className="text-gray-500 lg:text-left text-center">
                          {product.description}
                        </p>
                        <Link
                          to={`/product/${product.slug}`}
                          className="bg-orange-400 hover:bg-dark ring-primary hover:ring-1  ease-in-out duration-300 transition-all text-white font-semibold px-6 py-3 text-medium"
                        >
                          SEE PRODUCT
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                <ShareComponet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headphone;
