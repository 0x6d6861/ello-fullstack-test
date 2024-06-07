import React from "react";
import { createBrowserRouter, RouteObject, Navigate } from "react-router-dom";
import Layout from "../pages/protected/Layout";
import StudentModuleLayout from "../pages/protected/students/Layout";
import StudentModuleIndex from "../pages/protected/students/Index";
import StudentModuleSingleStudentLayout from "../pages/protected/students/[id]/Layout";
import StudentModuleSingleStudentBooks from "../pages/protected/students/[id]/Books";

const router: RouteObject[] = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <div>Home Page</div>,
        index: true,
      },
      {
        path: "students",
        element: <StudentModuleLayout />,
        children: [
          {
            path: "",
            element: <StudentModuleIndex />,
          },
          {
            path: ":id",
            element: <StudentModuleSingleStudentLayout />,
            children: [
              {
                path: "books",
                element: <StudentModuleSingleStudentBooks />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: (
      <Navigate
        to={{
          pathname: "/home",
        }}
      />
    ),
  },
];

export default createBrowserRouter(router);
