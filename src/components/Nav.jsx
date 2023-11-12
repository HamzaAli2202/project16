import React from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import { navData } from "./data";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          {navData.map((item) => (
            <Grid item xs={2}>
              <Link to={item.path}>
                <Button variant="contained" fullWidth color="secondary">
                  {item.title}
                </Button>
              </Link>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Nav;
