import React, { useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { assets } from '../../assests/assests';
import { Instagram, LinkedIn } from '@mui/icons-material';
import WOW from 'wowjs';

import 'animate.css';

const AboutUs = () => {
    useEffect(() => {
        new WOW.WOW({
            live: false,
        }).init();
    }, []);

    return (
        <div className=''>
            <div className="relative text-center mb-2">
                <img className="h-72 w-full object-cover" src={assets.AboutUs} alt="" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                    <div className='flex flex-col font-bold text-3xl wow animate__animated animate__pulse'>
                        <span>"Innovating today, shaping tomorrow. Together,</span>
                        <span>we create the future."</span>
                    </div>
                    <button className="rounded-xl text-white p-2 bg-red-500 hover:bg-red-800 mt-5">
                        Contact us <ArrowForwardIcon />
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 p-8 bg-gradient-to-r from-white via-gray-800 to-gray-900 text-white mb-7">
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="relative wow animate__animated animate__backInLeft">
                        <img
                            src={assets.WWR}
                            className="h-64 mx-auto rounded-full "
                            alt="Who We Are"
                        />
                        
                    </div>
                </div>
                <div className="flex flex-col justify-center text-white wow animate__animated animate__backInRight">
                    <div className='text-3xl font-bold text-red-500 mb-5'>WHO WE ARE ?</div>
                    <p className="mb-4 text-lg leading-relaxed wow animate__animated ">
                        Welcome to Itrio, your innovative partner in the world of IT solutions. As a forward-thinking startup, we are dedicated to redefining the IT landscape with cutting-edge technology and a fresh perspective.
                    </p>
                    <p className="text-lg leading-relaxed">
                        At Itrio, our mission is to empower businesses with state-of-the-art IT solutions that drive efficiency, foster growth, and unlock new opportunities. Our team of passionate tech experts combines deep industry knowledge with a commitment to excellence, providing tailored services that address the unique needs of each client.
                    </p>
                </div>
            </div>

            <div className=''>
                {/* What We Believe Section */}
                <div className="text-center mb-12">
                    <div className="wow animate__animated animate__fadeInTopLeft text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-6">
                        WHAT WE BELIEVE
                    </div>
                    <div className="wow animate__animated animate__fadeInBottomRight text-lg max-w-2xl mx-auto leading-relaxed">
                        "Innovating the Future, One Solution at a Time, Empowering Your Vision with Cutting-Edge Technology,
                        Transforming Ideas into Digital Success, Leading the Way in Tomorrow’s Technology Today."
                    </div>
                </div>
            </div>

            <div className="bg-gray-900 text-white py-16">
                {/* Meet Our Team Members Section */}
                <div>
                    <div className=" text-4xl font-extrabold text-center mb-10">
                        MEET OUR TEAM MEMBERS
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {/* Team Member 1 */}
                        <div className="relative flex flex-col items-center text-center">
                            <div className="relative w-48 h-48 mb-4 group">
                                <img
                                    src={assets.mens1}
                                    alt="Roshan Khapre"
                                    className="w-full h-full object-cover rounded-full shadow-lg group-hover:shadow-2xl transition-shadow duration-200"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <div className="flex space-x-4">
                                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                            <Instagram className="text-white hover:text-red-500 transition-colors duration-200" />
                                        </a>
                                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <LinkedIn className="text-white hover:text-blue-500 transition-colors duration-200" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="text-xl font-semibold">ROSHAN KHAPRE</div>
                            <div className="text-sm text-gray-400">Java Full Stack Developer</div>
                        </div>

                        {/* Team Member 2 */}
                        <div className=" relative flex flex-col items-center text-center">
                            <div className="relative w-48 h-48 mb-4 group">
                                <img
                                    src={assets.mens2}
                                    alt="Ayush Paradkar"
                                    className="w-full h-full object-cover rounded-full shadow-lg group-hover:shadow-2xl transition-shadow duration-200"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <div className="flex space-x-4">
                                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                            <Instagram className="text-white hover:text-red-500 transition-colors duration-200" />
                                        </a>
                                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <LinkedIn className="text-white hover:text-blue-500 transition-colors duration-200" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="text-xl font-semibold">AYUSH PARADKAR</div>
                            <div className="text-sm text-gray-400">Frontend Developer</div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="relative flex flex-col items-center text-center">
                            <div className="relative w-48 h-48 mb-4 group">
                                <img
                                    src={assets.mens3}
                                    alt="Shubham Kinkar"
                                    className="w-full h-full object-cover rounded-full shadow-lg group-hover:shadow-2xl transition-shadow duration-200"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <div className="flex space-x-4">
                                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                            <Instagram className="text-white hover:text-red-500 transition-colors duration-200" />
                                        </a>
                                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <LinkedIn className="text-white hover:text-blue-500 transition-colors duration-200" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="text-xl font-semibold">SHUBHAM KINKAR</div>
                            <div className="text-sm text-gray-400">Full Stack Developer</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AboutUs;
