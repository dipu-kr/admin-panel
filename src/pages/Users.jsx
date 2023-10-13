import React from "react";
import UserListTable from "../components/UserListTable";
import { Box, Typography, Button } from "@mui/material";
import mData from "../MOCK_DATA.json";

const Users = () => {
  // console.log(mData);
  return (
    <Box className="min-h-[calc(100vh-38px-8px-8px)]">
      <Box className="h-[30px] my-4 flex items-center">
        <Typography
          variant="h6"
          component="h6"
          className="text-white uppercase"
        >
          User list
        </Typography>
      </Box>
      <Box className="h-[calc(100vh-38px-8px-8px-30px-32px)] border border-red-600 text-white">
        <UserListTable mData={mData} />
      </Box>
    </Box>
  );
};

export default Users;
