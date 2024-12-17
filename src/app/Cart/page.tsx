import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Link from 'next/link';

const Cart = () => {
  return (
    <div className="bg-white min-h-screen flex items-start justify-center p-6">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
      
        <div className="md:col-span-2 p-6">
          <div className="w-full md:w-[681px] h-[62px] bg-[#E5E5E5] mb-4">
            <p className="font-medium text-sm">Free Delivery</p>
            <p className="pt-2 text-xs md:text-sm">Applies to orders of ₹ 14,000.00 or more. <span className="font-normal underline">View details</span></p>
          </div>

          <h1 className="text-xl md:text-2xl font-bold mb-4">Bag</h1>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b pb-4 mb-4">
            <img
              src="/img/Cart_farem.png"
              alt="Nike Dri-FIT"
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1 ml-0 md:ml-4 mt-2 md:mt-0">
              <h2 className="font-semibold text-lg">Nike Dri-FIT ADV TechKnit Ultra</h2>
              <p className="text-sm text-gray-500">Men's Short-Sleeve Running Top</p>
              <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
              <p className="text-sm text-gray-500">Size: L &nbsp; | &nbsp; Quantity: 1</p>
              <div className="flex gap-3 pt-3">
                <FaRegHeart />
                <MdDeleteOutline />
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-800">MRP: ₹3,895.00</p>
            </div>
          </div>

          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b pb-4 mb-4">
            <div className="flex-1 ml-0 md:ml-28 mt-2 md:mt-0">
              <h2 className="font-semibold text-lg">Nike Air Max 97 SE</h2>
              <p className="text-sm text-gray-500">Men's Shoes</p>
              <p className="text-sm text-gray-500">Flat Pewter/Light Bone/Black/White</p>
              <p className="text-sm text-gray-500">Size: 8 &nbsp; | &nbsp; Quantity: 1</p>
              <div className="flex gap-3 pt-3">
                <FaRegHeart />
                <MdDeleteOutline />
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-800">MRP: ₹16,995.00</p>
            </div>
          </div>
        </div>

       
        <div className=" p-6">
          <h2 className="text-lg md:text-xl font-bold mb-6">Summary</h2>
          <div className="flex justify-between mb-4">
            <p className="text-sm text-gray-600">Subtotal</p>
            <p className="font-semibold text-gray-800">₹20,890.00</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-sm text-gray-600">Estimated Delivery & Handling</p>
            <p className="font-semibold text-gray-800">Free</p>
          </div>
          <div className="flex justify-between mb-6 border border-gray-100 p-4 rounded-lg">
            <p className="text-lg font-bold">Total</p>
            <p className="text-lg font-bold">₹20,890.00</p>
          </div>
          <Link href={"/Checkout"}>
          <button className="w-full bg-black text-white py-3 rounded-lg">
            Member Checkout
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
