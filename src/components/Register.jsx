import React, {useState} from "react";
import {IconButton, 
    Avatar, 
    Button, 
    TextField,  
    Link, 
    Paper,
    Box, 
    Divider,
    Typography} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { GoogleLoginButton } from "react-social-login-buttons";

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          PruthuVainya
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const Register = () => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <Box sx={{ height: "700px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <Box sx={{ position: "absolute", top: "10px", left: "10px", zIndex: 1 }}>
          <IconButton sx={{ width: "40px", height: "40px", borderRadius: "4px" }} href="/login">
            <ArrowBackIcon sx={{ color: "#000" }} />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { md: "600px", xs: "100%" },
            mt: 8
          }}
        >
          <Paper
            variant="outlined"
            square
            sx={{
              width: "400px",
              height: "600px",
              boxShadow: { md: "2px 7px 10px rgba(0, 0, 0, 0.4)", xs: "none" },
              border: { xs: "none"}
            }}
          >
            <Avatar
              sx={{
                position: "relative",
                bgcolor: "transparent",
                width: 56,
                height: 56,
                margin: "0 auto",
                top: "3%",
              }}
            >
              <img
              src={process.env.PUBLIC_URL + '/assets/logo.png'}
              alt="Logo"
              style={{
                maxWidth: "60px",
                maxHeight: "60px",
              }}
            />
            </Avatar>
            <Box component="form" noValidate sx={{ mt: 1, padding: "20px", display: 'flex', flexDirection: 'column',
              alignItems: 'center' }}>
            <GoogleLoginButton text="Continue With Google" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} iconSize="25px" onClick={() => alert("Hello")} style={{fontSize: '18px', fontFamily: 'Roboto, sans-serif', backgroundColor: "#fff", borderRadius: "50px", boxShadow: 0, display: "flex", justifyContent: "center", border: isHovered ? '2px solid grey' : '1px solid grey'}} />
              <Divider component="div" role="presentation" variant='middle' sx={{width: '100%', mt: 1}}>
    {/* any elements nested inside the role="presentation" preserve their semantics. */}
    <Typography variant="p">or</Typography>
  </Divider>
            <TextField
                margin="normal"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                name="fullname"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="cfm_password"
                label="Confirm Password"
                type="password"
                id="cfm__password"
              />
              
              <br />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mb: 2, backgroundColor: "#80ea6e", color: "black" }}
              >
                Sign In
              </Button>
            </Box>
          </Paper>
        </Box>
          
          <Copyright sx={{ mt: 2, mb: 5 }} />
      </Box>
    );
  };

export default Register;
