import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{
      bgcolor: 'rgba(30, 30, 30, 0.8)', // Semi-transparent dark grey
      color: 'white',
      py: 3,
      position: 'relative',
      zIndex: 1,
      mt: 'auto', // Push to the bottom
      width: '100%',
      backdropFilter: 'blur(5px)', // Blur effect for frosted glass look
      webkitBackdropFilter: 'blur(5px)', // Safari support
      pointerEvents: 'auto',
    }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Gemini-CLI Learn and Build. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
