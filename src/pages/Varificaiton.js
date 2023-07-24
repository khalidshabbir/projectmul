import React from 'react'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../utils/baseUrl';
const Varificaiton = () => {
    let {email } =  useParams();
    const handleresendEmail=async()=>{
        try{

              const response= await axios.post( base_url+`/resend`,{email})
              if(response.status===201){
                alert(response.data.message)
               
              }
           }catch(error){
            alert(error.response.data.message)
           }
    }
    return (
        <>
            <div className="py-5 d-flex justify-content-center" style={{ background: "#001529", minHeight: "100vh" }}>
                <div className="div-wrapper d-flex align-items-center justify-content-center">
                    <div className="rounded bg-white p-4 p-lg-5 ">
                        <div className='p-3 rounded-circle d-flex align-items-center justify-content-center mx-auto' style={{ background: "#001529", width: "100px", height: "100px" }}>
                            <MdEmail className='text-light' style={{ fontSize: "60px" }} />
                        </div>
                        <div className='text-center mt-4'>
                            <h2 className='mt-3'>Verify your email address</h2>
                            <p className='mt-2'>We have a verification link to your email</p>
                            <p className='mt-4'>Click on the link to complete the verification process.</p>
                            <p>You might need to <b> check your Spam folder</b></p>

                            <div className='d-flex algin-items-center justify-content-between mt-5'>
                                <button className='btn btn-success px-3 px-lg-4  me-3 shadow-none' onClick={handleresendEmail}>Resend Email</button>
                                <Link className="text-decoration-none" to="/login"> <button className='btn btn-primary px-3 px-lg-5  me-3 shadow-none'>Sign In</button></Link>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Varificaiton