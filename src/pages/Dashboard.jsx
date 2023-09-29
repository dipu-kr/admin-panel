import React from "react";
import { Box, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { BiBell, BiUser } from "react-icons/bi";
import { MdOutlineSettings } from "react-icons/md";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Dashboard = () => {
  return (
    <Box className="h-screen border px-3 py-2">
      <Box className="flex justify-between items-center">
        <Box className="flex justify-between items-center bg-[#252b36] rounded-[1px] px-2 cursor-pointer">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent py-1 pl-2 border-none outline-none text-white text-[14px]"
          />
          <SearchOutlinedIcon className="text-white" />
        </Box>
        <Typography className="text-white text-[13px] flex justify-center items-center gap-4">
          <BiBell className="text-[20px]" />
          <MdOutlineSettings className="text-[20px]" />
          <BiUser className="text-[20px]" />
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
