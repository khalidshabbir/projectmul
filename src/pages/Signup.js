import * as React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link,useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logoimg from '../assets/logo.png';
import './Login.css';
import axios from 'axios'
import {base_url} from "../utils/baseUrl"

const defaultTheme = createTheme();

const Signup = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post( base_url+ `/signup`, values);
      alert(response.data.message)
      navigate(`/varificaiton_email/${values.email}`)
    } catch (error) {
      // Handle error responses
      alert(error.response.data.message)
      
    }
  
    setSubmitting(false);
  };
  

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <div className="py-5" style={{ background: "#001529", minHeight: "100vh" }}>
      <div className='loginwrapper mx-auto  rounded p-lg-4 p-md-3' style={{ background: "#ffff" }}>
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar src={logoimg} sx={{ width: 100, height: 100 }}>
              </Avatar>
              <Typography component="h1" variant="h5" className='mt-5'>
                Sign Up
              </Typography>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  phone: '',
                  password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Field
                      type="text"
                      name="name"
                      as={TextField}
                      margin="normal"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      autoComplete="name"
                      autoFocus
                    />
                    <ErrorMessage name="name" component="div" className="error" />

                    <Field
                      type="email"
                      name="email"
                      as={TextField}
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      autoComplete="email"
                      autoFocus
                    />
                    <ErrorMessage name="email" component="div" className="error" />

                    <Field
                      type="text"
                      name="phone"
                      as={TextField}
                      margin="normal"
                      required
                      fullWidth
                      id="phone"
                      label="Phone Number"
                      autoComplete="phone"
                      autoFocus
                    />
                    <ErrorMessage name="phone" component="div" className="error" />

                    <Field
                      type="password"
                      name="password"
                      as={TextField}
                      margin="normal"
                      required
                      fullWidth
                      id="password"
                      label="Password"
                      autoComplete="current-password"
                    />
                    <ErrorMessage name="password" component="div" className="error" />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={isSubmitting}
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign Up
                    </Button>

                    <Grid container>
                     
                      <Grid item>
                        <Link to="/login" variant="body2">
                          {"Do you have Account? Sign In"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Signup;
