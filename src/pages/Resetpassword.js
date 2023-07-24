import React from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom';
import { useFormik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import { base_url } from '../utils/baseUrl';

const Resetpassword = () => {
  const navigate=useNavigate();
  const {email,verification}=useParams()
  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .required('New Password is required')
      .min(6, 'New Password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });
  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try{
          
         const response= await axios.post( base_url+`/resetPassword/${email}/${verification}`,{password:values.newPassword})
         if(response.status===201){
           alert(response.data.message)
           navigate(`/login`)
         }
      }catch(error){
       alert(error.response.data.message)
      }
     },
   });


  return (
    <>
      <div className="py-5 d-flex justify-content-center" style={{ background: "#001529", minHeight: "100vh" }}>
        <div className="div-wrapper d-flex align-items-center justify-content-center">
          <div className="rounded bg-white p-4 p-lg-5">
            <h3 className="mb-3">Reset Password</h3>
            <p>Enter your new password and confirm it below:</p>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  className={`form-control shadow-none ${formik.touched.newPassword && formik.errors.newPassword ? "is-invalid" : ""}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.newPassword}
                />
                {formik.touched.newPassword && formik.errors.newPassword && <div className="invalid-feedback">{formik.errors.newPassword}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className={`form-control shadow-none ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "is-invalid" : ""}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="invalid-feedback">{formik.errors.confirmPassword}</div>}
              </div>
              <div>
                <button type="submit" className="btn btn-primary w-100 shadow-none">Reset Password</button>
              </div>
              <div className='mt-3'>
                <Link className='text-decoration-none' to="/login">Sign In</Link>
              </div>
            </form>

          </div>
        </div>
      </div>

    </>
  )
}

export default Resetpassword