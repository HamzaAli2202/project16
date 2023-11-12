import React from "react";
import { Grid, Button } from "@mui/material";
import { useDispatch } from "react-redux";

export const Color = () => {
  const dispatch = useDispatch();

  const clr = [
    "info",
    "warning",
    "inherit",
    "error",
    "success",
    "primary",
    "secondary",
  ];
  const handleColor = (curr) => {
    const type = "SELECT_COLOR";
    const payload = curr;
    const action = { type, payload };
    dispatch(action);
  };
  return (
    <Grid container spacing={2}>
      {clr.map((item) => (
        <Grid item xs={4}>
          <Button
            onClick={() => handleColor(item)}
            fullWidth
            variant="contained"
            color={item}
          >
            {item}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
