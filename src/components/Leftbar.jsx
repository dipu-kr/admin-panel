import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
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
  console.log(isSidebarOpen);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setShowAdmin(!showAdmin);
  };

  return (
    <div style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar
        collapsed={!isSidebarOpen}
        backgroundColor="#1a2233"
        color="#979aaa"
        rtl={false}
        style={{ height: "100vh" }}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              return {
                backgroundColor: active ? "#eecef9" : undefined,
              };
            },
          }}
        >
          <Box className="flex  justify-between px-[25px] py-3 border-b border-gray-600 text-white">
            {showAdmin && (
              <h3 className="text-xl text-green-700 font-bold">ADMIN</h3>
            )}

            <Typography>
              <MenuOutlinedIcon
                style={{ fontSize: "30px" }}
                className="cursor-pointer"
                onClick={() => {
                  toggleSidebar();
                }}
              />
            </Typography>
          </Box>

          <MenuItem
            style={{ color: "white", marginTop: "15px" }}
            icon={<HomeOutlinedIcon />}
            // component={<Link to="/" />}
          >
            Dashboard
          </MenuItem>
          {/* ------------------------------------ */}
          <Typography sx={{ m: "10px 0 0 10px" }} style={{ color: "white" }}>
            DATA
          </Typography>
          <MenuItem
            style={{ color: "white" }}
            icon={<PeopleOutlinedIcon />}
            component={<Link to="/e-commerce" />}
          >
            Users
          </MenuItem>
          <MenuItem
            style={{ color: "white" }}
            icon={<ContactsOutlinedIcon />}
            component={<Link to="/calendar" />}
          >
            {" "}
            Contacts Information
          </MenuItem>
          <MenuItem
            style={{ color: "white" }}
            icon={<ReceiptOutlinedIcon />}
            component={<Link to="/calendar" />}
          >
            {" "}
            Invoices Balances
          </MenuItem>
          {/* -----------------
          --------------------- */}
          <Typography sx={{ m: "10px 0 0 10px" }} style={{ color: "white" }}>
            PAGES
          </Typography>
          <MenuItem
            style={{ color: "white" }}
            icon={<PersonOutlinedIcon />}
            component={<Link to="/documentation" />}
          >
            Profile Form
          </MenuItem>
          <MenuItem
            style={{ color: "white" }}
            icon={<CalendarTodayOutlinedIcon />}
            component={<Link to="/calendar" />}
          >
            {" "}
            Calendar
          </MenuItem>
          <MenuItem
            style={{ color: "white" }}
            icon={<HelpOutlineOutlinedIcon />}
            component={<Link to="/e-commerce" />}
          >
            FAQ Form
          </MenuItem>

          <SubMenu
            label="More"
            icon={<MoreVertOutlinedIcon />}
            style={{ color: "white" }}
          >
            <MenuItem> Setting</MenuItem>
            <MenuItem> Message </MenuItem>
          </SubMenu>

          {/* -------------------------------------------- */}
          <Typography sx={{ m: "10px 0 0 10px" }} style={{ color: "white" }}>
            CHARTS
          </Typography>
          <MenuItem
            style={{ color: "white" }}
            icon={<BarChartOutlinedIcon />}
            component={<Link to="/documentation" />}
          >
            Bar Chart
          </MenuItem>
          <MenuItem
            style={{ color: "white" }}
            icon={<PieChartOutlineOutlinedIcon />}
            component={<Link to="/calendar" />}
          >
            Pie Chart
          </MenuItem>
          <MenuItem
            style={{ color: "white" }}
            icon={<TimelineOutlinedIcon />}
            component={<Link to="/e-commerce" />}
          >
            Line Chart
          </MenuItem>
        </Menu>
        {/* </SidebarContent> */}
      </Sidebar>
    </div>
  );
};

export default Leftbar;
