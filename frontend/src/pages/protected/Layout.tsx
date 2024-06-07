import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../../components/TopBar";
import { Container } from "@mui/material";

function Layout(props) {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TopBar />
      </Container>
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
