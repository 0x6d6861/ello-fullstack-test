import React from "react";
import { api } from "../../../store/api/api";
import {
  Avatar,
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function Index(props) {
  const { data, isLoading } = api.useGetStudentsQuery(null);

  return (
    <Container
      maxWidth="lg"
      sx={{
        // backgroundColor: "red",
        height: "100%",
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <Typography variant="h5">Student List</Typography> */}
      <Paper
        variant="outlined"
        sx={{
          maxWidth: 400,
          width: "100%",
        }}
      >
        <List title="Student List" sx={{ width: "100%" }}>
          {data?.map((student, index) => (
            <>
              <ListItemButton
                to={`/students/${student.id}/books`}
                component={Link}
                key={student.id}
              >
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      width: 50,
                      height: 50,
                    }}
                    src={student.picture}
                    alt={student.name}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={student.name}
                  secondary={
                    <Box>
                      <Typography variant="body2">
                        Class: {student.class}
                      </Typography>
                    </Box>
                  }
                />
              </ListItemButton>
              {index !== data.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default Index;
