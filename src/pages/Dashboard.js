import React,{useState,useEffect} from "react";
import { BsCalendar3 } from 'react-icons/bs'
import TimetableReport from "../components/Reportable";
import axios from "axios";
import { base_url } from "../utils/baseUrl";
const Dashboard = () => {
  const [gettimetable,setTimetable]=useState([])
  const [getteacher,setteacher]=useState("")
  const [getclass,setclass]=useState("")
  const [getclassroom,setclassroom]=useState("")
  useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        const response = await axios.get(base_url + '/get_timetable');
        setTimetable(response.data);
        const response1 = await axios.get(base_url + '/get_teachers');
        setteacher(response1.data);

        const responseclass = await axios.get(base_url + '/get_classes');
        setclass(responseclass.data);


        const responseclassroom = await axios.get(base_url + '/get_classrooms');
        setclassroom(responseclassroom.data);
       
      } catch (error) {
        console.error('Error:', error.response.data.error);
      }
    };

    fetchClassrooms();
  }, []);
  return (
    <div className="dashboardclass">
      <div>
        <h5>Dashboard</h5>
      </div>
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 p-3 ">
            <div className="bg-white border border-1 p-3 rounded">
              <div className="d-flex flex-column">
                <div className="divtop d-flex align-items-center justify-content-between">
                  <div className="iconwrapper p-2 rounded-circle  d-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "#00BC29" }}>
                    <BsCalendar3 className="text-light" style={{ fontSize: "30px" }} />
                  </div>
                  <div className="d-flex flex-column align-items-end ">
                    <p className="m-0 p-0" style={{ fontSize: '18px' }}>Total timetables</p>
                    <h6 className="m-0 p-0" style={{ fontSize: '18px' }}>{gettimetable.length}</h6>
                  </div>
                </div>
                <div class="progress mt-4" style={{height:"5px"}}>
                  <div class="progress-bar " role="progressbar" style={{width: "100%",background: "#00BC29" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 p-3 ">
            <div className="bg-white border border-1 p-3 rounded">
              <div className="d-flex flex-column">
                <div className="divtop d-flex align-items-center justify-content-between">
                  <div className="iconwrapper p-2 rounded-circle  d-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "#FF8042" }}>
                    <BsCalendar3 className="text-light" style={{ fontSize: "30px" }} />
                  </div>
                  <div className="d-flex flex-column align-items-end ">
                    <p className="m-0 p-0" style={{ fontSize: '18px' }}>Total Classes</p>
                    <h6 className="m-0 p-0" style={{ fontSize: '18px' }}>{getclass.length}</h6>
                  </div>
                </div>
                <div class="progress mt-4" style={{height:"5px"}}>
                  <div class="progress-bar " role="progressbar" style={{width: "100%",background: "#FF8042" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 p-3 ">
            <div className="bg-white border border-1 p-3 rounded">
              <div className="d-flex flex-column">
                <div className="divtop d-flex align-items-center justify-content-between">
                  <div className="iconwrapper p-2 rounded-circle  d-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "#0088FE" }}>
                    <BsCalendar3 className="text-light" style={{ fontSize: "30px" }} />
                  </div>
                  <div className="d-flex flex-column align-items-end ">
                    <p className="m-0 p-0" style={{ fontSize: '18px' }}>Total Teachers</p>
                    <h6 className="m-0 p-0" style={{ fontSize: '18px' }}>{getteacher.length}</h6>
                  </div>
                </div>
                <div class="progress mt-4" style={{height:"5px"}}>
                  <div class="progress-bar " role="progressbar" style={{width: "100%",background: "#0088FE" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 p-3 ">
            <div className="bg-white border border-1 p-3 rounded">
              <div className="d-flex flex-column">
                <div className="divtop d-flex align-items-center justify-content-between">
                  <div className="iconwrapper p-2 rounded-circle  d-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", background: "#FFBB28" }}>
                    <BsCalendar3 className="text-light" style={{ fontSize: "30px" }} />
                  </div>
                  <div className="d-flex flex-column align-items-end ">
                    <p className="m-0 p-0" style={{ fontSize: '18px' }}>Total Rooms</p>
                    <h6 className="m-0 p-0" style={{ fontSize: '18px' }}>{getclassroom.length}</h6>
                  </div>
                </div>
                <div class="progress mt-4" style={{height:"5px"}}>
                  <div class="progress-bar " role="progressbar" style={{width: "100%",background: "#FFBB28" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tablewrapper mt-5">
        <TimetableReport data={false}/>
      </div>

     </div>


  );
};

export default Dashboard;
