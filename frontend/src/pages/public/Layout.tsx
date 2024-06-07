import React from "react";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <div>
      <h1>Public</h1>
      <Outlet />
    </div>
  );
}

export default Layout;
