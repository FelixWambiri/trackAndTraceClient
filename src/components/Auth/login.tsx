import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./styles";
import { Box, Typography, TextField, Button } from "@material-ui/core";

const Login: React.FC = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <Box className={classes.root}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Typography variant="h5">Login</Typography>
        <TextField
          label="Username"
          variant="outlined"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          required
          aria-label="Username"
          className={classes.fieldText}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
          aria-label="Password"
          className={classes.fieldText}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Login;
