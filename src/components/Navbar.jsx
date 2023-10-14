import React from "react";
import { Box, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { BiBell, BiUser } from "react-icons/bi";
import { MdOutlineSettings } from "react-icons/md";

const Navbar = () => {
  return (
    <Box className="flex h-[38px] justify-between items-center">
      <Box className="flex justify-between items-center bg-[#252b36] rounded-[1px] px-2 cursor-pointer">
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] bg-transparent py-2 pl-2 border-none outline-none text-white text-[13px] cursor-pointer"
        />
        <SearchOutlinedIcon className="text-white" />
      </Box>
      <Typography className="text-white flex justify-center items-center gap-3">
        <BiBell className="text-[28px] p-1 rounded-full hover:bg-[#252b36] hover:scale-125 transition-all cursor-pointer" />
        <MdOutlineSettings className="text-[28px] p-1 rounded-full hover:bg-[#252b36] hover:scale-125 transition-all cursor-pointer" />
        <BiUser className="text-[28px] p-1 rounded-full hover:bg-[#252b36] hover:scale-125 transition-all cursor-pointer" />
      </Typography>
    </Box>
  );
};

export default Navbar;
