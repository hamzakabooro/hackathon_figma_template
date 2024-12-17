import React from 'react';
import Link from 'next/link';

const Tobar = () => {
  return (
    <div>
      <div className="w-full bg-[#F5F5F5] flex justify-between items-center px-4 py-2 md:px-10">

        <img
          src="/img/Frame.png"
          alt="Logo"
          className="h-6 md:h-8 object-contain"
        />

        <div className="flex items-center">
          <ul className="flex gap-4 sm:gap-6 items-center text-sm font-medium text-[#111111]">
            <Link href={"/product_detail"}>
              <li className="hover:underline cursor-pointer">Find a Store</li>
            </Link>
            <Link href={"/Contact_us"}><li className="hover:underline cursor-pointer">Help</li>
            </Link>
            <Link href={"/Join_us"}>
              <li className="hover:underline cursor-pointer hidden sm:block">Join Us</li>
            </Link>
            <Link href={"/Login"}>
              <li className="hover:underline cursor-pointer">Sign In</li>
            </Link>


          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tobar;