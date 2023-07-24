import React, { useState, useEffect } from 'react'
import Hero from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import img from '../assets/banner1.jpg'
import Footer from '../components/Footer'
import axios from 'axios'
import { base_url } from '../utils/baseUrl'
import generatePDF from "../components/ReportPdf";
const TeacherTimetable = () => {
    const [getclass, setclass] = useState([])
    const [gettimetable, settimetable] = useState(null)
    const [getclassvalue, setclassvalue] = useState("")
    const [getdayvalue, setdayvalue] = useState("")
    const [getteachers, setteachers] = useState("")
    useEffect(() => {
        const fetchClassrooms = async () => {
            try {

                const responseclass = await axios.get(base_url + '/get_teachers');
                setclass(responseclass.data);

            } catch (error) {
                alert('Something Went Wrong');
                console.error('Error:', error.response.data.error);
            }
        };

        fetchClassrooms();
    }, []);

    const handlesearch = async () => {


        try {
            const response = await axios.get(base_url + `/get_timetable_teacher/${getdayvalue}/${getclassvalue}`);

            settimetable(response.data);
        } catch (error) {
            console.error('Error fetching timetable:', error);
            settimetable(null);
        }

    };
    const handlechangeDay = (event) => {

        setdayvalue(event.target.value)
    }
    const handlechangeSection = (event) => {
        setclassvalue(event.target.value)
    }

    const handlechangeTeacher=async(e)=>{
    
        try {
          
            const response = await axios.get(base_url + `/get_timetable_teachertimetable/${getclassvalue}`);
            generatePDF(response.data)
          } catch (error) {
      
            alert(error.response.data.message)
          }
  
    }

    return (
        <>
            <Navbar />
            <Hero img={img} title={"Teacher Timetable"} />
            <section className='container'>
                <div className='mx-lg-5 p-5 '>
                    <h4 className='text-center mb-5'>Teacher Timetable</h4>
                    <div className='mx-lg-5 p-lg-5 p-3 shadow'>
                        <div className='mb-3'>
                            <select class="form-select shadow-none" aria-label="Default select example" onChange={handlechangeSection}>
                                <option selected disabled>Select your Teacher</option>
                                {getclass.map((objct, index) => (
                                    <option key={index} value={objct.name}>{objct.name}</option>
                                ))}

                            </select>
                        </div>
                        <div className='mb-3'>
                            <select class="form-select shadow-none" aria-label="Default select example" onChange={handlechangeDay}>

                                <option value="" >Select Day</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <button className='btn btn-primary w-100 shadow-none' onClick={handlesearch}>Search</button>
                        </div>

                    </div>
                    {gettimetable ? <div className='mt-3'>

                        {gettimetable ? <div className='btn-wrapper text-end me-5'><button className='btn btn-primary shadow-none' onClick={handlechangeTeacher}>Print</button></div> : <div></div>}

                        <div className='row px-5'>
                            {
                                gettimetable?.map((element) => {
                                    return (
                                        <>
                                            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 p-3'>
                                                <div className='border rounded p-4'>
                                                    <h6>{element.subjectname}</h6>
                                                    <p>{element.teacher}</p>
                                                    <div className='bg-secondary p-2 text-center rounded-5 d-flex justify-content-center'> <h6 className='text-light m-0'>{element.room}</h6></div>
                                                    <p className='mt-3'>{element.classs}</p>
                                                    <div className='d-flex align-items-center justify-content-between'> <p>{element.day}</p>
                                                        <p>{element.lecture}</p> </div>
                                                </div>
                                            </div>

                                        </>
                                    )
                                })
                            }

                        </div>
                    </div> : <div></div>}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default TeacherTimetable