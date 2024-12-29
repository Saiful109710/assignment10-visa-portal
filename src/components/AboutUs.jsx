import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal';
import { FaArrowRight } from "react-icons/fa6";
import travelJson from '../travel.json'
import Lottie from 'lottie-react';

const AboutUs = () => {
  return (
    <Fade>
        <div className='py-10 px-4 md:px-10 bg-slate-100 pb-[150px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {/* Left Side Image Section */}
           <Fade cascade damping={0.1}>
           <div className='relative'>
                <img className='shadow-lg rounded-lg w-full lg:h-[500px]' src="https://i.ibb.co.com/wpZP6pZ/about.jpg" alt="" />
                {/* <img  src="https://i.ibb.co.com/dBxgpGT/about-2.jpg" alt="" /> */}
                <Lottie className='absolute w-[300px] right-12 bottom-16 border-8 border-white rounded-lg bg-white' animationData={travelJson}></Lottie>
            </div>
           </Fade>

            {/* Right Side Content Section */}
            <div className='space-y-5'>
                <h4 className='text-xl text-gray-700 text-center font-bold'>About The Company</h4>
                <h2 className='text-3xl md:text-5xl font-bold leading-tight'>
                    The Market Leading Visa and immigration <span className='text-orange-600'>Firm</span>
                </h2>
               <Fade>
               <p className='text-gray-600'>
                    We specialize in simplifying visa and immigration processes, offering expert guidance and personalized solutions to individuals and businesses worldwide. With a proven track record of success, we are your trusted partner in navigating global immigration requirements.
                </p>
               </Fade>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {/* Trusted Consultant */}
                    <div>
                        <div className='flex gap-2 items-center'>
                            <span className='bg-orange-500 p-1 rounded-full'>
                                <FaArrowRight className='text-white text-xl' />
                            </span>
                            <p className='text-lg font-bold'>Trusted Consultant</p>
                        </div>
                        <div>
                            <p className='text-gray-700'>
                                Reliable consultants offering expert advice and tailored visa solutions.
                            </p>
                        </div>
                    </div>

                    {/* 100% Approval */}
                    <div>
                        <div className='flex gap-2 items-center'>
                            <span className='bg-orange-500 p-1 rounded-full'>
                                <FaArrowRight className='text-white text-xl' />
                            </span>
                            <p className='text-lg font-bold'>100% Approval</p>
                        </div>
                        <div>
                            <p className='text-gray-700'>
                                Ensuring the highest chance of visa approval with expert guidance.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-5'>
                    {/* CEO Section */}
                   <Fade>
                   <div className="flex items-center gap-5">
                        <div className="ring-orange-600 w-16 rounded-full ring ring-offset-8">
                            <img className='rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                        <div>
                            <p className='text-xl font-bold'>Saiful Islam</p>
                            <p className='text-gray-500'>CEO & Founder</p>
                        </div>
                    </div>
                   </Fade>

                    {/* Explore More Button */}
                   <Slide>
                   <div className="text-center md:text-right">
                        <button className='btn bg-gradient-to-r from-orange-300 to-orange-600 text-white hover:bg-orange-500 '>Explore More</button>
                    </div>
                   </Slide>
                </div>

            </div>
        </div>
    </div>
    </Fade>
  )
}

export default AboutUs;
