import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { base_url } from '../utils/baseUrl';
import axios from 'axios';
import { useEffect, useState } from 'react';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
});

const defaultTheme = createTheme();

const Settings = () => {
  const user_is = localStorage.getItem('userdetails');
  console.log(user_is);
  const [userdata, setuserdata] = useState([]);
  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(base_url + `/get_userprofile/${user_is}`);
        setuserdata(response.data);
        formik.setValues({
          name: response.data.name || '',
          email: response.data.email || '',
          phone: response.data.phone || '',
        });
      } catch (error) {
        console.error('Error:', error.response.data.error);
      }
    };

    fetchProfile();
  }, []);

  const onSubmit = async (values) => {
    try {
      const response = await axios.put(base_url + `/update_Profile/${user_is}`, values);
      alert(response.data.message)
    } catch (error) {
      alert(error.response.data.message)
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <>
      <div className='profileSettings'>
        <div className='d-flex align-items-center justify-content-center '>
          <div className='bg-white border border-1 px-5 py-3'>
            <ThemeProvider theme={defaultTheme}>
              <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography component='h1' variant='h5'>
                    Profile Settings
                  </Typography>
                  <Box component='form' noValidate sx={{ mt: 1 }}>
                    <TextField
                      margin='normal'
                      required
                      fullWidth
                      id='name'
                      label='Name'
                      name='name'
                      autoComplete='name'
                      autoFocus
                      {...formik.getFieldProps('name')}
                      value={formik.values.name}
                      error={formik.touched.name && formik.errors.name}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                      margin='normal'
                      required
                      fullWidth
                      id='email'
                      label='Email Address'
                      name='email'
                      autoComplete='email'
                      autoFocus
                      {...formik.getFieldProps('email')}
                      value={formik.values.email}
                      error={formik.touched.email && formik.errors.email}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                      margin='normal'
                      required
                      fullWidth
                      id='phone'
                      label='Phone Number'
                      name='phone'
                      autoComplete='phone'
                      autoFocus
                      {...formik.getFieldProps('phone')}
                      value={formik.values.phone}
                      error={formik.touched.phone && formik.errors.phone}
                      helperText={formik.touched.phone && formik.errors.phone}
                    />
                    <Button
                      type='submit'
                      fullWidth
                      variant='contained'
                      sx={{ mt: 3, mb: 2 }}
                      onClick={formik.handleSubmit}
                    >
                      Update
                    </Button>
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
