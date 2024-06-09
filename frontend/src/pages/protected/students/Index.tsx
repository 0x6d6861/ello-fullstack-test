import React from "react";
import { api } from "../../../store/api/api";
import {
  Avatar,
  Box,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function Index(props) {
  const { data, isLoading } = api.useGetStudentsQuery(null);

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" gutterBottom>
        Student List
      </Typography>
      <List>
        {data?.map((student) => (
          <ListItem
            to={`/students/${student.id}/books`}
            component={Link}
            key={student.id}
          >
            <ListItemAvatar>
              <Avatar src={student.picture} alt={student.name} />
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
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Index;
