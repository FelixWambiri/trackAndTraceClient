import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  IconButton,
  TextField,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";
import { Edit, ArrowBack } from "@material-ui/icons";
import { AppContext } from "../Context/index";
import ResponsiveGridContainer from "./GridContainer";
import {
  updateSupplyChainItem,
  useGetSupplyLastItemEvent,
} from "../Queries/index";
import EventsList from "../Events/index";
import AddEvent from "../Events/addEvent";
import EventItem from "../Events/item";

const ItemDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { items } = useContext(AppContext);
  const lastItem = useGetSupplyLastItemEvent(id);
  const item = items?.find((item) => item?.id === id);

  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState(item);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    try {
      updateSupplyChainItem(id, formValues);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormValues(item);
  };

  return (
    <ResponsiveGridContainer>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item container spacing={2} alignItems="center">
          <Grid item style={{ paddingLeft: 0 }}>
            <IconButton onClick={() => navigate("/")}>
              <ArrowBack />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography style={{ color: "#1F213A" }} variant="h5">
              {item?.name}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              name="name"
              value={formValues?.name}
              onChange={handleInputChange}
              required
              variant="outlined"
              fullWidth
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Color"
              name="color"
              value={formValues?.color}
              onChange={handleInputChange}
              required
              variant="outlined"
              fullWidth
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              name="description"
              value={formValues?.description}
              onChange={handleInputChange}
              required
              variant="outlined"
              fullWidth
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Price"
              name="price"
              type="number"
              value={formValues?.price}
              onChange={handleInputChange}
              required
              variant="outlined"
              fullWidth
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {isEditing ? (
              <>
                <Button variant="outlined" onClick={handleSave}>
                  Save
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleCancel}
                  style={{ marginLeft: "1rem" }}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <IconButton onClick={() => setIsEditing(true)}>
                <Edit />
              </IconButton>
            )}
          </Grid>
        </Grid>
        <Grid item container alignItems="center" width="100%">
          <Grid item xs={12}>
            {item?.events.length > 0 && (
              <Typography variant="h6">Events:</Typography>
            )}
            <EventsList events={item?.events} />
            {item?.events.length > 0 && (
              <Box style={{ marginBottom: 10 }}>
                <Typography variant="h6">Last Event:</Typography>
                <EventItem event={lastItem} />
              </Box>
            )}
            <AddEvent supplyChainItemId={item?.id} />
          </Grid>
        </Grid>
      </Grid>
    </ResponsiveGridContainer>
  );
};

export default ItemDetailsPage;
