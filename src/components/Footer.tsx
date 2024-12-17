
import React from "react";
import {  FaTwitter, FaFacebookF } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { BiBriefcase } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <footer className="bg-black text-white py-8 px-10">
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-light mb-4">Find A Store</h3>
                        <h3 className="text-xl font-light mb-4">Become A Member</h3>
                        <h3 className="text-xl font-light mb-4">Send Us Feedback</h3>
                        <h3 className="text-xl font-light mb-4">Student Discounts</h3>
                        <h3 className="text-xl font-light mb-4">Sign Up for Email</h3>
                    </div>
                    <div>
                        <h3 className="text-xl font-light mb-4">Get Help</h3>
                        <ul className="space-y-2 text-[#7E7E7E]">
                            <li>Order Status</li>
                            <li>Delivery</li>
                            <li>Returns</li>
                            <li>Payment Options</li>
                            <li>Contact Us On Nike.com Inquiries</li>
                            <li>Contact Us On All Other Inquiries</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-light mb-4">About Nike</h3>
                        <ul className="space-y-2 text-[#7E7E7E]">
                            <li>News</li>
                            <li>Careers</li>
                            <li>Investors</li>
                            <li>Sustainability</li>
                        </ul>
                    </div>

                    <div className="flex space-x-4">
                        <Link href="#"><FaTwitter aria-label="Twitter" className="h-8 w-8 bg-[#7E7E7E] rounded-full pt-1 pb-1 text-black" /></Link>
                        <Link href="#"><FaFacebookF aria-label="Facebook" className="h-8 w-8 bg-[#7E7E7E] rounded-full pt-1 pb-1 text-black" /></Link>
                        <Link href="#"><TiSocialYoutubeCircular aria-label="YouTube" className="h-8 w-8 bg-[#7E7E7E] rounded-full pt-1 pb-1 text-black" /></Link>
                        <Link href="#"><BiBriefcase aria-label="Careers" className="h-8 w-8 bg-[#7E7E7E] rounded-full pt-1 pb-1 text-black" /></Link>
                    </div>
                </div>
            </footer>

            <footer className="bg-gray-800 text-gray-400 text-sm py-3">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div className="flex ml-6 ">
                        <CiLocationOn className="h-6 w-6 text-white" />
                        <span className="text-white">Pakistan</span>
                    </div>
                    <p className="mr-96">© 2023 Nike, Inc. All Rights Reserved</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-gray-400">Terms of Sale</a>
                        <a href="#" className="text-white hover:text-gray-400">Terms of Use</a>
                        <a href="#" className="text-white hover:text-gray-400">Nike Privacy Policy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}