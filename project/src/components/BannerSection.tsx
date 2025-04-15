import React from "react";

const BannerSection = () => {
  return (
    <section className="py-12">
      <div className="">
        <div className="container mx-auto py-9 md:py-12 lg:py-24 ">
          <div className="relative mx-4 rounded-2xl overflow-hidden shadow shadow-lg shadow-pink-400">
            {/* Desktop Image */}
            <img
              src="https://mavstore.in/cdn/shop/articles/Untitled_design_4.png?v=1705923654"
              alt="A work table with house plants"
              className="w-full h-[450px] hidden lg:block rounded-2xl"
            />
            {/* Tablet Image */}
            <img
              src="https://i.ibb.co/94jQFsV/bench-accounting-nvzv-OPQW0gc-unsplash-1-1.png"
              alt="A work table with house plants"
              className="hidden sm:block lg:hidden w-full h-full rounded-2xl"
            />
            {/* Mobile Image */}
            <img
              src="https://i.ibb.co/cJz8LZ2/bench-accounting-nvzv-OPQW0gc-unsplash-1-1.png"
              alt="A work table with house plants"
              className="sm:hidden w-full h-full rounded-2xl"
            />

            {/* Text Content */}
            <div className="absolute z-10 top-0 left-0 mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 flex flex-col sm:justify-start items-start">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white sm:w-8/12">
              OEM Solutions for Projectors & Mobile Accessories
              </h1>
              <p className="text-base leading-normal text-white mt-4 sm:mt-5 sm:w-5/12">
              Supplying top-tier tech to 50+ cities, backed by efficient sourcing and expert logistics tailored for OEM partnerships.
              </p>
              {/* Desktop & Tablet Button */}
              <button className="hidden sm:flex bg-pink-800 py-4 px-8 text-base font-medium text-white mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-800 hover:bg-pink-700 rounded-lg">
                Explore
              </button>
            </div>

            {/* Mobile Button */}
            <a href="/contact"><button className="absolute bottom-0 sm:hidden dark:bg-white dark:text-gray-800 bg-gray-800 py-4 text-base font-medium text-white mt-8 flex justify-center items-center w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700 rounded-lg">
              Explore
            </button></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
