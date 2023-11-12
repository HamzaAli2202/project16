import React from "react";
import { Grid, Button, Card, CardContent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export const Fruits = () => {
  const dispatch = useDispatch();
  const fruitSelect = useSelector((state) => state.greetReducer.fruit);
  const fruit = [
    "orange",
    "kiwi",
    "banana",
    "mango",
    "cherry",
    "strawberry",
    "dragon",
    "lychi",
  ];
  const handleFruit = (str) => {
    console.log("fruit", str);
    const type = "ADDFRUIT";
    const payload = str;
    const action = { type, payload };
    dispatch(action);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <h1>{fruitSelect.toUpperCase()}</h1>
          </CardContent>
        </Card>
      </Grid>
      {fruit.map((item) => (
        <Grid align="center" item xs={3}>
          <Card sx={{ height: 200, bgcolor: "khaki" }}>
            <CardContent>
              <h1>{item.toUpperCase()}</h1>
              <Button variant="contained" onClick={() => handleFruit(item)}>
                add to cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
