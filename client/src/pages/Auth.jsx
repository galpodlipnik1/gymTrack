import React, { useState, useEffect } from 'react';
import {
  Grow,
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  Avatar,
  InputAdornment,
  IconButton,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../actions/users';
import toast, { Toaster } from 'react-hot-toast';
import { bg } from '../assets';
import { useSelector } from 'react-redux';

import { AiOutlineLock, AiFillEyeInvisible, AiFillEye } from 'react-icons/ai ';

const Auth = () => {
  const { isAuthenticated } = useSelector((state) => state.auth.authData);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formDataSignup, setFormDataSignup] = useState({ firstname:'', lastname:'', email: '', password: '', confirmPassword: '' });
  const isMobile = useMediaQuery('(max-width: 600px)');
  const paperStyle = { width: isMobile ? '90%' : '50%', padding: '1.5rem' };

  const handleChange = (e) => {
    if(isLogin){
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }else{
      setFormDataSignup({ ...formDataSignup, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let success;
    if (isLogin) {
      success = await signIn(formData);
    } else {
      success = await signUp(formDataSignup);
    }
    if (success) {
      toast.success('Logged in successfully');
      navigate('/');
    } else {
      toast.error('Invalid credentials');
      formData.password = '';
    }
  };

  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated, navigate]);

  return (
    <Grow in>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center'
          }}
        >
          <Toaster />
          <Paper elevation={24} sx={paperStyle}>
            {isLogin ? (
              <form onSubmit={handleSubmit}>
                <Grid
                  container
                  spacing={2}
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Avatar
                    sx={{ bgcolor: 'darkblue', margin: 'auto', width: '45px', height: '45px' }}
                  >
                    <AiOutlineLock />
                  </Avatar>
                  <Grid item xs={12} sx={{ padding: '10px 0 0 0!important' }}>
                    <Typography fontSize="20px" align="center">
                      Sign In
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      name="email"
                      label="Email"
                      variant="standard"
                      required
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      label="Password"
                      variant="standard"
                      required
                      fullWidth
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => setShowPassword(!showPassword)}>
                              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ marginTop: '1rem' }}
                    >
                      Sign In
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      fontSize="14px"
                      align="center"
                      sx={{ cursor: 'pointer' }}
                      onClick={() => setIsLogin(false)}
                    >
                      Don't have an account? Sign Up
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            ) : (
              <form onSubmit={handleSubmit}>
                <Grid
                  container
                  spacing={2}
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Avatar
                    sx={{ bgcolor: 'darkblue', margin: 'auto', width: '45px', height: '45px' }}
                  >
                    <AiOutlineLock />
                  </Avatar>
                  <Grid item xs={12} sx={{ padding: '10px 0 0 0!important' }}>
                    <Typography fontSize="20px" align="center">
                      Sign Up
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="text"
                      name="firstname"
                      label="First Name"
                      variant="standard"
                      required
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="text"
                      name="lastname"
                      label="Last Name"
                      variant="standard"
                      required
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      name="email"
                      label="Email"
                      variant="standard"
                      required
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      label="Password"
                      variant="standard"
                      required
                      fullWidth
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => setShowPassword(!showPassword)}>
                              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ marginTop: '1rem' }}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      fontSize="14px"
                      align="center"
                      sx={{ cursor: 'pointer' }}
                      onClick={() => setIsLogin(true)}
                    >
                      Already have an account? Sign In
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            )}
          </Paper>
        </Box>
      </Box>
    </Grow>
  );
};

export default Auth;
