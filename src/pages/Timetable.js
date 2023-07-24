import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { base_url } from '../utils/baseUrl';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  subjectname: Yup.string().required('Subject Name is required'),
  day: Yup.string().required('Day is required'),
  classs: Yup.string().required('Class is required'),
  teacher: Yup.string().required('Teacher is required'),
  room: Yup.string().required('Room is required'),
});

const Timetable = () => {
  const [getteacher, setteacher] = useState([]);
  const [getclass, setclass] = useState([]);
  const [getlecture, setlecture] = useState([]);
  const [getclassroom, setclassroom] = useState([]);
  const [gettimetable,settimetable]=useState([])
  // ================================================
  const [getdayValue,setdayValue]=useState("")
  const [getlectureValue,setlectureValue]=useState("")

  // ============================================
  const [getdisplaylecture,setdisplaylecture]=useState(false)
  const [getdisplayroom,setdisplayroom]=useState(false)

  useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        const response = await axios.get(base_url + '/get_teachers');
        setteacher(response.data);

        const responseclass = await axios.get(base_url + '/get_classes');
        setclass(responseclass.data);

        const responselecture = await axios.get(base_url + '/get_lecture');
        setlecture(responselecture.data);

        const responseclassroom = await axios.get(base_url + '/get_classrooms');
        setclassroom(responseclassroom.data);

        const responsetimetable = await axios.get(base_url + '/get_timetable');
        settimetable(responsetimetable.data);



      } catch (error) {
        alert('Something Went Wrong');
        console.error('Error:', error.response.data.error);
      }
    };

    fetchClassrooms();
  }, []);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(base_url + '/register_timetable', values);

      if (response.status === 201) {
        alert(response.data.message);
        resetForm();
        window.location.reload();
      }
    } catch (error) {
        alert( error.response.data.message)     
    }
  };

  const handleFieldChange = (event, handleChange) => {
    setdayValue(event.target.vlaue)
    handleChange(event); 
    setdisplaylecture(true)
  };
  const handleFieldChangeLecture = (event, handleChange) => {
    setlectureValue(event.target.vlaue)
    handleChange(event); 
    setdisplayroom(true)
    console.log("here")
    // const filteredTimetable = gettimetable.filter(element => element.day == getdayValue && element.lecture == getlectureValue);
    // console.log(filteredTimetable)

  };

  return (
    <>
      <div className="bg-white p-lg-4 p-3 border border-1">
        <div className="">
          <h4>Create Timetable</h4>
          <div className="form-wrapper mt-5">
            <Formik
               onChange
              initialValues={{
                subjectname: '',
                day: '',
                classs: '',
                teacher: '',
                lecture: '',
                room: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
               {({ handleChange }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="exampleInputSubject" className="form-label">
                    Subject Name
                  </label>
                  <Field
                    type="text"
                    id="exampleInputSubject"
                    name="subjectname"
                    className="form-control shadow-none"
                    placeholder="Object Oriented Programming"
                  />
                  <ErrorMessage name="subjectname" component="div" className="text-danger" />
                </div>
             
                <div className="mb-3">
                  <label htmlFor="Select" className="form-label">
                    Select Class
                  </label>
                  <Field as="select" id="Select" name="classs" className="form-select shadow-none">
                    <option value="" disabled>Select Class</option>
                    {getclass.map((objct, index) => (
                      <option key={index} value={objct.name}>{objct.name}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="classs" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="Select" className="form-label">
                    Select Teacher
                  </label>
                  <Field as="select" id="Select" name="teacher" className="form-select shadow-none">
                    <option value="" disabled>Select Teacher</option>
                    {getteacher.map((objct, index) => (
                      <option key={index} value={objct.name}>{objct.name}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="teacher" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="Select" className="form-label">
                    Select Day
                  </label>                 
                   <Field as="select" id="Select" name="day" className="form-select shadow-none" onChange={event => handleFieldChange(event, handleChange)}>
                    <option value="" disabled>Select Day</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </Field>
                  <ErrorMessage name="day" component="div" className="text-danger" />
                </div>
                <div className="mb-3" style={{ display: getdisplaylecture ? 'block' : 'none' }}>
                  <label htmlFor="Select" className="form-label">
                    Select Lecture
                  </label>
                  <Field as="select" id="Select" name="lecture" className="form-select shadow-none" onChange={event => handleFieldChangeLecture(event, handleChange)}>
                    <option value="" disabled>Select Lecture</option>
                    {getlecture.map((objct, index) => (
                      <option key={index} value={objct.name}>{objct.name}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="lecture" component="div" className="text-danger" />
                </div>

                <div className="mb-3" style={{ display: getdisplayroom ? 'block' : 'none' }}>
                  <label htmlFor="Select" className="form-label">
                    Select Room
                  </label>
                  <Field as="select" id="Select" name="room" className="form-select shadow-none">
                    <option value="" disabled>Select Room</option>
                    {getclassroom.map((objct, index) => (
                      <option key={index} value={objct.name}>{objct.name}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="room" component="div" className="text-danger" />
                </div>

                <button type="submit" className="btn btn-primary bt-4 w-100">Submit</button>
              </Form>)}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timetable;
