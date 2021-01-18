import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Pickdate from "./pickdate";
import Guests from "./guests";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { Formik, Field, FieldArray, Form, ErrorMessage, getIn } from "formik";
import FormikRadioGroup from "./FormikRadioGroup";
import * as yup from "yup";
import Getentries from "./Getentries";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import RadioGroup from "@material-ui/core/RadioGroup";
import { FormGroup } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginTop: theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));
const options = [
  "27.01 godz. 9:00",
  "27.01 godz. 11:00",
  "27.01 godz. 13:00",
  "27.01 godz. 14:30",
  "27.01 godz. 16:00",
];
const options2 = [
  "28.01 godz. 9:00  ",
  "28.01 godz. 10:30  ",
  "28.01 godz. 12:00  ",
  "28.01 godz. 13:30  ",
  "28.01 godz. 15:00  ",
];
const options3 = [
  "29.01 godz. 9:00 ",
  "29.01 godz. 10:30 ",
  "29.01 godz. 12:00 ",
  "29.01 godz. 13:30 ",
  "29.01 godz. 15:00 ",
];

function App() {
  const classes = useStyles();

  const ErrorMessage2 = ({ name }) => (
    <Field
      name={name}
      render={({ form }) => {
        const error = getIn(form.errors, name);

        const touch = getIn(form.touched, name);

        return touch && error ? error : null;
      }}
    />
  );

  const validation = yup.object({
    organizacja: yup.string("").required("Wpisz nazwę organizacji"),
    date: yup.string("").required("Wybierz datę wydarzenia"),

    guests: yup.array().of(
      yup.object().shape({
        name: yup.string("").required("Wpisz imię"),
        adress: yup.string("").required("Wpisz adres"),
        // Rest of your amenities object properties
      })
    ),
  });

  const onSubmit = (values, errors) => {
    alert(JSON.stringify(errors, null, 2));
  };

  return (
    <div className="App">
      <Formik
        initialValues={{
          organizacja: "",
          date: "",
          guests: [
            {
              name: "",
              adress: "",
              city: "",
              code: "",
              phone: "",
            },
            {
              name: "",
              adress: "",
              city: "",
              code: "",
              phone: "",
            },
            {
              name: "",
              adress: "",
              city: "",
              code: "",
              phone: "",
            },
            {
              name: "",
              adress: "",
              city: "",
              code: "",
              phone: "",
            },
          ],
        }}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched }) => (
          <Form>
            <Getentries />
            <Container maxWidth="md">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h4" align="left">
                    Zapisz się na wybrany termin spotkania.{" "}
                  </Typography>
                </Grid>
              </Grid>
              <Box py={2}>
                <Typography variant="body1" color="inherit" align="left">
                  Spotkania odbywają się w dniach 27-29.01.2021 r. Każdego dnia
                  przewidzieliśmy 5 spotkań. Na każdym spotkaniu dopuszczamy
                  obecność max 4 dostawców (max 4 osoby od każdego dostawcy).
                </Typography>
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={5}>
                  <FormGroup>
                    <Field
                      variant="outlined"
                      name="organizacja"
                      as={TextField}
                      label="organizacja"
                      error={touched.organizacja && Boolean(errors.organizacja)}
                      helperText={touched.organizacja && errors.organizacja}
                    />
                  </FormGroup>
                </Grid>
              </Grid>
              <Box py={2}>
                <Typography variant="body1" color="inherit" align="left">
                  Wskaż dogodny dla Ciebie termin. Po zebraniu zapisów
                  poinformujemy Cię o finalnym terminie wraz z linkiem do
                  spotkania.
                </Typography>
              </Box>

              {/*  PICK DATE*/}
              {/*  PICK DATE*/}
              <Grid container spacing={3}>
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
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        <RadioGroup aria-label="gender" name="gender1">
                          <Field
                            name="date"
                            options={options}
                            component={FormikRadioGroup}
                          />
                        </RadioGroup>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                {/*  PICK DATE*/}
                {/*  PICK DATE*/}

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
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        <RadioGroup aria-label="gender" name="gender1">
                          <Field
                            name="date"
                            options={options2}
                            component={FormikRadioGroup}
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
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        <RadioGroup aria-label="gender" name="gender1">
                          <Field
                            name="date"
                            options={options3}
                            component={FormikRadioGroup}
                          />
                        </RadioGroup>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                {/* users */}
                {/* users */}

                <Grid item xs={6}>
                  <AppBar position="static" color="secondary">
                    <Toolbar variant="dense">
                      <Typography variant="subtitle1" color="inherit">
                        Uczestnik 1
                      </Typography>
                    </Toolbar>
                  </AppBar>
                  <Paper className={classes.paper}>
                    <form
                      className={classes.root}
                      noValidate
                      autoComplete="off"
                    >
                      <Field
                        size="small"
                        fullWidth
                        variant="outlined"
                        name="guests[0].name"
                        as={TextField}
                        label="Imię i nazwisko"
                        error={
                          getIn(errors, `guests.[0].name`) &&
                          getIn(touched, `guests.[0].name`)
                        }
                        helperText={
                          getIn(touched, `guests.[0].name`) &&
                          getIn(errors, `guests.[0].name`)
                        }
                      />

                      <TextField
                        fullWidth
                        size="small"
                        id="standard-full-width"
                        variant="outlined"
                        label="Adres"
                        py={2}
                      />
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="Miejscowość"
                        py={2}
                      />
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="Kod pocztowy"
                        py={2}
                      />
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="Telefon dla kuriera"
                        py={2}
                      />
                    </form>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <AppBar position="static" color="secondary">
                    <Toolbar variant="dense">
                      <Typography variant="subtitle1" color="inherit">
                        Uczestnik 2
                      </Typography>
                    </Toolbar>
                  </AppBar>
                  <Paper className={classes.paper}>
                    <form
                      className={classes.root}
                      noValidate
                      autoComplete="off"
                    >
                      <Field
                        size="small"
                        fullWidth
                        variant="outlined"
                        name="guests.1.name"
                        as={TextField}
                        label="imię i nazwisko"
                        error={
                          getIn(errors, `guests.[1].name`) &&
                          getIn(touched, `guests.[1].name`)
                        }
                        helperText={
                          getIn(touched, `guests.[1].name`) &&
                          getIn(errors, `guests.[1].name`)
                        }
                      />

                      <Field
                        size="small"
                        fullWidth
                        variant="outlined"
                        name="guests.1.adress"
                        as={TextField}
                        label="adres"
                        error={
                          getIn(errors, `guests.[1].adress`) &&
                          getIn(touched, `guests.[1].adress`)
                        }
                        helperText={
                          getIn(touched, `guests.[1].adress`) &&
                          getIn(errors, `guests.[1].adress`)
                        }
                      />

                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="Miejscowość"
                        py={2}
                      />
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="Kod pocztowy"
                        py={2}
                      />
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="Telefon dla kuriera"
                        py={2}
                      />
                    </form>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <AppBar position="static" color="secondary">
                    <Toolbar variant="dense">
                      <Typography variant="subtitle1" color="inherit">
                        Uczestnik 3
                      </Typography>
                    </Toolbar>
                  </AppBar>
                  <Paper className={classes.paper}>
                    <form
                      className={classes.root}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        fullWidth
                        size="small"
                        id="standard-full-width"
                        variant="outlined"
                        label="Imię i Nazwisko"
                        py={2}
                      />
                      <TextField
                        fullWidth
                        size="small"
                        id="standard-full-width"
                        variant="outlined"
                        label="Adres"
                        py={2}
                      />
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="Miejscowość"
                        py={2}
                      />
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="Kod pocztowy"
                        py={2}
                      />
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="Telefon dla kuriera"
                        py={2}
                      />
                    </form>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <AppBar position="static" color="secondary">
                    <Toolbar variant="dense">
                      <Typography variant="subtitle1" color="inherit">
                        Uczestnik 4
                      </Typography>
                    </Toolbar>
                  </AppBar>
                  <Paper className={classes.paper}>
                    <form
                      className={classes.root}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        fullWidth
                        size="small"
                        id="standard-full-width"
                        variant="outlined"
                        label="Imię i Nazwisko"
                        py={2}
                      />
                      <TextField
                        fullWidth
                        size="small"
                        id="standard-full-width"
                        variant="outlined"
                        label="Adres"
                        py={2}
                      />
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="Miejscowość"
                        py={2}
                      />
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="Kod pocztowy"
                        py={2}
                      />
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        label="Telefon dla kuriera"
                        py={2}
                      />
                    </form>
                  </Paper>
                </Grid>
              </Grid>

              <Box pt={2}>
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  Wyślij
                </Button>
              </Box>
            </Container>
            <pre>{JSON.stringify(values, null, 4)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
