import React from 'react';
import Image from 'next/image'; 

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md rounded-lg p-8">
        


        <div className="flex justify-center mb-6">
          <Image 
            src="/img/Frame1.png" 
            alt="Nike logo" 
            width={200} 
            height={100} 
            className="object-contain" 
          />
        </div>

        <h1 className="text-2xl font-bold text-center mb-4">
          YOUR ACCOUNT FOR EVERYTHING <span className="text-black">NIKE</span>
        </h1>

        <form className="space-y-6">
          
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

          
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Keep me signed in</span>
            </label>
            <a href="#" className="text-sm text-black hover:underline">
              Forgotten your password?
            </a>
          </div>

          
          <p className='text-[#8D8D8D] font-extralight'>
            By logging in, you agree to Nike's <span className='underline'>Privacy Policy</span> and <span className='underline'>Terms of Use</span>.
          </p>

          
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            SIGN IN
          </button>
        </form>

        
        <p className="mt-6 text-sm text-center text-gray-600">
          Not a Member?{" "}
          <a href="#" className="text-black font-medium hover:underline">
            Join Us.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;