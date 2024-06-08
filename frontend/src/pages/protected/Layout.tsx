import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../../components/TopBar";
import { Box, Container } from "@mui/material";
import { theme } from "../../theme/theme";

function Layout(props) {
  return (
    <Box
      sx={{
        // backgroundColor: theme.palette.primary.dark,
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBlock: 8,
        }}
      >
        <TopBar />
      </Container>
      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
