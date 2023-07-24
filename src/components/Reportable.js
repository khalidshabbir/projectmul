import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { base_url } from '../utils/baseUrl'
import { MdModeEditOutline } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import {ImPrinter} from 'react-icons/im'
const Reportable = (props) => {
    const getbtn = props.data;
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
    // ===================================================
    const handleDelete = async (Id) => {
        try {

            const response = await axios.delete(base_url + `/delete_timetable/${Id}`);
            if (response.status === 200) {
                alert('Record deleted successfully');
                window.location.reload();
            }


        } catch (error) {
            console.error('Error:', error.response.data.error);
            alert("Something Went Wrong")
        }
    };
    // ===============================================
    //   const updateFunction = async (id) => {
    //     try {
    //       const response = await axios.put(base_url + `/update_classes/${id}`, { name: updateClassroomvalue });

    //       alert('Record updated successfully');


    //     } catch (error) {
    //       console.error('Error:', error.response.data.error);
    //     }

    //   }



    return (
        <>
            <div className=''>
            
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
                            {/* {getbtn?  <th scope="col" className='text-end'>Edit</th>:<div className='pb-3'></div> } */}
                            {getbtn ? <th scope="col" className='text-end'>Delete</th> : <div className='pb-5'></div>}
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
                                        {/* {
                        getbtn?<td className='text-end'>
                        <button className='btn btn-dark shadow-none'  data-bs-toggle="modal" data-bs-target="#updateclassrooms">
                          <MdModeEditOutline style={{ fontSize: '20px' }} />
                        </button>
                      </td>:<div></div>
                    } */}
                                        {
                                            getbtn ? <td className='text-end '>
                                                <button className='btn btn-warning shadow-none text-center text-light' onClick={() => handleDelete(timetableobj._id)}>
                                                    <MdDelete style={{ fontSize: '20px' }} />
                                                </button>
                                            </td> : <div className='pb-5'></div>
                                        }

                                    </tr>

                                </>
                            )
                        })}
                    </tbody>
                </table></div>
        </>
    )
}

export default Reportable