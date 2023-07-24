import React from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import {BsWhatsapp} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {GoMail} from "react-icons/go"
const Footer = () => {
  return (
    <div className='container-fluid  ' style={{backgroundColor:"#011528"}}>
        <div className='container'>
            <div className='row d-flex algin-items-center pt-5'>
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 p-4 '>
                 <div className='logowraper  d-flex align-items-center'>
                    <img src={Logo} alt='imglog' style={{width:"80px",height:"80px"}}></img>
                    <div className='d-flex flex-column align-items-start ms-3'>
                        <h4 className='text-light mt-3'>Minhaj University</h4>
                        <h4 className='text-light '>Lahore</h4>
                      
                    </div>
                 </div>
                 <p className='text-light mt-3'>
                 MUL was founded in 1986 by Shaykh-ul-Islam Prof. Dr M. Tahir-ul-Qadri, patron-in-chief of Minhaj ul Quran International. Degree awarding status was granted by Govt. of the Punjab. The HEC of Pakistan has also recognized MUL, as ‘W3‘ ranking University.
                 </p>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 p-4 d-flex justify-content-center '>
                <div className='links'>
                  <h4 className='text-light'>
                    Links
                  </h4>
                  <div className='mt-3'>
                  <div>
                    <Link className='text-light text-decoration-none' to="/"><p>Home</p></Link>
                  </div>
                  <div>
                    <Link className='text-light text-decoration-none' to="/students_timetable"><p>Students</p></Link>
                  </div>
                  <div>
                    <Link className='text-light text-decoration-none' to="/teacher_timetable"><p>Teachers</p></Link>
                  </div>
                  <div>
                    <Link className='text-light text-decoration-none' to="/contactus"><p>Contactus</p></Link>
                  </div>
                  <div>
                    <Link className='text-light text-decoration-none' to="/admin"><p>Admin</p></Link>
                  </div>
                  </div>
                
                </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 p-4 d-flex justify-content-center '>
                <div className='links'>
                  <h4 className='text-light'>
                    Socials
                  </h4>
                  <div className='mt-3'>
                <div className='social_icons text-light'>
                  <a className='text-light me-3' target='blank' href='https://wa.me/923124832909'><BsWhatsapp style={{fontSize:"24px"}}/></a> 
                  <a className='text-light me-3'  href='https://mail.google.com/mail/?view=cm&to=softaligns@gmail.com'><GoMail style={{fontSize:"28px"}}/></a> 
                   
                </div>
                  </div>
                
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer