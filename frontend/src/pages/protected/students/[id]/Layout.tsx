import {
  Avatar,
  Box,
  Container,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tab,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { api } from "../../../../store/api/api";
import { useSelector } from "react-redux";
import { getStudentById } from "../../../../store/features/main/slice";
import { Book } from "../../../../store/api";

type ContextType = {
  studentId: string | undefined;
  studentList: Book[] | undefined;
};

function Layout() {
  const { studentId } = useParams();

  const { data: student, isLoading } = api.useGetStudentByIdQuery(
    Number(studentId)
  );

  const studentList = useSelector(getStudentById)(studentId);

  if (isLoading) {
    return <p>Is loadings</p>;
  }

  return (
    <>
      <Container maxWidth="lg">
        <Box
          key={student?.id}
          sx={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 4,
              width: "100%",
            }}
          >
            <Avatar
              sx={{
                height: 100,
                width: 100,
                borderRadius: 4,
              }}
              src={student?.picture}
              alt={student?.name}
            />
            <Box>
              <Typography variant="h4">{student?.name}</Typography>
              <Typography variant="body1">Class: {student?.class}</Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                // backgroundColor: "red",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              {studentList?.readings?.length > 0 && (
                <Typography variant="h5">
                  {studentList?.readings?.length} reading list
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          flex: 1,
        }}
      >
        <Container maxWidth="lg">
          <Outlet
            context={
              {
                studentId,
                studentList: studentList?.readings,
              } satisfies ContextType
            }
          />
        </Container>
      </Box>
    </>
  );
}

export default Layout;
