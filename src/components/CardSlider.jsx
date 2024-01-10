import { Typography, Box, Card, CardMedia, keyframes } from '@mui/material'
import React, { useState } from 'react'

const CardSlider = ({sx, images}) => {

  const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }`;

  const [current, setCurrent] = useState(0);

  const handleClick = (index) => {
    console.log("Box Clicked");
    setCurrent(index);
  }

  return (
    <Card sx={sx}>
      <Card sx={{display: {md: "flex", xs: "none"}, justifyContent: "space-evenly", alignItems: "center", width: "45%", backgroundColor: '#abc728', flexDirection: "column"}}>
        <Box width="100%" color='#fff'>
          <Typography display={current === 0 ? 'block': 'none'} variant='h3' width="50%" margin="auto">Connecting Farmers</Typography>
          <Typography display={current === 1 ? 'block': 'none'} variant='h4' width="50%" margin="auto">Providing consultancy and services</Typography>
          <Typography display={current === 2 ? 'block': 'none'} variant='h3' width="50%" margin="auto">Agricultural Products</Typography>
        </Box>
        <Box paddingRight="40px" width="100%" display="flex"
        justifyContent="center" alignItems="center"
        >
          <Box component="div" onClick={() => handleClick(0)} width="44px" height="2px" borderRadius="2px" margin="2px" 
          sx={{
            backgroundColor: current === 0 ? ' rgb(228, 255, 116)' : 'white', 
            "&:hover":{cursor: "pointer"}
        }}></Box>
          <Box onClick={() => handleClick(1)} width="44px" height="2px" bgcolor="#fff" borderRadius="2px" margin="2px"
          sx={{
            backgroundColor: current === 1 ? ' rgb(228, 255, 116)' : 'white', 
            "&:hover":{cursor: "pointer"}
        }}></Box>
          <Box onClick={() => handleClick(2)} width="44px" height="2px" bgcolor="#fff" borderRadius="2px" margin="2px"
          sx={{
            backgroundColor: current === 2 ? ' rgb(228, 255, 116)' : 'white', 
            "&:hover":{cursor: "pointer"}
        }}></Box>
        </Box>
      </Card>
      <Card sx={{display: "flex", width: {md: "65%", xs: "100%"}}}>
        {images.map((image, index) => (
          index === current && (
            <CardMedia 
              key={index}
              component="img"
              image={image}
              alt='slide'
              sx={{ objectFit: 'cover',
            animation: `${fadeIn} 3s ease-in-out forwards` }}
            />
          )
      ))}
      </Card>
    </Card>
  );
}

export default CardSlider