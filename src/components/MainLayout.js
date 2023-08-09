import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineDashboard,
} from "react-icons/ai";
import {BsCalendar3} from 'react-icons/bs'
import {IoFileTrayFullOutline} from 'react-icons/io5'
import {AiFillSetting} from 'react-icons/ai'
import { RiCouponLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import {SiGoogleclassroom} from 'react-icons/si'
import {BiTimeFive} from 'react-icons/bi'
import Avatar from '@mui/material/Avatar';
import Logo from '../assets/logo.png'
import{BiLogOutCircle} from 'react-icons/bi'
import {Link} from 'react-router-dom'
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    window.location.reload()
  }
  return (
    <Layout >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <div className="text-white fs-5 text-center py-2 mb-0 px-2 ">
            <div className="sm-logo"><img src={Logo} alt="img" style={{width:"50px",height:"50px"}}/></div>
            <div className="lg-logo px-2">
              <div className="d-flex align-items-center ">
              <img src={Logo} alt="img" style={{width:"50px",height:"50px"}}/>
              <div className="d-flex flex-column align-items-start">
              <h2 className="fw-bold text-uppercase ms-2 mb-0" style={{fontSize:"16px"}}>Minhaj</h2>
              <h2 className="fw-bold text-uppercase ms-2 mb-0" style={{fontSize:"16px"}}>University</h2>
              </div>
              </div>
            </div>
          </div>
        </div>
        <Menu
        className="mt-3"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "",
              icon: <RiCouponLine className="fs-4" />,
              label: "Register",
              children: [
                {
                  key: "register_classrooms",
                  icon: <RiCouponLine className="fs-4" />,
                  label: "ClassRooms",
                },
                {
                  key: "register_teachers",
                  icon: <ImBlog className="fs-4" />,
                  label: "Teacher",
                },
                
                
                {
                  key: "register_sections",
                  icon: <SiGoogleclassroom className="fs-4" />,
                  label: "Classess",
                },
                
                
                {
                  key: "register_lectures",
                  icon: <BiTimeFive className="fs-4" />,
                  label: "Lectures",
                },
              ],
            },
            {
              key: "timetable",
              icon: <BsCalendar3 className="fs-4" />,
              label: "Timetable",
            
            }
            ,
            {
              key: "timetab_report",
              icon: <IoFileTrayFullOutline className="fs-4" />,
              label: "Timetable Report",
            },
            ,
            {
              key: "profile_settings",
              icon: <AiFillSetting className="fs-4" />,
              label: "Setting",
            },
            
          ]}
        />
      </Sider>
      <Layout className="">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div className="d-flex align-items-center">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
           <Link className="text-decoration-none" to="/"><h6 className="text-dark m-0 p-0 ">Home</h6></Link></div>
          <div className="d-flex gap-4 align-items-center">
           
            <BiLogOutCircle className="" onClick={handleLogout} style={{fontSize:"24px",cursor:"pointer"}}/>
            <div className="d-flex gap-3 align-items-center dropdown ">
            <Avatar alt="" src="" />
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
