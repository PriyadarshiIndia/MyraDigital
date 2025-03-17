import React from 'react';
import { Link } from 'react-router-dom'; // Use 'next/link' if you're using Next.js

const CategoriesSection = () => {
  return (
    <section className="max-w-8xl py-20 mx-auto text-center px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Chargers */}
        <Link to="/chargers" className="flex flex-col items-center">
          <div className="w-40 h-40 sm:w-60 sm:h-60 rounded-full overflow-hidden bg-pink-100">
            <img
              src="https://www.myg.in/images/thumbnails/300/300/detailed/85/Applecharger-1-removebg-preview.png.png"
              alt="Chargers"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-2 text-sm font-medium">Chargers</p>
        </Link>

        {/* Charging Cables */}
        <Link to="/data-cables" className="flex flex-col items-center">
          <div className="w-40 h-40 sm:w-60 sm:h-60 rounded-full overflow-hidden bg-green-100">
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696428299/Croma%20Assets/Wearables/Wearable%20Accessories/Images/301213_torcdz.png?tr=w-600"
              alt="Charging Cables"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-2 text-sm font-medium">Data Cables</p>
        </Link>

        {/* Projectors */}
        <Link to="/projectors" className="flex flex-col items-center">
          <div className="w-40 h-40 sm:w-60 sm:h-60 rounded-full overflow-hidden bg-blue-100">
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1665670667/Croma%20Assets/Computers%20Peripherals/Projectors/Images/263850_sp4um2.png?tr=w-600"
              alt="Projectors"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-2 text-sm font-medium">Projectors</p>
        </Link>

        {/* Note Counting Machine */}
        <Link to="/currency-counting-machine" className="flex flex-col items-center">
          <div className="w-40 h-40 sm:w-60 sm:h-60 rounded-full overflow-hidden bg-red-100">
            <img
              src="https://s3.toolsvilla.com/products/Economy%20Range%20SemiAutomatic%20Cash%20Counting%20Machine%20with%20Digital%20Display/1591430215073cash%20counting.png"
              alt="Note Counting Machine"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-2 text-sm font-medium">Note Counting Machine</p>
        </Link>

        {/* Power Banks */}
        <Link to="/power-banks" className="flex flex-col items-center">
          <div className="w-40 h-40 sm:w-60 sm:h-60 rounded-full overflow-hidden bg-orange-100">
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1725624590/275990_0_nj9tzm.png"
              alt="Power Banks"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-2 text-sm font-medium">Power Banks</p>
        </Link>
      </div>
    </section>
  );
};

export default CategoriesSection;