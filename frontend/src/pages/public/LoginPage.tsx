import {
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Snackbar,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { api } from "../../store/api/api";
import { LoadingButton } from "@mui/lab";

const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  maxWidth: 400,
  margin: "auto",
  //   color: theme.palette.text.secondary,
}));

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { data, isLoading, isError, error, isSuccess }] =
    api.useLoginMutation();

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      //   <Snackbar
      //     anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      //     open={true}
      //     message={error?.message}
      //   />;
      console.log(error.message);
    }
  }, [isError]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    void login({ email, password });
  };

  return (
    <>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Item variant="outlined">
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              disabled={isLoading}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              disabled={isLoading}
              onChange={(e) => setPassword(e.target.value)}
            />
            <LoadingButton
              loading={isLoading}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              // className={classes.submit}
              // disabled={isLoading}
            >
              Sign In
            </LoadingButton>
          </form>
        </Item>
      </Box>
    </>
  );
}

export default LoginPage;
