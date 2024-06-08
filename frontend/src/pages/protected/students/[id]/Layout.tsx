import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tab,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { api } from "../../../../store/api/api";
import { TabContext, TabList, TabPanel } from "@mui/lab";

function Layout() {
  const [tab, setTab] = React.useState("books");
  const { studentId } = useParams();

  const navigate = useNavigate();

  const { data: student, isLoading } = api.useGetStudentByIdQuery(
    Number(studentId)
  );

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  useEffect(() => {
    if (tab) {
      navigate(tab);
    }
  }, [tab]);

  if (isLoading) {
    return <p>Is loadings</p>;
  }

  return (
    <>
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
        </Box>
      </Box>

      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} centered>
            <Tab label="Reading list" value="books" />
            <Tab label="Timetable" value="2" disabled />
            {/* <Tab label="Item Three" value="3" /> */}
          </TabList>
        </Box>
        <TabPanel value={tab}>
          <Outlet />
        </TabPanel>
      </TabContext>
    </>
  );
}

export default Layout;
