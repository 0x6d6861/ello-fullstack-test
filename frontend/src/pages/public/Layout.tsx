import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import React from "react";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <Grid sx={{ height: "100vh" }} container spacing={2}>
      <Grid xs={8} sx={{ height: "100%" }}>
        <Outlet />
      </Grid>
      <Grid xs={4}>
        <p>CTA</p>
      </Grid>
    </Grid>
  );
}

export default Layout;
