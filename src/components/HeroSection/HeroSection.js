import React from 'react'
import "./HeroSection.css"
import { NavLink } from 'react-router-dom'
import {AiFillHome} from "react-icons/ai"
const HeroSection = (props) => {
    const { title, img } = props;
  return (
   <>
     <div className="bg-fixed text-light shadow_hero " style={{ backgroundImage: `url(${img})`, width:"100%",  height: "500px", backgroundAttachment: "fixed", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-12 d-flex flex-column align-items-center justify-content-center">
                            <h1 className="text-center " >{title}</h1>
                            <ul className="breadcrumb d-flex justify-content-center">
                                <li className='text-white me-2'><NavLink className="text-white me-2 d-flex align-items-center" to="/"><AiFillHome className='me-3'/> Home</NavLink></li>
                                <li className="active me-2">/</li>
                                <li className="active me-2">{title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
   </>
  )
}

export default HeroSection