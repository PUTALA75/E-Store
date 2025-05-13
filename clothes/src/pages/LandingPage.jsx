import React from 'react'
import Navbar from '../components/Navbar'

import Jewelery from '../components/Jewelery'
import MenClothing from '../components/MenClothing'
import WomenClothing from '../components/Receipe'
import Electronics from '../components/Electronics'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <WomenClothing/>
        <Electronics/>
        <MenClothing/>
        <Jewelery/>
       
    </div>
  ) 
}

export default LandingPage