import React from 'react'
import CountUp from "react-countup";
import 'animate.css';
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { Fade } from 'react-awesome-reveal';

const Count = () => {
  return (
    <div className='relative'>
        {/* Top Section with Heading and Buttons */}
        <Fade cascade>
        <div className='bg-slate-300 pt-[400px] sm:pt-[200px] px-4 md:px-10 pb-16 space-y-10 grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='space-y-10'>
                <div>
                    <h2 className='text-3xl md:text-5xl font-bold text-center md:text-left'>
                        We counsel students to get study visas
                    </h2>
                </div>
                <div className='flex justify-center md:justify-start gap-5'>
                    <button className='btn bg-orange-400 text-white'>Explore More</button>
                    <button className='btn bg-white'>Contact Now</button>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <span className='bg-orange-500 p-6 rounded-full'>
                    <SiGoogledisplayandvideo360 className='text-5xl text-white' />
                </span>
            </div>
        </div>
        </Fade>

        {/* Stats Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4 sm:px-10 py-16 bg-white rounded-full opacity-95 absolute -top-32 w-[80%] sm:w-[85%] md:w-[95%] left-10 sm:left-12 md:left-8 '>
            <div className='flex justify-center flex-col items-center'>
                <h3 className='text-orange-500 text-4xl md:text-5xl font-bold'>
                    <CountUp end={500} duration={3} />
                </h3>
                <p className='text-xl'>Visa Process</p>
            </div>
            <div className='flex justify-center flex-col items-center'>
                <h3 className='text-orange-500 text-4xl md:text-5xl font-bold'>
                    <CountUp end={480} duration={3} />
                </h3>
                <p className='text-xl'>Success Story</p>
            </div>
            <div className='flex justify-center flex-col items-center'>
                <h3 className='text-orange-500 text-4xl md:text-5xl font-bold'>
                    <CountUp end={620} duration={3} />
                </h3>
                <p className='text-xl'>Team Members</p>
            </div>
            <div className='flex justify-center flex-col items-center'>
                <h3 className='text-orange-500 text-4xl md:text-5xl font-bold'>
                    <CountUp end={970} duration={3} />
                </h3>
                <p className='text-xl'>Happy Clients</p>
            </div>
        </div>
    </div>
  )
}

export default Count;
