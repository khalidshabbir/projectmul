import React from 'react'
import emailimg from '../assets/email.png'
import axios from 'axios'
import { base_url } from '../utils/baseUrl'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const AccountVerficaiton = () => {
    const navigate=useNavigate()
    const {email}= useParams()
    const {varificaitoncode}= useParams()
    const verficationsubmit=async()=>{
    try{
        const response=await axios .post(base_url+`/account-verify`,{email:email,verify:varificaitoncode})
        if(response.status===201&& response.data.expire==true){
            alert(response.data.message)
            navigate(`/varificaiton_email/${email}`)
        }else{
            alert(response.data.message)
            navigate( `/login`)
        }

    }catch(error){
        alert(error.response.data.message)
    }
    }
    verficationsubmit()
    return (
        <>
            <div className="py-5 d-flex justify-content-center" style={{ background: "#001529", minHeight: "100vh" }}>
                <div className="div-wrapper d-flex align-items-center justify-content-center">
                    <div className="rounded bg-white p-4 p-lg-5  text-center">
                      
                       <img src={emailimg} alt='emailimg' style={{width:"150px", height:"140px"}}></img>
                       <h2 className='mt-3'>Email Verification</h2>

                    </div>
                </div>
            </div>

        </>
    )
}

export default AccountVerficaiton