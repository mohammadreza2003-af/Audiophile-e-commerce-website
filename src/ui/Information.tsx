const Information = ({ share }: { share: boolean }) => {
  return (
    <div className="w-full bg-white relative">
      <div
        className={`flex items-center justify-center ${
          share ? "" : "lg:px-32 px-6"
        }`}
      >
        <div
          className={`lg:max-w-[1220px] w-full ${
            share ? "py-16" : "lg:py-44 py-32"
          } bg-white`}
        >
          <div className="flex flex-col justify-center items-center gap-y-8 lg:flex-row lg:justify-between">
            <div className="max-w-[80%] rounded-lg overflow-hidden lg:order-2">
              <img
                src="/assets/shared/mobile/image-best-gear.jpg"
                className="md:hidden w-[256px]"
              />
              <img
                src="/assets/shared/tablet/image-best-gear.jpg"
                className="lg:hidden md:block hidden"
              />
              <img
                src="/assets/shared/desktop/image-best-gear.jpg"
                className="lg:block hidden w-[256px]"
              />
            </div>
            <div className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start max-w-[75%] lg:max-w-[50%]">
              <h2 className="font-bold text-slate-950 md:text-5xl text-2xl tracking-wider mb-12">
                BRINGING YOU THE
                <br /> <span className="text-primary">BEST</span> AUDIO GEAR
              </h2>
              <p className="text-slate-600 mb-8 text-[16px] font-[500]">
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
