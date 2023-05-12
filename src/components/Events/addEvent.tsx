import React, { useState } from "react";
import { Box, Button, TextField, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

import { createItemEvent } from "../Queries/index";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    background: "#1F213A",
    padding: "20px",
    borderRadius: "10px",
  },
  field: {
    background: "white",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginLeft: "10px",
  },
});

interface IProps {
  supplyChainItemId: string;
  onHandleCancel: () => void;
}

const EventForm: React.FC<IProps> = ({ supplyChainItemId, onHandleCancel }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState({
    supplyChainItemId: "",
    location: "",
    custodian: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormFields((prevFields) => ({ ...prevFields, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    try {
      createItemEvent(supplyChainItemId, { ...formFields, supplyChainItemId });
      setFormFields({
        supplyChainItemId: "",
        location: "",
        custodian: "",
      });
      onHandleCancel && onHandleCancel();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setFormFields({
      supplyChainItemId: "",
      location: "",
      custodian: "",
    });
    onHandleCancel && onHandleCancel();
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h5" style={{ color: "white" }}>
        Add Event
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <TextField
              name="location"
              label="Location"
              variant="outlined"
              fullWidth
              value={formFields.location}
              onChange={handleInputChange}
              className={classes.field}
              InputProps={{
                style: { background: "white" },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="custodian"
              label="Custodian"
              variant="outlined"
              fullWidth
              value={formFields.custodian}
              onChange={handleInputChange}
              className={classes.field}
              InputProps={{
                style: { background: "white" },
              }}
            />
          </Grid>
          <Grid item xs={12} className={classes.buttonContainer}>
            <Button variant="contained" onClick={handleSubmit}>
              Save
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleCancel}
              className={classes.button}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

interface AddEventProps {
  supplyChainItemId: string;
}

const AddEvent: React.FC<AddEventProps> = ({ supplyChainItemId }) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddEventClick = () => {
    setShowForm(true);
  };

  const handleCancelClick = () => {
    setShowForm(false);
  };

  return (
    <Box display="flex" justifyContent="flex-end" marginBottom="20px">
      {showForm ? (
        <EventForm
          supplyChainItemId={supplyChainItemId}
          onHandleCancel={handleCancelClick}
        />
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddEventClick}
          style={{ marginBottom: "20px", backgroundColor: "#5A3EB2" }}
        >
          Add Event
        </Button>
      )}
    </Box>
  );
};

export default AddEvent;
