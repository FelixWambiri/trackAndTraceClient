import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@material-ui/core";

import { useStyles } from "./styles";
import { axiosInstance } from "./utils";
import ToastMessage from "../ToastMessage/index";
import { AppDispatchContext } from "../Context/index";

const Login: React.FC = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "register">("login");
  const [error, setError] = useState("");

  // Toast Message State
  const [message, setMessage] = useState("");
  const [type, setType] = useState<"success" | "error">("success");
  const navigate = useNavigate();
  const { setUserToken } = useContext(AppDispatchContext);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleMessage = ({
    message,
    type,
  }: {
    messsage: string;
    type: "success" | "error";
  }) => {
    setMessage(message);
    setType(type);
  };

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleMessage({ message: "", type: "success" });
    try {
      const response = await axiosInstance.post("/auth/login", {
        username,
        password,
      });
      setUserToken(response?.data?.token);
      localStorage.setItem("token", response?.data?.token);
      handleMessage({ message: "Login Successfull", type: "success" });
      navigate("/");
    } catch (error) {
      const err =
        error?.name === "AxiosError"
          ? "Error occurred during login, Please try again"
          : error?.response?.data;
      handleMessage({ message: err, type: "error" });
      setError(err);
    }
  };

  const handleRegisterSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    handleMessage({ message: "", type: "success" });
    try {
      await axiosInstance.post("/auth/register", {
        username,
        password,
      });
      handleMessage({ message: "Successfully registered!", type: "success" });
    } catch (error) {
      const err =
        error?.name === "AxiosError"
          ? "Error occurred during login, Please try again"
          : error?.response?.data;
      handleMessage({ err, type: "error" });
      setError(err);
    }
  };

  return (
    <Box className={classes.root}>
      <form
        onSubmit={mode === "login" ? handleLoginSubmit : handleRegisterSubmit}
        className={classes.form}
      >
        <Typography variant="h5" component="h5">
          {mode === "login" ? "Login" : "Register"}
        </Typography>
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
          {mode === "login" ? "Login" : "Register"}
        </Button>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="body1" style={{ color: "white" }}>
            {mode === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
          </Typography>
          <Button
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            className={classes.registerButton}
            style={{ color: "white" }}
          >
            {mode === "login" ? "Register here" : "Login here"}
          </Button>
        </Box>
        {error && (
          <Typography variant="body1" style={{ color: "red" }}>
            {error}
          </Typography>
        )}
      </form>
      <ToastMessage message={message} type={type} />
    </Box>
  );
};

export default Login;
