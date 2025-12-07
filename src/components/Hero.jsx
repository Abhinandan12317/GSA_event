import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Hero = ({ eventName, venue, time, date, registrationLink }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: '60vh', // Adjust as needed
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        p: 3,
        bgcolor: 'rgba(66, 133, 244, 0.9)', // Google Blue
        backdropFilter: 'blur(10px)',
        webkitBackdropFilter: 'blur(10px)',
        borderRadius: 4, // 16px
        pointerEvents: 'auto',
        margin: 2,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 2, color: 'white' }}>
          {eventName}
        </Typography>
        <Typography variant="h5" component="h3" sx={{ mb: 1, color: 'rgba(255, 255, 255, 0.9)' }}>
          {date}
        </Typography>
        <Typography variant="h4" component="h2" sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.9)' }}>
          {venue} | {time}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href={registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            mt: 4,
            p: 2,
            fontSize: '1.2rem',
            fontWeight: 'bold',
            borderRadius: '50px',
            '&:hover': {
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease-in-out',
            },
          }}
        >
          Register here
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
