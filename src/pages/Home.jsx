import React from "react";
import { Box, Typography } from "@mui/material";
import CardSlider from "../components/CardSlider";

const Home = () => {
  const images = [
    "/assets/image1.jpg",
    "/assets/image2.jpg",
    "/assets/image3.jpg"
  ]
  return (
    <Box
      component="div"
      overflow="hidden"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "17280px",
      }}
    >
      <Box
        component="header"
        display="flex"
        width="100%"
        height="767px"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Box
          position="absolute"
          sx={{
            width: "100%",
            zIndex: -1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: "767px",
            textAlign: "center",
          }}
        >
          <video
            src={process.env.PUBLIC_URL + "/assets/background_video.mp4"}
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              height: "767px",
              objectFit: "fill",
              zIndex: -2,
              filter: "blur(3px)",
              borderBottomRightRadius: "10%",
              borderBottomLeftRadius: "10%",
            }}
          />
        </Box>
        <Box
          position="absolute"
          display="flex"
          flexDirection="column"
          margin="0 40px "
          height="767px"
          justifyContent="space-evenly"
          alignItems="center"
          top="40%"
          transform="translate(-50%, -50%)"
          sx={{
            transform: {
              md: "translate(0, -40%)",
              sm: "translate(0, -40%)",
              xs: "translate(0, -40%)",
            },
          }}
        >
        <CardSlider
          sx={{
            display: "flex",
            width: "100%",
            maxWidth: { md: "963px", sm: "420px", xs: "300px" },
            height: { md: "330px", sm: "320px", xs: "219px" },
          }}
          images={images}
        />

        <Typography sx={{overflowWrap: "break-word",
          typography: {md: "h3", xs: "h4"}}} 
          maxWidth={{ md: "963px", sm: "420px", xs: "300px" }} 
          height="200px" 
          color="#fff"
          fontFamily="'Brush Script MT', cursive">
            From Soil to Soul: The Journey of Agriculture in Nourishing Communities and Fostering Connections
        </Typography>
      </Box>
    </Box>
    <Box
    component="main">
      
    </Box>
  </Box>
  );
};

export default Home;
