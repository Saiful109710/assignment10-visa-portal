import React from 'react'
import { Fade } from 'react-awesome-reveal';

const CountryVisa = () => {
  // Array of country data
  const countries = [
    { name: "Australia", flag: "https://i.ibb.co/ydWP6Vp/Australia-Flag.jpg" },
    { name: "Brazil", flag: "https://i.ibb.co/GJBMpTW/brazilflag.png" },
    { name: "Cyprus", flag: "https://i.ibb.co/thsMw2D/cyprus-Flag.jpg" },
    { name: "England", flag: "https://i.ibb.co/s2ssvjf/england-Flag.jpg" },
    { name: "Germany", flag: "https://i.ibb.co/V2Bksn8/germanyflag.png" },
    { name: "Russia", flag: "https://i.ibb.co/J2nnVWw/Russia-Flag.png" }
  ];

  return (
    <Fade>
        <div className='grid md:grid-cols-2 gap-5 px-10 py-20'>
      <div className='space-y-5'>
        <h5 className='text-gray-600 text-lg font-bold'>Countries You Can Visit</h5>
        <h2 className='text-5xl font-bold mb-8'>
          Countries We Support for the <span className='text-orange-500'>Immigration</span>
        </h2>
        <p className='text-gray-600 mb-2'>
          We provide immigration and visa assistance for a wide range of countries worldwide. Our services cover everything from visa applications to legal compliance, ensuring a smooth process. With expert guidance, we make your global relocation simple and stress-free.
        </p>
        <button className='btn bg-gradient-to-r from-orange-300 to-orange-600 text-white'>Explore More</button>
      </div>

      {/* Country Cards */}
      <Fade>
      <div className='grid grid-cols-3 gap-5'>
        {countries.map((country, index) => (
          <div key={index} className='border flex flex-col gap-3 justify-center items-center py-5'>
            <div>
              <img className='w-[70px] sm:w-[100px] rounded-full' src={country.flag} alt={country.name} />
            </div>
            <p className='font-bold sm:text-xl'>{country.name}</p>
          </div>
        ))}
      </div>
      </Fade>
    </div>
    </Fade>
  )
}

export default CountryVisa;
