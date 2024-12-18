"use client";
import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import Image from "next/image";

const All_products = () => {
  const products = [
    { id: 1, name: "Nike Air Force 1 PLT.AF.ORM", price: "MRP:₹10,795", image: "/img/Rectangle (1).png" },

    { id: 2, name: "Nike Court Vision Low Next Nature", price: "MRP:₹4,995", image: "/img/Rectangle (3).png" },

    { id: 3, name: "Nike Air Force 1 Mid '07", price: "MRP:₹8,995", image: "/img/Rectangle (5).png" },

    { id: 4, name: "Air Jordan 1 Elevate Low", price: "MRP:₹10,795", image: "/img/Rectangle (6).png" },

    { id: 5, name: "Nike SB Force 58", price: "MRP:₹4,995", image: "/img/Rectangle (6).png" },

    { id: 6, name: "Nike Blazer Low '77 Jumbo", price: "MRP:₹8,995", image: "/img/Rectangle (7).png" },

    { id: 7, name: "Nike Sportswear Trend", price: "MRP:₹10,795", image: "/img/Rectangle (8).png" },

    { id: 8, name: "Jordan Series ES", price: "MRP:₹4,995", image: "/img/Rectangle (9).png" },

    { id: 9, name: "Jordan Series ES", price: "MRP:₹8,995", image: "/img/Rectangle (10).png" },

    { id: 10, name: "Nike Dri-FIT Challenger", price: "MRP:₹10,795", image: "/img/Rectangle (11).png" },

    { id: 11, name: "Nike Dri-FIT Run Division Rise 365", price: "MRP:₹4,995", image: "/img/Rectangle (12).png" },

    { id: 12, name: "Nike SB Zoom Janoski OG+", price: "MRP:₹8,995", image: "/img/Rectangle (13).png" },

    { id: 13, name: "Nike Swoosh", price: "MRP:₹10,795", image: "/img/Rectangle (14).png" },

    { id: 14, name: "Nike Court Legacy Lift", price: "MRP:₹4,995", image: "/img/Rectangle (15).png" },

    { id: 15, name: "Nike Alate All U", price: "MRP:₹8,995", image: "/img/Rectangle (16).png" },

    { id: 16, name: "Nike Air Max SYSTM", price: "MRP:₹10,795", image: "/img/Rectangle (17).png" },

    { id: 17, name: "Nike Dri-FIT UV Miler", price: "MRP:₹4,995", image: "/img/Rectangle (18).png" },

    { id: 18, name: "Nike Air Max SC", price: "MRP:₹8,995", image: "/img/Rectangle (19).png" },

    { id: 19, name: "Nike Dunk Low Retro", price: "MRP:₹10,795", image: "/img/Rectangle (20).png" },

    { id: 20, name: "Nike Pro Dri-FIT", price: "MRP:₹4,995", image: "/img/Rectangle (21).png" },

    { id: 21, name: "Nike Air Force 1 '07", price: "MRP:₹8,995", image: "/img/Rectangle (22).png" },

    { id: 22, name: "Nike Blazer Low Platform", price: "MRP:₹10,795", image: "/img/Rectangle (23).png" },

    { id: 23, name: "Nike Dri-FIT Ready", price: "MRP:₹4,995", image: "/img/Rectangle (26).png" },

    { id: 24, name: "Nike One Leak Protection: Period", price: "MRP:₹8,995", image: "/img/Rectangle (25).png" },

    { id: 25, name: "Nike Dunk Low Retro SE", price: "MRP:₹4,995", image: "/img/Rectangle (28).png" },

    { id: 26, name: "Nike Dri-FIT UV Hyverse", price: "MRP:₹8,995", image: "/img/Rectangle (27).png" },
    
    { id: 27, name: "Nike Standard Issue", price: "MRP:₹8,995", image: "/img/Rectangle (31).png" },
  ];

  return (
    <>
      <div className="w-[1200px] pt-8">
        <div className=" flex justify-between">
          <h1 className="font-bold ml-2">New (500)</h1>
          <div className="flex gap-10 m-2">
            Hide Filters
            <Image src="/img/Frame (13).png" alt="Filter Icon" 
             width={20}
             height={30}
            />
            <IoChevronDownOutline className="m-1 mr-8" />
          </div>
        </div>
      </div>

      <div className="flex-grow p-4 bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">Products</h1>
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => ( 
            <div
              key={product.id}
              className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={800}
                layout="responsive"
                className="object-contain w-full h-80"
              />
              <p className="w-20 h-7 font-medium text-[#9E3500]">Just In</p>
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-[#757575] font-normal">1 Colour</p>
              <p className="w-32 h-4 font-medium text-[#111111]">{product.price}</p>
            </div>
          ))}
        </div>
        <div className="p-8 mt-28">
          <hr className="border-t border-gray-300 my-4" />
        </div>

        <div className="mt-12 mb-12">
          <h2 className="text-xl font-bold mb-4">Related Categories</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Best Selling Products",
              "Best Shoes",
              "New Basketball Shoes",
              "New Football Shoes",
              "New Running Shoes",
              "New Men's Shoes",
              "New Jordan Shoes",
              "Best Men's Shoes",
              "Best Training & Gym",
              "Best Women's Shoes",
            ].map((category, index) => (
              <span
                key={index}
                className="px-4 py-2 border border-gray-200 rounded-full text-sm cursor-pointer hover:bg-gray-300"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default All_products