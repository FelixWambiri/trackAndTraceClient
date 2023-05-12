import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, IconButton } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

import ResponsiveGridContainer from "./GridContainer";
import { createSupplyChainItem } from "../Queries/index";

interface FormValues {
  name: string;
  color: string;
  price: number;
  description: string;
}

const AddSupplyItemForm: React.FC = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    color: "",
    price: 0,
    description: "",
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      createSupplyChainItem(formValues);
      setFormValues({ name: "", color: "", price: 0, description: "" });
      navigate("/");
    } catch (error) {
      console.error("Error creating supply item:", error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <ResponsiveGridContainer>
      <IconButton style={{ paddingLeft: 0 }} onClick={() => navigate("/")}>
        <ArrowBack />
      </IconButton>
      <form
        onSubmit={handleFormSubmit}
        style={{ display: "flex", flexDirection: "column", marginTop: 50 }}
      >
        <label htmlFor="name">Name</label>
        <TextField
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
          required
          variant="outlined"
          size="small"
          style={{ marginBottom: "1rem" }}
        />
        <label htmlFor="color">Color</label>
        <TextField
          id="color"
          name="color"
          value={formValues.color}
          onChange={handleInputChange}
          required
          variant="outlined"
          size="small"
          style={{ marginBottom: "1rem" }}
        />
        <label htmlFor="price">Price</label>
        <TextField
          id="price"
          name="price"
          type="number"
          value={formValues.price}
          onChange={handleInputChange}
          required
          variant="outlined"
          size="small"
          style={{ marginBottom: "1rem" }}
        />
        <label htmlFor="description">Description</label>
        <TextField
          id="description"
          name="description"
          value={formValues.description}
          onChange={handleInputChange}
          required
          variant="outlined"
          size="small"
          style={{ marginBottom: "1rem" }}
        />
        <Button
          id="submit-button"
          variant="contained"
          color="primary"
          type="submit"
          aria-label="Add Supply Item"
        >
          Add Supply Item
        </Button>
      </form>
      {/* Add error message container here */}
    </ResponsiveGridContainer>
  );
};

export default AddSupplyItemForm;
