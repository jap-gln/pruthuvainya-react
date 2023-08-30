import React from 'react'
import { Box, Button, Typography } from '@mui/material';

const Home = () => {
    return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '1600vh',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '85vh',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <video
              src={process.env.PUBLIC_URL + '/assets/background_video.mp4'}
              autoPlay
              muted
              loop
              style={{
                width: '100%',
                height: '96vh',
                objectFit: 'cover',
                position: 'absolute',
                zIndex: -2,
                top: 0,
                left: 0
              }}
            />
            <Button
              variant='outlined'
              sx={{
                color: 'white',
                borderColor: 'white',
                borderRadius: '20px',
                zIndex: 1,
              }}
            >
              <Typography variant="h4">Explore</Typography>
            </Button>
          </Box>
        </Box>
      );
}

export default Home