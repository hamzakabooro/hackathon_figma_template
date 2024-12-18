
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoBagRemove } from "react-icons/io5";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3 lg:px-8">
        
        <Image
          src="/img/Frame1.png"
          alt="logo2"
          width={0}
          height={0}
          className="h-8 sm:h-10"
        />

        
        <div className="hidden lg:flex gap-6 ">
          
            <p className="hover:text-black transition">New & Featured</p>
        
          
            <p className="hover:text-black transition">Man</p>
          
          
            <p className="hover:text-black transition">Women</p>
        
          
            <p className="hover:text-black transition">Kids</p>
          
          
            <p className="hover:text-black transition">Sale</p>
          
          
            <p className="hover:text-black transition">SNKRS</p>
      
        </div>

      
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-1 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <FaRegHeart className="w-6 h-6 text-gray-500 hover:text-black transition" />
          <IoBagRemove className="w-6 h-6 text-gray-500 hover:text-black transition" />
        </div>
      </div>

      
      <div className="lg:hidden flex justify-center bg-gray-100 py-2">
        <div className="flex gap-4 ">
          
            <p className="hover:text-black transition">New & Featured</p>
        
          
            <p className="hover:text-black transition">Man</p>
          
          
            <p className="hover:text-black transition">Woman</p>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
