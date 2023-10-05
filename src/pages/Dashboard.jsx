import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { IoMdDownload } from "react-icons/io";
import { MdEmail, MdPointOfSale, MdTraffic } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import StateBox from "../components/StateBox";

const Dashboard = () => {
  return (
    <Box className="h-[calc(100vh-46px)]">
      <Box className="flex justify-between items-end my-4">
        <Box>
          <Typography
            variant="h6"
            component="h6"
            className="text-white uppercase"
          >
            dashboard
          </Typography>
          <p className="text-[#16a37f] text-[14px]">welcome to the dashboard</p>
        </Box>
        <button className="h-[32px] bg-[#536DFE] hover:bg-[#3D5AED] transition-all px-4 text-white font-medium uppercase text-[12px] shadow-md rounded flex items-center justify-start">
          <span className="mr-2">
            <IoMdDownload />
          </span>
          <span className="flex items-center justify-start">
            download reports
          </span>
        </button>
      </Box>
      <Box className="grid grid-cols-4 gap-4">
        <StateBox
          title="12,361"
          subtitle="Emails Sent"
          progress="84"
          increase="+84%"
          icon={<MdEmail />}
        />
        <StateBox
          title="20,361"
          subtitle="Sales Obtained"
          progress="23"
          increase="+23%"
          icon={<MdPointOfSale />}
        />
        <StateBox
          title="5,361"
          subtitle="New Clients"
          progress="8"
          increase="+8%"
          icon={<FaUserPlus />}
        />
        <StateBox
          title="123,361"
          subtitle="Traffic Received"
          progress="42"
          increase="+24%"
          icon={<MdTraffic />}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
