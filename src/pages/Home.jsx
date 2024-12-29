import React, { useState } from 'react'
import Banner from '../components/Banner'
import LatestVisa from '../components/LatestVisa'
import AboutUs from '../components/AboutUs'
import Count from '../components/Count'
import CountryVisa from '../components/CountryVisa'

import Faq from '../components/Faq'
import { Helmet } from 'react-helmet'

const Home = () => {


  return (
    <div className=''>
        <Helmet>
              <title>Visa Navigator Portal </title>
          </Helmet>
      
        <Banner></Banner>
        <LatestVisa></LatestVisa>
        <AboutUs></AboutUs>
        <Count></Count>
        <CountryVisa></CountryVisa>
        <Faq></Faq>


    </div>
  )
}

export default Home
