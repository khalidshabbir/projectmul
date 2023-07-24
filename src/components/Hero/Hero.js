import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../../assets/herobanner1.jpg"
import banner2 from "../../assets/herobanner2.jpg"
import banner3 from "../../assets/herobanner3.jpg"
import "./Hero.css"
const Hero = () => {
    return (
        <>
            <Carousel className='carousel' fade controls={false} prevIcon={null} nextIcon={null} prevLabel="" nextLabel="" pause={true} interval={10000} indicators={true}>
                <Carousel.Item className='carousel_Item '>
                    <img
                        className="d-block "
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='caption_left_center '>
                        <h1 className=' caption_heading'>Experience & Expertise</h1>
                        <div className='mt-4 captiontext'>
                            <p className='mt-4 caption_text caption_wrapped' >Comprehensive financial advice and financial services
                                that are tailored to meet your individual needs</p>
                        </div>

                        <div className='d-flex align-items-center mt-5'>
                            <button className='btn btn-primary  me-4'>Our Services</button>
                            <button className='btn btn-secondary '>Our Services</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel_Item'>
                    <img
                        className="d-block "
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='caption_left_center '>
                        <h1 className=' caption_heading'>Experience & Expertise</h1>
                        <div className='w-100 w-50-lg'>
                            <p className='mt-4 caption_text caption_wrapped' >Comprehensive financial advice and financial services
                                that are tailored to meet your individual needs</p>
                        </div>

                        <div className='d-flex align-items-center mt-5'>
                            <button className='btn btn-primary me-4'>Our Services</button>
                            <button className='btn btn-secondary'>Our Services</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel_Item'>
                    <img
                        className="d-block "
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='caption_left_center '>
                        <h1 className=' caption_heading'>Experience & Expertise</h1>
                        <div className='w-100 w-50-lg'>
                            <p className='mt-4 caption_text caption_wrapped' >Comprehensive financial advice and financial services
                                that are tailored to meet your individual needs</p>
                        </div>
                        <div className='d-flex align-items-center mt-5'>
                            <button className='btn btn-primary me-4'>Our Services</button>
                            <button className='btn btn-secondary'>Our Services</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    )
}

export default Hero