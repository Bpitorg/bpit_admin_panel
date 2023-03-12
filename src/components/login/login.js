import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import http_lib from '../../http/http';
import { useNavigate } from 'react-router-dom'
import { LOGIN_URL } from '../../constants/apiEndpoints';
import { useFormik } from 'formik';
import { LoginInitialValues, LoginSchema } from '../../schemas/loginSchema';
import './style.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://bpitindia.com/">
        BPIT
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function setCredentials(data) {
  localStorage.setItem('token', data.token)
  localStorage.setItem('name', data.name)
  localStorage.setItem('email', data.email)
}

export default function Login({ setLoader }) {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: LoginInitialValues,
    validationSchema: LoginSchema,
    onSubmit: ({ email, password }) => {
      setLoader(true)
      http_lib.post(LOGIN_URL, { email, password })
        .then(res => {
          setCredentials(res.data)
          setLoader(false);
          navigate('/home')
        })
        .catch(err => {
          setLoader(false)
          console.log(err.response.data)
          setError(JSON.stringify(err.response.data))
        })
    }
  })

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/home/')
    }
  }, [navigate])

  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://www.bpitindia.com/wp-content/uploads/2020/10/college.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          display="flex"
          alignItems="center"
          justifyContent='center'
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                autoFocus
                label="Email"
                name='email'
                onChange={handleChange}
                value={values.email}
                error={touched.email && errors.email}
                helperText={touched.email && errors.email ? errors.email : ''}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                name='password'
                onChange={handleChange}
                value={values.password}
                error={touched.password && errors.password}
                helperText={touched.password && errors.password ? errors.password : ''}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Typography sx={{ color: "error.main" }}>{error}</Typography>

              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid> */}

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
