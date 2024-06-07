import React from "react";
import {
  createBrowserRouter,
  createSearchParams,
  Navigate,
  RouteObject,
} from "react-router-dom";
import Layout from "../pages/public/Layout";
import LoginPage from "../pages/public/LoginPage";

const router: RouteObject[] = [
  {
    path: "",
    element: (
      <Navigate
        to={{
          pathname: "/auth/login",
        }}
      />
    ),
  },
  {
    path: "auth",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: (
          <Navigate
            to={{
              pathname: "login",
              // replace: true,
              //state: JSON.stringify({ redirect: true }),
              search: createSearchParams({
                redirect: location.pathname,
              }).toString(),
            }}
          />
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Navigate
        to={{
          pathname: "/auth/login",
        }}
      />
    ),
  },
];

export default createBrowserRouter(router);
