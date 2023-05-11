import React, { useState, useEffect } from "react";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";
import { CheckCircleOutline, ErrorOutline } from "@material-ui/icons";

interface Props {
  message: string;
  type: "success" | "error";
}

const ToastMessage: React.FC<Props> = ({ message, type }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [message]);

  const handleClose = () => {
    setOpen(false);
  };

  const getContent = () => {
    const icon = type === "success" ? <CheckCircleOutline /> : <ErrorOutline />;
    const backgroundColor = type === "success" ? "green" : "red";

    return (
      <SnackbarContent
        style={{ backgroundColor }}
        message={
          <div style={{ display: "flex", alignItems: "center" }}>
            {icon}
            <span style={{ marginLeft: "8px" }}>{message}</span>
          </div>
        }
        action={
          <IconButton size="small" color="inherit" onClick={handleClose}>
            X
          </IconButton>
        }
      />
    );
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      {getContent()}
    </Snackbar>
  );
};

export default ToastMessage;
