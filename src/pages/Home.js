import React from 'react'
import Hero from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import img from '../assets/banner1.jpg'
import Footer from '../components/Footer'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { MdPeople } from 'react-icons/md'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <Navbar />
            <Hero img={img} title={"Welcome to Timetable"} />

            {/* ============================================================= */}
            <div className='' style={{backgroundColor:"#f2f2f2"}}>
                <div className='container text-center mt-5  w-sm-25 w-md-25  p-5  ' >
                    <h4>About us</h4>
                    <p>MUL was founded in 1986 by Shaykh-ul-Islam Prof. Dr M. Tahir-ul-Qadri, patron-in-chief of Minhaj ul Quran International. Degree awarding status was granted by Govt. of the Punjab. The HEC of Pakistan has also recognized MUL, as ‘W3‘ ranking University.</p>
                </div>
            </div>
            {/* ================================================================ */}
            <Footer />
        </>
    )
}

export default Home