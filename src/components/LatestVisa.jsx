import React, { useContext, useEffect, useState } from 'react'
import VisaCard from './VisaCard'
import { Link } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'
import { Fade } from 'react-awesome-reveal'

const LatestVisa = () => {
    const {loading,setLoading} = useContext(AuthContext)
    const [visas,setVisas] = useState([])
    useEffect(()=>{
        setLoading(true)
        fetch('https://visa-navigator-portal-server-chi.vercel.app/latestVisa')
        .then(res=>res.json())
        .then(data=>{
            setVisas(data)
            setLoading(false)
        })
    },[])
  return (
       <section className='py-10 '>
        <h2 className='text-center text-3xl font-bold mb-8 text-gray-800 ' >Latest Visa</h2>
       {
        loading ? (
            <div className='flex justify-center items-center h-screen'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
        ):(
          <Fade>
              <div className='grid sm:grid-cols-2 lg:grid-cols-3  gap-5 max-w-6xl mx-auto'>
            {
                visas.map(visa=><VisaCard key={visa._id} visa={visa}></VisaCard>)
            }
             </div>
          </Fade>
        )

       }

        <div className='mt-8 text-center'>
                <Link to={'/allVisa'}><button className='btn bg-orange-500 hover:bg-orange-700 transition text-white '>See All Visa</button></Link>
        </div>
       </section>
  )
}

export default LatestVisa
