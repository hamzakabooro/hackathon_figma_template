import React from 'react';
import Image from 'next/image'; 

const JoinUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white-100 ">
      <div className="w-full max-w-lg  rounded-lg p-8 ">
       
        <div className="flex justify-center mb-6">
          <Image 
            src="/img/Frame1.png" 
            alt="Nike logo" 
            width={100} 
            height={100} 
            className="object-contain" 
          />
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-4">BECOME A NIKE MEMBER</h1>
        
        <p className="text-sm text-gray-600 text-center mb-6">
          Create your Nike Member profile and get first access to the very best of Nike
          products, inspiration, and community.
        </p>
        
        <form className="space-y-4">
         
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
              required
            />
          </div>

         
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
              required
            />
          </div>

       
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
              required
            />
          </div>

        
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
              required
            />
          </div>

         
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
              required
            />
          </div>

         
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              id="country"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
              required
            >
              <option>Pakistan</option>
              <option>India</option>
            </select>
          </div>

         
          <div>
            <span className="block text-sm font-medium text-gray-700">Gender</span>
            <div className="flex items-center space-x-4 mt-1">
              <label className="flex items-center">
                <input type="radio" name="gender" value="male" className="h-4 w-4 text-black focus:ring-black border-gray-300" required />
                <span className="ml-2 text-sm text-gray-700">Male</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" value="female" className="h-4 w-4 text-black focus:ring-black border-gray-300" required />
                <span className="ml-2 text-sm text-gray-700">Female</span>
              </label>
            </div>
          </div>

         
          <div className="flex items-center">
            <input
              type="checkbox"
              id="newsletter"
              className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
            />
            <label htmlFor="newsletter" className="ml-2 text-sm text-gray-700">
              Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
            </label>
          </div>

          <p className="text-[#8D8D8D] font-extralight">
            By signing up, you agree to Nike&nbsp;s <span className="underline">Privacy Policy</span> and <span className="underline">Terms of Use</span>.
          </p>

         
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            JOIN US
          </button>
        </form>

       
        <p className="mt-6 text-sm text-center text-gray-600">
          Already a Member?{" "}
          <a href="/login" className="text-black font-medium hover:underline">
            Sign In.
          </a>
        </p>
      </div>
    </div>
  );
};

export default JoinUs;