import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { RiArrowLeftSLine } from "react-icons/ri";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <main>
        <Image src="/img/Image.png" alt="hero img" width={1000} height={1000} className="w-full h-auto max-w-[1240px] mx-auto" />
        <div className="w-full bg-[#F5F5F5] flex flex-col items-center justify-center p-4">
          <div className="text-center">
            <h3 className="font-bold text-[#111111]">First Look</h3>
            <h1 className="text-2xl font-bold text-[#111111]">Nike Air Max Pulse</h1>
            <p className="text-gray-600 mt-2">
              Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
              —designed to push you past your limits and help you go to the max.
            </p>
            <div className="ml-1 flex flex-col md:flex-row justify-center">
              <button className="bg-[#111111] text-white rounded-full p-2 m-1">Notify Me</button>
              <button className="bg-[#111111] text-white rounded-full p-2">Shop Air Max</button>
            </div>
          </div>
        </div>
      </main>

      <section className="p-4">
        <h2 className="text-lg font-semibold mb-4">Best of Air Max</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4 text-center">
            <Image src="/img/Image (4).png" alt="shoes1" width={1000} height={1000} className="object-contain pb-2" />
            <h3 className="text-md font-medium">Nike Air Max Pulse</h3>
            <p className="text-[#757575]">Women's Shoes</p>
            <p className="text-lg font-semibold mt-2">₹ 13 995</p>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <Image src="/img/Image (4).png" alt="shoes2" width={1000} height={1000} className="object-contain pb-2" />
            <h3 className="text-md font-medium">Nike Air Max Pulse</h3>
            <p className="text-[#757575]">Men &nbsp;s Shoes</p>
            <p className="text-lg font-semibold mt-2">₹ 13 995</p>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <Image src="/img/shos3.png" alt="shoes3" width={1000} height={1000} className="object-contain pb-2"  />
            <h3 className="text-md font-medium">Nike Air Max 97 SE</h3>
            <p className="text-[#757575]">Men &nbsp;s Shoes</p>
            <p className="text-lg font-semibold mt-2">₹ 16 995</p>
          </div>
        </div>
      </section>

      <section className="p-4">
        <h2 className="text-lg font-semibold mb-4">Featured</h2>
        <Image src="/img/Image5.png" alt="section img" width={1000} height={1000} className="w-full h-auto max-w-[1344px] mx-auto" />
        <div className="w-full bg-[#F5F5F5] flex flex-col items-center justify-center">
          <div className="text-center pt-8 mb-8">
            <h1 className="text-2xl font-bold text-[#111111]">STEP INTO WHAT FEELS GOOD</h1>
            <p className="text-gray-600 mt-2">Cause everyone should know the feeling of running in that perfect pair.</p>
            <button className="bg-[#111111] text-white rounded-full p-2">Find Your Shoe</button>
          </div>
        </div>
      </section>

      <section className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-between">
              <p className="w-28 h-6 font-medium text-sm mt-2">Shop Women&nbsp;s</p>
              <div className='bg-[#F5F5F5] w-8 h-8 rounded-full text-center my-1 p-1'><RiArrowLeftSLine className='w-6 h-6 text-[#CCCCCC]' /></div>
              <div className='bg-[#E5E5E5] w-8 h-8 rounded-full text-center my-1 p-1'><FiChevronRight className='w-5 h-5 text-[#111111]' /></div>
            </div>
            <Image src="/img/Image (11).png" alt="Nike Dri-FIT ADV Run Division" width={1000} height={1000} className="w-full h-auto rounded" />
            <h3 className="text-lg font-bold mt-4">Nike Dri-FIT ADV Run Division</h3>
            <p className="text-gray-600">Women&nbsp;s Long-Sleeve Running Top</p>
            <p className="text-gray-800 font-semibold mt-2">₹ 5,295</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <div className='flex justify-between'>
              <p className='w-28 h-6 font-medium text-sm mt-2'>Shop Men&nbsp;s</p>
              <div className='bg-[#F5F5F5] w-8 h-8 rounded-full text-center my-1 p-1'><RiArrowLeftSLine className='w-6 h-6 text-[#CCCCCC]' /></div>
              <div className='bg-[#E5E5E5] w-8 h-8 rounded-full text-center my-1 p-1'><FiChevronRight className='w-5 h-5 text-[#111111]' /></div>
            </div>
            <Image src="/img/Frame (9).png" alt="Nike Fast" width={1000} height={1000} className="w-full h-auto rounded" />
            <h3 className="text-lg font-bold mt-4">Nike Fast</h3>
            <p className="text-gray-600">Women's Mid-Rise 7/8 Running Leggings with Pockets</p>
            <p className="text-gray-800 font-semibold mt-2">₹ 3,795</p>
          </div>
        </div>
      </section>
      
      <section className="p-4">
        <h2 className='text-lg font-semibold mb-4'>Don't Miss</h2>
        <Image src="/img/Image (6).png" alt="section img" width={1000} height={1000} className="w-full h-auto max-w-[1344px] mx-auto" />
        <div className="w-full bg-[#F5F5F5] flex flex-col items-center justify-center">
          <div className="text-center pt-8 mb-8">
            <h1 className='text-2xl font-bold text-[#111111]'>FLIGHT ESSENTIALS</h1>
            <p className='text-gray-600 mt-2'>Your built-to-last, All-week wears_ but with style only Jordan Brand can deliver.</p>
            <Link href={"/All_porducts"}> <button className='bg-[#111111] text-white rounded-full pl-4 pr-4 pt-1 pb-1 mt-4'>Show more</button></Link>
           
          </div>
        </div>
      </section>

      <section className="p-4">
        <h2 className="text-lg font-semibold mb-4">The Essentials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="border rounded-lg p-4 shadow-md">
            <Image src="/img/Image (9).png" alt="Product 1" width={1000} height={1000} className="w-full h-[500px] object-cover rounded-md" />
          </div>
          <div className="border rounded-lg p-4 shadow-md">
            <Image src="/img/Image (7).png" alt="Product 2" width={1000} height={1000} className="w-full h-[500px] object-cover rounded-md" />
          </div>
          <div className="border rounded-lg p-4 shadow-md">
            <Image src="/img/Image (8).png" alt="Product 3" width={1000} height={1000} className="w-full h-[500px] object-cover rounded-md" />
          </div>
        </div>
      </section>

      <footer className="bg-[#ffff] text-[#111111] py-8 px-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Icons</h3>
            <ul className="space-y-2 text-[#7E7E7E]">
              <li>Air Force 1</li>
              <li>Huarache</li>
              <li>Air Max 90</li>
              <li>Air Max 95</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Shoes</h3>
            <ul className="space-y-2 text-[#7E7E7E]">
              <li>All Shoes</li>
              <li>Custom Shoes</li>
              <li>Jordan Shoes</li>
              <li>Running Shoes</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Clothing</h3>
            <ul className="space-y-2 text-[#7E7E7E]">
              <li>All Clothing</li>
              <li>Modest Wear</li>
              <li>Hoodies & Pullovers</li>
              <li>Shirts & Tops</li>
            </ul>
          </div>
    
          <div>
            <h3 className="text-xl font-bold mb-4">Kids&nbsp;</h3>
            <ul className="space-y-2 text-[#7E7E7E]">
              <li>Infant & Toddler Shoes</li>
              <li>Kids&nbsp; Shoes</li>
              <li>Kids&nbsp;Jordan Shoes</li>
              <li>Kids&nbsp;Basketball Shoes</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;