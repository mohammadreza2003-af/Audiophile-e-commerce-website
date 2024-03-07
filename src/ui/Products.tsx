import { Link } from "react-router-dom";
import { products } from "../data/index";
import { Icon } from "@iconify/react/dist/iconify.js";

const Products = ({ share }: { share: boolean }) => {
  return (
    <div className="w-full bg-white relative">
      <div
        className={`flex items-center justify-center ${
          share ? "" : "lg:px-32 px-6"
        }`}
      >
        <div
          className={`lg:max-w-[1220px] w-full ${
            share ? "py-16" : "md:py-48 py-24"
          } bg-white`}
        >
          <ul className="flex flex-col w-full md:flex-row md:gap-x-8">
            {products.map((pro) => (
              <li
                key={pro.id}
                className="bg-[#f4f4f4] mb-16 relative h-[200px] rounded-lg w-full"
              >
                <div className="flex flex-col justify-center items-center gap-y-2 w-full absolute -top-14 left-[50%] translate-x-[-50%]">
                  <img src={pro.src} alt={pro.name} className="w-[180px]" />
                  <h2 className="font-bold uppercase text-[18px] -tracking-[0.01rem]">
                    {pro.name}
                  </h2>
                  <Link
                    to={pro.to}
                    className="text-[16px] font-semibold uppercase text-gray-500 flex justify-center items-center ease-in-out duration-300 transition-all hover:text-primary hover:scale-[110%]"
                  >
                    Shop
                    <Icon
                      icon="iconamoon:arrow-right-2"
                      className="text-orange-400"
                      width={24}
                    />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
