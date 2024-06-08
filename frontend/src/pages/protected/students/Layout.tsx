import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Outlet />
    </Box>
  );
}

export default Layout;
