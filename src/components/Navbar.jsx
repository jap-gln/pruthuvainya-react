import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  SwipeableDrawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const isMaximized = useMediaQuery("(min-width:900px)");

  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (isMaximized) {
      setOpen(false); // Close the drawer when the screen is maximized
    }
  }, [isMaximized]);

  const toggleDrawer = (openStatus) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(openStatus);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar
        position="static"
        sx={{ background: "linear-gradient(0deg, rgba(18,11,4,1) 0%, rgba(54,24,1,1) 100%)", alignItems: "center", color: "#fff" }}
      >
        <Toolbar sx={{ width: "85%", justifyContent: "space-between" }}>
          <IconButton
            href="/"
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <img
              src={process.env.PUBLIC_URL + '/assets/logo.png'}
              alt="Logo"
              style={{
                maxWidth: "60px",
                maxHeight: "60px",
              }}
            />
          </IconButton>
          <Box
            width="60%"
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "space-between",
            }}
          >
            <Button sx={{ color: "#fff" }} href="/">
              <Typography variant="subtitle2">Home</Typography> 
            </Button>
            <Button sx={{ color: "#fff" }} href="/about">
            <Typography variant="subtitle2">About Us</Typography>
            </Button>
            <Button sx={{ color: "#fff" }}><Typography variant="subtitle2">Services</Typography></Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#367E18",
                "&:hover": { backgroundColor: "#367E18" },
              }}
              href="/login"
            >
              <Typography variant="subtitle2">Login / SignUp</Typography>
            </Button>
          </Box>
          <IconButton
            size="medium"
            edge={false}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              display: {
                xs: "block",
                md: "none",
                width: "40px",
                height: "40px",
                borderRadius: "4px",
              },
            }}
          >
            <MenuIcon sx={{ color: "#fff" }} />
          </IconButton>
          <SwipeableDrawer
            anchor="right" // You can change this to 'right', 'top', or 'bottom'
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            PaperProps={{
              style: {
                xs: "block",
                md: "none",
              },
            }}
          >
            {/* Drawer content goes here */}
            <IconButton
              onClick={toggleDrawer(false)}
              sx={{ width: "40px", height: "40px", borderRadius: "4px" }}
            >
              <ArrowBackIcon
                sx={{ color: "#000" }}
              />
            </IconButton>
            <Box style={{ width: 250 }}>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                component="nav"
              >
                <ListItemButton 
                  href="/"
                  sx={{
                    borderBottom: "1px solid",
                    boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton
                  sx={{
                    borderBottom: "1px solid",
                    boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary="About Us" />
                </ListItemButton>
                <ListItemButton
                  sx={{
                    borderBottom: "1px solid",
                    boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <ListItemIcon>
                    <MiscellaneousServicesIcon />
                  </ListItemIcon>
                  <ListItemText primary="Services" />
                </ListItemButton>
              </List>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center", // Align the "Login" button to the center horizontally
                  marginTop: 2, // Add some margin to separate the button from the list
                }}
              >
                <Button
                  href="/login"
                  variant="contained"
                  sx={{
                    backgroundColor: "#367E18",
                    "&:hover": { backgroundColor: "#367E18" },
                    width: "100%", // Set the button width to fill the parent container
                  }}
                >
                  Login / SignUp
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center", // Align the "Login" button to the center horizontally
                  marginTop: 2, // Add some margin to separate the button from the list
                }}
              ></Box>
            </Box>
          </SwipeableDrawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
