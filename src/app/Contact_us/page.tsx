import React from 'react';

import { IoSearchOutline } from "react-icons/io5";
import { FaMobileAlt,} from "react-icons/fa";
import { LuMessageSquareMore } from "react-icons/lu"; 
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
    
      <div className="max-w-6xl mx-auto p-4 flex gap-6">

    
        <div className="w-2/3 p-6">
          <h1 className="text-3xl font-bold text-center mb-6">GET HELP</h1>

      
          <div className="flex relative mb-10">
            <input 
              type="text" 
              placeholder="What can we help you with?" 
              className="w-full max-w-[500px] border border-gray-300 rounded-lg py-3 px-12 text-gray-700" 
            />
            <IoSearchOutline className="absolute left-3 top-3 w-5 h-5 text-[#757575]" />
          </div>

          
          <h2 className="text-2xl font-bold border-b pb-4">
            What Payment Options Can I Use On Nike Orders?
          </h2>
          <div className="mt-4">
            <p>
              We accept the following payment options:
            </p>
            <ul className="list-disc list-inside my-4 text-sm">
              <li>Visa, Mastercard, Diners Club, Discover, American Express</li>
              <li>Visa Electron, Maestro</li>
              <li>Apple Pay</li>
            </ul>
            <p className="mb-4 text-sm">
              If you enter your PAN information at checkout, you can also use PayTM or a local credit/debit card.
            </p>

            <div className="flex gap-4 mt-6">
              <button className="bg-black text-white px-6 py-2 rounded">Join Us</button>
              <button className="bg-gray-800 text-white px-6 py-2 rounded">Shop Nike</button>
            </div>
          </div>

          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">FAQs</h2>

            
            <div className="mb-4">
              <h3 className="font-bold">
                Does my card need international purchases enabled?
              </h3>
              <p className="mt-1 text-sm">
                Yes, we recommend asking your bank to enable international purchases. You will be notified at checkout if needed.
              </p>
            </div>

            
            <div className="mb-4">
              <h3 className="font-bold">
                Can I pay for my order with multiple methods?
              </h3>
              <p className="mt-1 text-sm">
                No, payments cannot be split between multiple methods.
              </p>
            </div>

            
            <div className="mb-4">
              <h3 className="font-bold">
                What payment method is accepted for SNKRS orders?
              </h3>
              <p className="mt-1 text-sm">
                You can use any accepted credit card to pay for SNKRS orders.
              </p>
            </div>

            
            <div className="mb-4">
              <h3 className="font-bold">
                Why don&nbsp;t I see Apple Pay as an option?
              </h3>
              <p className="mt-1 text-sm">
                You need a compatible Apple device running the latest OS, signed into iCloud, and using Safari to see Apple Pay on Nike.com.
              </p>
            </div>

            <p>Was this answer helpful?</p>
            <div className='flex gap-3'>
              <Image src="/img/Vector.png" alt="vector icon" width={20} height={20} className='text-[#111111]' />
              <Image src="/img/Vector (1).png" alt=" vector icon2" width={20} height={20} className='text-[#111111]' />
              </div>

            <h2 className="font-medium mt-1 text-[#757575]">RELATED</h2>
            <div className="w-full mt-8">
              <h1>WHAT ARE NIKE&nbsp;S DELIVERY OPTIONS?</h1>
              <h1 className="underline">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</h1>
            </div>
          </div>
        </div>

        
        <div className=" w-1/3 p-6 mt-32">
          <h2 className="text-4xl font-bold mb-6 pl-10 text-[#111111]">CONTACT US</h2>

          
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center">
              <FaMobileAlt className="w-16 h-16 my-3" />
              <p className="font-semibold">Call Us</p>
              <p>03163465292</p>
              <p className="text-sm text-gray-600">Products & Orders: 24 hours a day, 7 days a week</p>
              <p className="text-sm text-gray-600">Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
            </div>

            <div className="flex flex-col items-center">
              <LuMessageSquareMore className="w-16 h-16 my-3" />
              <p className="font-semibold">Live Chat</p>
              <p>24 hours a day, 7 days a week</p>
            </div>

            <div className="flex flex-col items-center">
            <Image src={'/img/Image (13).png'} alt='icons' width={80} height={100}/>
              <p className="font-semibold">Customer Support</p>
              <p>24 hours a day, 7 days a week</p>
            </div>
            <Image src={'/img/Image (12).png'} alt='icons' width={80} height={100}/>

            <div className="flex flex-col items-center">
              <p className="font-semibold">Store Locator</p>
              <p>Find Nike retail stores near you.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;