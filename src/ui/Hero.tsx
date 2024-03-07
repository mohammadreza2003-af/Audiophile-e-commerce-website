const Hero = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center lg:px-32 px-6 bg-dark">
        <div className="lg:max-w-[1220px] w-full py-8 relative min-h-[620px]">
          <div className="bg-heroBackMob md:bg-heroBackTab lg:bg-heroBackDesk bg-contain lg:bg-cover lg:bg-right-top bg-center bg-no-repeat w-full absolute h-full flex items-center">
            <div className="lg:text-left text-center lg:mx-0 mx-auto">
              <h2 className="text-[#b1b1b1] font-normal tracking-[6px] uppercase mb-6">
                New product
              </h2>
              <h1 className="font-bold text-white md:text-7xl text-5xl tracking-wider mb-12">
                XX99 Mark II
                <br />
                Headphones
              </h1>
              <p className="text-slate-200 mb-8">
                Experience natural, lifelike audio and exceptional build quality
                <br className="hidden md:block" />
                made for the passionate music enthusiast.
              </p>
              <button className="bg-orange-400 text-white font-semibold px-6 py-3 text-medium">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
