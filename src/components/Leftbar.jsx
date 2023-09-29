import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const Leftbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showAdmin, setShowAdmin] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setShowAdmin(!showAdmin);
  };

  const menuList = [
    {
      title: "Dashboard",
      icon: <HomeOutlinedIcon />,
      link: "/",
    },
    {
      title: "Users",
      icon: <PeopleOutlinedIcon />,
      link: "/users",
    },
    {
      title: "Contacts Information",
      icon: <ContactsOutlinedIcon />,
      link: "/contact&information",
    },
    {
      title: "Invoices Balances",
      icon: <ReceiptOutlinedIcon />,
      link: "/invoices&Balances",
    },
    {
      title: "Profile Form",
      icon: <PersonOutlinedIcon />,
      link: "/profile&Form",
    },
    {
      title: "Calender",
      icon: <CalendarTodayOutlinedIcon />,
      link: "/calender",
    },
    {
      title: "FAQ Page",
      icon: <HelpOutlineOutlinedIcon />,
      link: "/faq&page",
    },
    {
      title: "Bar Chart",
      icon: <BarChartOutlinedIcon />,
      link: "/bar&Chart",
    },
    {
      title: "Pie Chart",
      icon: <PieChartOutlineOutlinedIcon />,
      link: "/pie&Chart",
    },
    {
      title: "Line Chart",
      icon: <TimelineOutlinedIcon />,
      link: "/line&Chart",
    },
  ];
  // --------------------------------------------

  return (
    <div className="h-screen bg-[#1a2233] ">
      <div
        className={
          isSidebarOpen === true
            ? "w-[250px] h-screen transition-all duration-300 delay-75 ease-linear text-white"
            : "w-[100px] h-screen transition-all duration-300 delay-75 ease-linear text-white"
        }
      >
        <Box
          className={
            isSidebarOpen === true
              ? "w-[250px] transition-all duration-300 delay-75 ease-linear flex justify-between border-b border-gray-600 px-[20px] py-4"
              : "w-[100px]  transition-all duration-300 delay-75 ease-linear flex justify-center items-center border-b border-gray-600 py-4"
          }
        >
          {showAdmin && (
            <h3 className="text-xl text-green-700 font-bold">ADMIN</h3>
          )}

          <Typography className="transition-all duration-500 delay-75 ease-linear">
            <MenuOutlinedIcon
              style={{ fontSize: "30px" }}
              className="cursor-pointer"
              onClick={() => {
                toggleSidebar();
              }}
            />
          </Typography>
        </Box>
        <Box>
          <ul>
            <li
              className={
                !isSidebarOpen &&
                "transition-all duration-300 delay-75 ease-linear"
              }
            >
              {menuList.map((menu, index) => (
                <NavLink
                  to={menu.link}
                  style={({ isActive }) => ({
                    color: isActive ? "#059142" : "",
                  })}
                  key={index}
                >
                  <div
                    className={
                      isSidebarOpen === true
                        ? "w-[250px]  flex mt-4 py-2 px-[20px] hover:bg-[#2c3954]"
                        : "w-[100px]  transition-all duration-150 delay-75 ease-linear p-2 mt-4 flex justify-center items-center hover:bg-[#2c3954]"
                    }
                  >
                    <Typography className="text-[10px]">{menu.icon}</Typography>
                    {showAdmin && (
                      <Typography className="pl-4">{menu.title}</Typography>
                    )}
                  </div>
                </NavLink>
              ))}
            </li>
          </ul>
        </Box>
      </div>
    </div>
  );
};

export default Leftbar;
