import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Resetpassword from "./pages/Resetpassword";
import Forgotpassword from "./pages/Forgotpassword";
import MainLayout from "./components/MainLayout";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Rooms from "./pages/Rooms";
import Teachers from "./pages/Teachers";
import Classess from "./pages/Classess";
import Lectures from "./pages/Lectures"
import Timetable from './pages/Timetable'
import TimetableReport from "./pages/TimetableReport";
import Settings  from "./pages/Settings";
import Signup from "./pages/Signup";
import Private from './components/ProtactedRoutes'
import Home from './pages/Home'
import StudentTimetable from './pages/StudentsTimetable'
import TeacherTimetable from "./pages/TeacherTimetable";
import Contactus from "./pages/Contactus";
import Varificaiton from "./pages/Varificaiton";
import AccountVerficaiton from "./pages/AccountVerficaiton";
function App() {
  return (
    <Router>
      <Routes>


        <Route exact  path="/" element={<Home />} />
        <Route exact  path="/students_timetable" element={<StudentTimetable />} />
        <Route exact  path="/teacher_timetable" element={<TeacherTimetable/>} />
        <Route exact  path="/contactus" element={<Contactus />} />
        <Route exact  path="/login" element={<Login />} />
        <Route exact  path="/signup" element={<Signup/>} />
        <Route exact  path="/varificaiton_email/:email" element={<Varificaiton/>} />
        <Route exact  path="/account-verified/:email/:varificaitoncode" element={<AccountVerficaiton/>} />
        <Route  exact path="/reset-password/:email/:verification" element={<Resetpassword />} />
        <Route  exact path="/forgot-password" element={<Forgotpassword />} />
        <Route  exact path="/admin" element={<Private><MainLayout /></Private>}>
          <Route index element={<Dashboard />} />
          <Route path="register_classrooms" element={<Rooms />} />
          <Route path="register_teachers" element={<Teachers />} />
          <Route path="register_sections" element={<Classess />} />
          <Route path="register_lectures" element={<Lectures />} />
          {/* ================================================s */}
          <Route path="timetable" element={<Timetable />} />
          <Route path="timetab_report" element={<TimetableReport />} />
          <Route path="profile_settings" element={<Settings />} />
         
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
