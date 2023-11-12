import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Card, CardContent } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();
  const fruitSelect = useSelector((state) => state.greetReducer.fruit);

  const handleCat = (curr) => {
    const type = "SELECT_CAT";
    const payload = curr;
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
      <Grid item xs={3}>
        <Button
          onClick={() => handleCat("women")}
          variant="contained"
          color="warning"
          fullWidth
        >
          women
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          onClick={() => handleCat("men")}
          variant="contained"
          color="warning"
          fullWidth
        >
          men
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          onClick={() => handleCat("electronics")}
          variant="contained"
          color="warning"
          fullWidth
        >
          electronics
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          onClick={() => handleCat("jewellery")}
          variant="contained"
          color="warning"
          fullWidth
        >
          jewellery
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
