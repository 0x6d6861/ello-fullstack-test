import React from "react";
import { useSelector } from "react-redux";
import { isLoggedIn } from "./store/features/auth/slice";
import protectedRoutes from "./router/protected.tsx";
import publicRoutes from "./router/public.tsx";
import { RouterProvider } from "react-router-dom";

function AppEntry(props) {
  const userIsLoggedIn = useSelector(isLoggedIn);

  const routes = userIsLoggedIn ? protectedRoutes : publicRoutes;

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default AppEntry;
