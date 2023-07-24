import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios'
import {base_url} from '../utils/baseUrl'

const ForgotPassword = () => {
  const navigate=useNavigate()
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: async (values) => {
     try{
      const email=values.email;
        const response= await axios.post( base_url+`/account_verified_forgetPassword`,{email})
        if(response.status===201){
          alert(response.data.message)
          navigate(`/varificaiton_email/${email}`)
        }
     }catch(error){
      alert(error.response.data.message)
     }
    },
  });

  return (
    <div className="py-5 d-flex justify-content-center" style={{ background: "#001529", minHeight: "100vh" }}>
      <div className="div-wrapper d-flex align-items-center justify-content-center">
        <div className="rounded bg-white p-4 p-lg-5">
          <h3 className="mb-3">Forgot Password</h3>
          <p>Enter the email address associated with your account, and we will send you a link to reset your password</p>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control shadow-none ${formik.touched.email && formik.errors.email ? "is-invalid" : ""}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                aria-describedby="emailHelp"
              />
              {formik.touched.email && formik.errors.email && <div className="invalid-feedback">{formik.errors.email}</div>}
            </div>
            <div>
              <button type="submit" className="btn btn-primary w-100 shadow-none">Continue</button>
            </div>
          </form>
          <div className="mt-3">
            <p>Don't have an account? <Link className="ms-3 text-decoration-none" to="/signup">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
