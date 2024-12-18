import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Tobar = () => {
  return (
    <div>
      <div className="w-full  bg-[#F5F5F5] flex justify-between items-center px-4 py-2 md:px-10">

        <Image
          src="/img/Frame.png"
          alt="Logo"
          width={50}
          height={100}
          className="h-6 md:h-8 object-contain"
        />

        <div className="flex items-center">
          <ul className="flex gap-4 sm:gap-6 items-center text-sm font-medium text-[#111111]">
            <Link href={"/product_detail"}>
              <li className="hover:underline cursor-pointer mt-2 ml-6">Find a Store </li>
            </Link>
            <div className='w-1 h-4 font-bold text-sm ml-4 '>|</div>
            <Link href={"/Contact_us"}><li className="hover:underline cursor-pointer mt-2">Help</li>
            </Link>
            <div className='w-1 h-4 font-bold text-sm '>|</div>
            <Link href={"/Join_us"}>
              <li className="hover:underline cursor-pointer hidden sm:block mt-2">Join Us</li>
            </Link>
            <div className='w-1 h-4 font-bold text-sm '>|</div>
            <Link href={"/Login"}>
              <li className="hover:underline cursor-pointer mt-2">Sign In</li>
            </Link>


          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tobar;