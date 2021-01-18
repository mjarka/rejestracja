import React from "react";
import Grid from "@material-ui/core/Grid";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

import RadioGroup from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

const Pickdate = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Grid item xs={12} md={4}>
        <AppBar position="static" color="secondary">
          <Toolbar variant="dense">
            <Typography variant="subtitle1" color="inherit">
              27.01.2021
            </Typography>
          </Toolbar>
        </AppBar>
        <Card>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="2021-01-27T08:00:00.000Z"
                  control={<Radio />}
                  label="godz. 9:00"
                  disabled
                />
                <FormControlLabel
                  value="2021-01-27T10:00:00.000Z"
                  control={<Radio />}
                  label="godz. 11:00"
                />
                <FormControlLabel
                  value="2021-01-27T12:00:00.000Z"
                  control={<Radio />}
                  label="godz. 13:00"
                />
                <FormControlLabel
                  value="2021-01-27T13:00:00.000Z"
                  control={<Radio />}
                  label="godz. 14:00"
                />
                <FormControlLabel
                  value="2021-01-27T15:00:00.000Z"
                  control={<Radio />}
                  label="godz. 16:00"
                />
              </RadioGroup>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <AppBar position="static" color="secondary">
          <Toolbar variant="dense">
            <Typography variant="subtitle1" color="inherit">
              28.01.2021
            </Typography>
          </Toolbar>
        </AppBar>
        <Card>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="2021-01-28T08:00:00.000Z"
                  control={<Radio />}
                  label="godz. 9:00"
                />
                <FormControlLabel
                  value="2021-01-28T10:00:00.000Z"
                  control={<Radio />}
                  label="godz. 11:00"
                />
                <FormControlLabel
                  value="2021-01-28T12:00:00.000Z"
                  control={<Radio />}
                  label="godz. 13:00"
                />
                <FormControlLabel
                  value="2021-01-28T13:00:00.000Z"
                  control={<Radio />}
                  label="godz. 14:00"
                />
                <FormControlLabel
                  value="2021-01-28T15:00:00.000Z"
                  control={<Radio />}
                  label="godz. 16:00"
                />
              </RadioGroup>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <AppBar position="static" color="secondary">
          <Toolbar variant="dense">
            <Typography variant="subtitle1" color="inherit">
              29.01.2021
            </Typography>
          </Toolbar>
        </AppBar>
        <Card>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="2021-01-29T08:00:00.000Z"
                  control={<Radio />}
                  label="godz. 9:00"
                />
                <FormControlLabel
                  value="2021-01-29T10:00:00.000Z"
                  control={<Radio />}
                  label="godz. 11:00"
                />
                <FormControlLabel
                  value="2021-01-29T12:00:00.000Z"
                  control={<Radio />}
                  label="godz. 13:00"
                />
                <FormControlLabel
                  value="2021-01-29T13:00:00.000Z"
                  control={<Radio />}
                  label="godz. 14:00"
                />
                <FormControlLabel
                  value="2021-01-29T15:00:00.000Z"
                  control={<Radio />}
                  label="godz. 16:00"
                />
              </RadioGroup>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Pickdate;
