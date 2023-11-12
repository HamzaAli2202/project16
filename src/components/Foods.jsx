import React from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import { useDispatch } from "react-redux";

export const Foods = () => {
  const dispatch = useDispatch();

  const foods = [
    "html",
    "css",
    "javascript",
    "react",
    "node",
    "express",
    "Git",
    "Redux",
  ];
  const handleFood = (item) => {
    const type = "SELECT_FOOD";
    const payload = item;
    const action = { type, payload };
    dispatch(action);
  };

  return (
    <Grid container spacing={2}>
      {foods.map((item) => (
        <Grid align="center" item xs={3}>
          <Card sx={{ bgcolor: "cornflowerblue" }}>
            <CardContent>
              <h1>{item.toUpperCase()}</h1>
              <Button
                onClick={() => handleFood(item)}
                variant="contained"
                color="warning"
              >
                add
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
