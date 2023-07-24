import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import { Link,useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logoimg from '../assets/logo.png';
import './Login.css';
import axios from 'axios'
import { base_url } from '../utils/baseUrl';
const defaultTheme = createTheme();

const Login = () => {
  const navigate=useNavigate()
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async(values) => {
    try {
      const response = await axios.post(base_url+`/login`, values);
      if(response.data.redirectToVerification===true){
        
        navigate(`/varificaiton_email/${values.email}`)
      }else{
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("userdetails",response.data.user );
        navigate("/admin")
        window.location.reload()
      }
    
    } catch (error) {
      // Handle error responses
      alert(error.response.data.message)
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="py-5" style={{ background: '#001529', minHeight: '100vh' }}>
      <div className="loginwrapper mx-auto  rounded p-lg-4 p-md-3" style={{ background: '#ffff' }}>
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
              <Avatar src={logoimg} sx={{ width: 100, height: 100 }}></Avatar>
              <Typography component="h1" variant="h5" className="mt-5">
                Sign In
              </Typography>
              <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && formik.errors.email}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && formik.errors.password}
                  helperText={formik.touched.password && formik.errors.password}
                />
                
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link to="/forgot-password" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Login;
