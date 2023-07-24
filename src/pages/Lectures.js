import React, { useState, useEffect } from 'react'
import { MdModeEditOutline } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import axios from 'axios'
import { base_url } from '../utils/baseUrl';
const Lectures = () => {
  const [classroom, setClassRoom] = useState('');
  const [getclassrooms, setgetClassrooms] = useState([]);
  const [updateClassroom, setupdateClassroom] = useState("");
  const [updateClassroomvalue, setupdateClassroomvalue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(base_url + '/register_lecture',

        {
          name: classroom
        }
      );

      if (response.status === 201) {

        alert('Lectures register successfully');
        // Reset the form
        setClassRoom('');
        window.location.reload()

      }
    } catch (error) {

      if (error.status === 400) {
        alert("Classroom name already exists")
      } else {
        alert("Something Went Wrong")
      }
      console.error('Error:', error);

    }
  };
  // ==========================================
  const handleDelete = async (classroomId) => {
    try {

      const response = await axios.delete(base_url + `/delete_lecture/${classroomId}`);
      if (response.status === 200) {
        alert('Lecture deleted successfully');
        window.location.reload();
      }


    } catch (error) {
      console.error('Error:', error.response.data.error);
      alert("Something Went Wrong")
    }
  };
  // ===============================================
  const updateFunction = async (id) => {
    try {
      const response = await axios.put(base_url + `/update_lecture/${id}`, { name: updateClassroomvalue });

      alert('Lecture updated successfully');


    } catch (error) {
      console.error('Error:', error.response.data.error);
    }

  }

  // ==================================

  useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        const response = await axios.get(base_url + '/get_lecture');
        setgetClassrooms(response.data);
      } catch (error) {
        console.error('Error:', error.response.data.error);
      }
    };

    fetchClassrooms();
  }, []);
  return (
    <>
      <div className='bg-white p-lg-4 border border-1'>
        <div className='d-flex algin-items-center justify-content-between p-4'>
          <h4>Register Lectures</h4>
          <butt className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registerclassrooms">Add</butt>

        </div>
        <div className='tableWrapper mt-5'>
          <table className="table table-striped">
            <thead className='table-primary'>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Lectures </th>
                <th scope="col" className='text-end'>Edit</th>
                <th scope="col" className='text-end'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {getclassrooms.map((classroom, index) => {
                return (
                  <>
                    <tr key={classroom._id}>
                      <td scope="row">{index + 1}</td>
                      <td>{classroom.name}</td>
                      <td className='text-end'>
                        <button className='btn btn-dark shadow-none' onClick={() => {
                          setupdateClassroom(classroom)
                          setupdateClassroomvalue(classroom.name)
                        }} data-bs-toggle="modal" data-bs-target="#updateclassrooms">
                          <MdModeEditOutline style={{ fontSize: '20px' }} />
                        </button>
                      </td>
                      <td className='text-end'>
                        <button className='btn btn-warning shadow-none text-center text-light' onClick={() => handleDelete(classroom._id)}>
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

      <div class="modal fade" id="registerclassrooms" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header border-none ">
              <h5>Lectures</h5>
              <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form>
              <div className='p-3'>
                <div class="mb-3">
                  <label for="forclassrooms" class="form-label">Enter Lecute</label>
                  <input type="text" required value={classroom}
                    onChange={(e) => setClassRoom(e.target.value)} class="form-control shadow-none" placeholder='8:30 - 10:00' id="forclassrooms" aria-describedby="emailHelp" />
                </div>
                <div className='mb-3 text-end'>
                  <button className='btn btn-primary shadow-none' onClick={handleSubmit}>Register</button>
                </div>
              </div></form>


          </div>
        </div>
      </div>


      {/* ========================Modal for Edit ===========================*/}
      <div class="modal fade" id="updateclassrooms" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header border-none ">
              <h5>Update Lecture</h5>
              <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form>
              <div className='p-3'>
                <div class="mb-3">
                  <label for="forclassrooms" class="form-label">Edit Lectue</label>
                  <input type="text" value={updateClassroomvalue} onChange={(e) => {
                    setupdateClassroomvalue(e.target.value)
                  }}
                    class="form-control shadow-none" placeholder='Information Security Room# 406' id="forclassrooms" aria-describedby="emailHelp" />
                </div>
                <div className='mb-3 text-end'>
                  <button className='btn btn-primary shadow-none' onClick={() => { updateFunction(updateClassroom._id) }}>Register</button>
                </div>
              </div></form>


          </div>
        </div>
      </div>
    </>
  )
}

export default Lectures