import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductDetail = () => {
  return (
    <div>
      <section className="mt-12  p-28 grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <Image
            src="/img/Rectangle (1).png"
            alt="Nike Air Force 1 PLT.AF.ORM"
            width={1000} height={1000}
            className= " w-full h-[600px] object-cover rounded-md"
          />
        </div>


        <div className=" p-10  w-full md:max-w-md">
          <h2 className="font-bold text-xl">
            Nike Air Force 1 <br /> PLT.AF.ORM
          </h2>
          <p className="text-gray-700 mt-4 mb-6">
            Turn style on its head with this crafted take on the Air Jordan 1 Mid.
            Its inside out inspired construction, including unique layering and
            exposed foam accents, ups the ante on this timeless Jordan Brand
            silhouette. Details like the deco stitching on the Swoosh add coveted
            appeal, while the unexpected shading, rich mixture of materials and
            aged midsole aesthetic give this release an artisan finish.
          </p>
          <p className="text-[#111111] font-bold text-xl">₹8,695.00</p>
          <Link href={"/Cart"}>
          <button className="mt-4 w-full md:w-32 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300">
            Add to Cart
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;