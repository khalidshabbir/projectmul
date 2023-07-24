import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  sticky-top " style={{ backgroundColor: "#001628" }}>
        <div className="container">
          <Link className="navbar-brand" to="/"><img src={Logo} alt='imglogo' style={{ width: "50px", height: "50px" }}></img></Link>
          <button className="navbar-toggler shadow-none " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/students_timetable">Student</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/teacher_timetable">Teacher</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">Admin</Link>
              </li>


            </ul>
            <ul className=''>
              <li> <Link to="/contactus">
                <button className='btn btn-primary shadow-none'>Contact us</button>
              </Link> </li>
            </ul>
          </div>
        </div>
      </nav>

    </>

  )
}

export default Navbar