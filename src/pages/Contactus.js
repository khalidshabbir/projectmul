import React from 'react'
import Hero from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import img from '../assets/banner1.jpg'
import Footer from '../components/Footer'
const Contactus = () => {
  return (
   <>
     <Navbar />
     <Hero img={img} title={"Contact Us"} />
     <Footer/>

   
   </>
  )
}

export default Contactus