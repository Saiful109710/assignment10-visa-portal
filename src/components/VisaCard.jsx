import React from 'react'
import { Link } from 'react-router-dom'

const VisaCard = ({visa}) => {
    const {_id,id,countryImage,countryName,fee,applicationMethod,processingTime,validity,visaType} = visa

   
  return (
    <div className='p-5  rounded-xl shadow-md hover:shadow-lg border border-gray-200 transition duration-200 space-y-3'>
        <div>
            <img className='w-full h-56 rounded-lg' src={countryImage} alt="" />
        </div>
        <div>
            <h3 className='text-lg text-gray-700 font-semibold'>Country Name:{countryName}</h3>
            <p className='text-semibold text-gray-600'>Visa Type:{visaType}</p>
            <p className='text-semibold text-gray-600'>Processing Time:{processingTime}</p>
            <p className='text-semibold text-gray-600'>Fee:{fee}</p>
            <p className='text-semibold text-gray-600'>Validity:{validity}</p>
            <p className='text-semibold text-gray-600'>Application Method:{applicationMethod}</p>
        </div>
       <div>
            <Link to={`/visaDetails/${_id}`}><button  className='mt-4 w-full btn bg-orange-500  hover:bg-orange-600 text-white font-medium transition'>See Details</button></Link>
       </div>
    </div>
  )
}

export default VisaCard
