import { Link } from "react-router-dom";
import data from "../../public/data.json";
const SomeProducts = () => {
  const speaker1 = data[5];
  const speaker2 = data[4];
  const earphone1 = data[0];

  return (
    <div className="w-full bg-white relative">
      <div className="flex items-center justify-center lg:px-32 px-6">
        <div className="lg:max-w-[1220px] w-full py-8 bg-white">
          <div className="flex flex-col gap-y-8 justify-center items-center">
            <div
              className={`bg-primary w-full relative rounded-lg py-16 z-10 flex md:flex-row px-10 flex-col justify-center items-center text-center gap-y-8 md:gap-x-8 overflow-hidden`}
            >
              <img
                src="/assets/home/desktop/pattern-circles.svg"
                className="absolute md:top-8 top-14 left-[50%] md:left-[30%] translate-x-[-50%] -z-10 w-[400px] md:w-[1200px]"
              />
              <img
                src="/assets/home/desktop/image-speaker-zx9.png"
                alt="speacker"
                className="md:translate-y-[20%] w-[220px] md:w-[300px]"
              />
              <div className="flex flex-col justify-center items-center gap-y-8 md:items-start md:text-left md:translate-y-[20%]">
                <h2 className="font-bold text-white md:text-6xl text-4xl tracking-wider">
                  ZX9
                  <br />
                  Speaker
                </h2>
                <p className="text-slate-200 w-[70%]">
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                <Link
                  to={`/product/${speaker1.slug}`}
                  className="bg-black ease-in-out duration-300 transition-all hover:bg-gray-800 text-white font-semibold px-6 py-3 text-medium"
                >
                  SEE PRODUCT
                </Link>
              </div>
            </div>

            <div
              className={`bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] sm:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] md:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] bg-no-repeat bg-center bg-cover md:h-[300px] h-[400px] w-full relative rounded-lg z-10 flex px-10 flex-col justify-center items-start text-center gap-y-8 md:gap-x-8 overflow-hidden`}
            >
              {/* <img
                src="/assets/home/desktop/image-speaker-zx7.jpg"
                alt="speacker"
              /> */}
              <h2 className="font-bold text-slate-950 md:text-4xl text-3xl tracking-wider">
                ZX7 Speaker
              </h2>
              <Link
                to={`/product/${speaker2.slug}`}
                className="border-2 ease-in-out duration-300 transition-all hover:bg-slate-950 hover:text-white border-slate-950  text-slate-950 font-semibold px-6 py-3 text-medium"
              >
                SEE PRODUCT
              </Link>
            </div>
            <div className="grid grid-rows-1 sm:grid-cols-2 w-full gap-8">
              <div className="bg-[url('/assets/home/mobile/image-earphones-yx1.jpg')] sm:bg-[url('/assets/home/tablet/image-earphones-yx1.jpg')] md:bg-[url('/assets/home/desktop/image-earphones-yx1.jpg')] bg-no-repeat bg-center bg-cover sm:h-[320px] h-[200px] w-[100%] relative rounded-lg"></div>
              <div className="flex px-10 flex-col justify-center items-start text-center gap-y-8 md:gap-x-8 bg-[#f4f4f4] rounded-lg py-8">
                <h2 className="font-bold text-slate-950 md:text-4xl text-3xl tracking-wider">
                  YX1 Earphones
                </h2>
                <Link
                  to={`/product/${earphone1.slug}`}
                  className="border-2 ease-in-out duration-300 transition-all hover:bg-slate-950 hover:text-white border-slate-950  text-slate-950 font-semibold px-6 py-3 text-medium"
                >
                  SEE PRODUCT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomeProducts;
