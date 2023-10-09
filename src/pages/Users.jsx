import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Users = () => {
  return (
    <Box className="min-h-[calc(100vh-38px-8px-8px)] border">
      <Box className="h-[30px] my-4 border flex items-center">
        <Typography
          variant="h6"
          component="h6"
          className="text-white uppercase"
        >
          User list
        </Typography>
      </Box>
    </Box>
  );
};

export default Users;
