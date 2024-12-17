import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { IoBagRemove } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';

const Checkout = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <Image src="/img/Frame1.png" alt="Nike Logo" className="ml-4" />
        <div className="flex gap-10 m-2">
          000 800 100 9538
          <MdOutlineMessage className="mt-1" />
          <IoBagRemove />
        </div>
      </div>

      <section className="mt-12 ml-2 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex-1 p-6">
          <h3 className="text-lg font-semibold mb-4">Enter your name and address:</h3>
          <form className="grid grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              placeholder="First Name"
              className="col-span-1 p-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="col-span-1 p-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Address Line 1"
              className="col-span-2 p-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Address Line 2"
              className="col-span-2 p-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="col-span-1 p-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Locality"
              className="col-span-1 p-2 border rounded-md"
            />
            <select className="col-span-2 p-2 border rounded-md">
              <option>State/Territory</option>
              <option>Pakistan</option>
            </select>
            <div className="col-span-2 flex items-center space-x-2">
              <input type="checkbox" id="save-address" />
              <label htmlFor="save-address" className="text-sm">
                Save this address to my profile
              </label>
            </div>
            <div className="col-span-2 flex items-center space-x-2">
              <input type="checkbox" id="preferred-address" />
              <label htmlFor="preferred-address" className="text-sm">
                Make this my preferred address
              </label>
            </div>
          </form>

          <h3 className="text-lg font-semibold mb-4">What’s your contact information?</h3>
          <form className="grid grid-cols-2 gap-4 mb-6">
            <input
              type="email"
              placeholder="Email"
              className="col-span-2 p-2 border rounded-md"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="col-span-2 p-2 border rounded-md"
            />
          </form>

          <h3 className="text-lg font-semibold mb-4">What’s your PAN?</h3>
          <form className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="PAN"
              className="col-span-2 p-2 border rounded-md"
            />
            <p className="w-[380px] h-12 font-light text-sm">
              Enter your PAN to enable payment with UPI, Net Banking or local card methods.
            </p>
          </form>

          <div className="col-span-2 flex items-center space-x-2">
            <input type="checkbox" id="save-pan" />
            <label htmlFor="save-pan" className="w-[250px] h-6 font-light text-sm">
              Save PAN details to Nike Profile
            </label>
          </div>

          <div className="col-span-2 flex items-center space-x-2 mt-2">
            <input type="checkbox" id="consent-checkbox" />
            <label htmlFor="consent-checkbox" className="w-[380px] h-12 font-light text-sm mt-6">
              I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy.
            </label>
          </div>
          <Link href={"/#"}>
          <button className="w-[450px] h-[60px] bg-[#F5F5F5] text-[#757575] rounded-3xl mt-6">
            Continue
          </button>
          </Link>

          <div className="p-3">
            <h2 className="w-[450px] h-[60px] border border-gray-300 p-2">Delivery</h2>
            <h2 className="w-[450px] h-[60px] border border-gray-300 p-2 mt-2 text-[#757575]">Shipping</h2>
            <h2 className="w-[450px] h-[60px] border border-gray-300 p-2 mt-2 text-[#757575]">Billing</h2>
            <h2 className="w-[450px] h-[60px] border border-gray-300 p-2 mt-2 text-[#757575]">Payment</h2>
          </div>
        </div>

        <div className="col-span-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-6">Summary</h2>
          <div className="flex justify-between mb-4">
            <p className="text-gray-600">Subtotal</p>
            <p className="font-semibold text-gray-800">₹20,890.00</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-600">Estimated Delivery & Handling</p>
            <p className="font-semibold text-gray-800">Free</p>
          </div>
          <div className="flex justify-between mb-6 border border-gray-100 p-4 rounded">
            <p className="text-lg font-bold">Total</p>
            <p className="text-lg font-bold">₹20,890.00</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Arrives Mon, 27 Mar - Wed, 12 Apr</h3>
            <div className="flex items-center space-x-4">
              <Image
                src="/img/Frame (9).png"
                alt="Product Image"
                className="w-52 h-52 object-cover"
              />
              <div>
                <p className="w-24 text-sm text-gray-700">Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</p>
                <p className="text-sm text-gray-400">Qty 1</p>
                <p className="text-sm text-gray-400">Size L</p>
                <p className="text-sm text-gray-400">₹ 3,895.00</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center space-x-4">
                <Image
                  src="/img/Frame (11).png"
                  alt="Product Image"
                  className="w-52 h-52 object-cover"
                />
                <div>
                  <p className="w-24 text-sm text-gray-700">Nike Air Max 97 SE Men's Shoes</p>
                  <p className="text-sm text-gray-400">Qty 1</p>
                  <p className="text-sm text-gray-400">Size UK 8</p>
                  <p className="text-sm text-gray-400">₹ 16,995.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkout;