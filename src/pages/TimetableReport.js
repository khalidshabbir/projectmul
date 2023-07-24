import React, { useState, useEffect } from 'react'
import { ImPrinter } from 'react-icons/im'
import axios from 'axios'
import { base_url } from '../utils/baseUrl'
import { MdModeEditOutline } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import generatePDF from "../components/ReportPdf";
const TimetableReport = () => {
  const [gettimetable, setTimetable] = useState([])
  useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        const response = await axios.get(base_url + '/get_timetable');
        setTimetable(response.data);
      } catch (error) {
        console.error('Error:', error.response.data.error);
      }
    };

    fetchClassrooms();
  }, []);
  const handleDelete = async (id) => {
    try {

      const response = await axios.delete(base_url + `/delete_timetable/${id}`);
      if (response.status === 200) {
        alert('Timetable deleted successfully');
        window.location.reload();
      }


    } catch (error) {
      console.error('Error:', error.response.data.error);
      alert("Something Went Wrong")
    }
  };
  const [getclass, setclass] = useState([])
  const [getteacher, setteacher] = useState([])
  useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        const response = await axios.get(base_url + '/get_teachers');
        setteacher(response.data);

        const responseclass = await axios.get(base_url + '/get_classes');
        setclass(responseclass.data);

      } catch (error) {
        alert('Something Went Wrong');
        console.error('Error:', error.response.data.error);
      }
    };

    fetchClassrooms();
  }, []);

  const handlechangeSection = async (e) => {
    try {
      const classs = e.target.value
      const response = await axios.get(base_url + `/get_timetable_studentstimetable/${classs}`);

      setTimetable(response.data)
    } catch (error) {

      alert(error.response.data.message)
    }
  }
  const handlechangeTeacher = async (e) => {
    try {
      const teacher = e.target.value
      const response = await axios.get(base_url + `/get_timetable_teachertimetable/${teacher}`);

      setTimetable(response.data)
    } catch (error) {

      alert(error.response.data.message)
    }
  }

  return (
    <>
      <div className='bg-white p-lg-4 border border-1'>
        <div className='d-flex algin-items-center justify-content-between p-4'>
          <h4>Register Classes</h4>
        </div>
        <div className='search filter wrapper d-flex align-items-center justify-content-between'>
          <select class="form-select shadow-none me-3" aria-label="Default select example" onChange={handlechangeSection}>
            <option selected disabled>Select your Section Name</option>
            {getclass.map((objct, index) => (
              <option key={index} value={objct.name}>{objct.name}</option>
            ))}

          </select>
          <select class="form-select shadow-none" aria-label="Default select example" onChange={handlechangeTeacher}>
            <option selected disabled>Select Teacher Name</option>
            {getteacher.map((objct, index) => (
              <option key={index} value={objct.name}>{objct.name}</option>
            ))}

          </select>
        </div>
        <div className='tableWrapper mt-5'>
          <div className='d-flex align-items-center justify-content-end'>
            <button className='btn btn-primary me-3' onClick={() => { window.location.reload() }}>Clear Filter</button>
            <button className='btn btn-success my-3 shadow-none px-4' onClick={() => generatePDF(gettimetable)} >
              <ImPrinter />
            </button>
          </div>

          <table className="table table-striped">
            <thead className='table-dark'>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Subject Name</th>
                <th scope="col">Teacher</th>
                <th scope="col">Class</th>
                <th scope="col">Day</th>
                <th scope="col">Lecture</th>
                <th scope="col">Room</th>
                {/* <th scope="col" className='text-end'>Edit</th> */}
                <th scope="col" className='text-end'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {gettimetable.map((timetableobj, index) => {
                return (
                  <>
                    <tr key={timetableobj._id}>
                      <td scope="row">{index + 1}</td>
                      <td>{timetableobj.subjectname}</td>
                      <td>{timetableobj.teacher}</td>
                      <td>{timetableobj.classs}</td>
                      <td>{timetableobj.day}</td>
                      <td>{timetableobj.lecture}</td>
                      <td>{timetableobj.room}</td>
                      {/* <td className='text-end'>
                      <button className='btn btn-dark shadow-none' onClick={() => {
                        
                      }} data-bs-toggle="modal" data-bs-target="#updateclassrooms">
                        <MdModeEditOutline style={{ fontSize: '20px' }} />
                      </button>
                    </td> */}
                      <td className='text-end'>
                        <button className='btn btn-warning shadow-none text-center text-light' onClick={() => { handleDelete(timetableobj._id) }}>
                          <MdDelete style={{ fontSize: '20px' }} />
                        </button>
                      </td>
                    </tr>

                  </>
                )
              })}
            </tbody>
          </table>

        </div>
      </div>


      {/* ===================Modal Add================================ */}

      {/* ========================Modal for Edit ===========================*/}
      <div class="modal fade" id="updateclassrooms" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header border-none ">
              <h5>Update ClassRooms</h5>
              <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form>
            </form>


          </div>
        </div>
      </div>
    </>
  )
}

export default TimetableReport