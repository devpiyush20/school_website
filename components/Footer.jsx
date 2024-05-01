"use client"

import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import Image from "next/image";

export default function Footer() {
    const iconsTab = [
        { icon: <FaFacebookF /> },
        { icon: <AiOutlineTwitter /> },
        { icon: <AiFillYoutube /> },
    
    ];

    return (
        <footer className="bg-white text-black py-1 mt-auto flex items-center justify-center ">
            <div className="container">
                <div className="flex flex-col items-center md:flex-row md:gap-[5rem] text-center md:text-left">
                    {/* Logo and company info */}
                    <div className="flex flex-col w-full md:w-1/2 md:p-5 p-4 gap-4 items-center md:items-start md:ml-20">
                        <Image
                            src={"/assets/logo.png"}
                            width={500}
                            height={300}
                            alt="logo"
                        />
                        <div className="text-[15px] font-medium text-black">
                            <p>Copywright © 2024 B.B.D.J.I.C , bulandshahr</p>
                            All rights reserved.
                        </div>
                        {/* Social icons */}
                        <div className="flex gap-5 text-[18px] text-[#646464] justify-center md:justify-start">
                            {iconsTab.map(({ icon }, index) => (
                                <div
                                    key={index}
                                    className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff0366] hover:text-white transition-all duration-300"
                                >
                                    {icon}
                                </div>
                            ))}
                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.57648094135!2d77.9049760754935!3d28.432033575774874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ca19eff7305a5%3A0xcfc038af3fff5d18!2sBABU%20Banarasi%20Das%20Janta%20Inter%20college!5e0!3m2!1sen!2sin!4v1713521325238!5m2!1sen!2sin" width="200" height="200"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>

                    {/* Menu sections */}
                    <div className="flex flex-col gap-10 md:gap-10 md:grid md:grid-cols-2 md:place-items-start">
                        {/* Company section */}
                        <div className="text-center md:text-left">
                            <p className="text-[22px] font-bold footer-main">Use Full Links</p>
                            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                                <a href="https://www.upmsp.edu.in/" target="_blank">Board Of Allahabad</a>
                            </p>
                            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                            <a href="https://ncert.nic.in/" target="_blank">N.C.E.R.T</a>
                            </p>
                            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                            <a href="https://scholarship.up.gov.in/" target="_blank">Scholarship</a>
                            </p>
                            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                            <a href="https://www.education.gov.in/" target="_blank">Ministry of education</a>
                            </p>
                        </div>

                        {/* Support section */}
                        <div className="text-center md:text-left">
                            <p className="text-[22px] font-bold footer-main">Support</p>
                            <p className="text-[16px] hover:text-[#ff0366] text-[#646464] font-bold">
                                Contact
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
