import React from 'react';
import { Box, Typography, Container, Paper, Grid, Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useTheme } from '@mui/material/styles';

const Venue = () => {
  const theme = useTheme();
  return (
    <Box sx={{ py: 8, bgcolor: 'transparent' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold', color: 'white' }}>
          Venue Details
        </Typography>
        <Paper elevation={3} sx={{ 
          p: 4, 
          borderRadius: 4, // 16px
          bgcolor: 'rgba(66, 133, 244, 0.9)', 
          backdropFilter: 'blur(10px)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)'
          }
        }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 2, color: 'white' }}>
                ATME College of Engineering
              </Typography>
              <Typography variant="h6" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.9)' }}>
                13th Kilometer, Bannur Road, Mysuru, Karnataka 570028
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOnIcon sx={{ mr: 1, color: 'white' }} />
                <Link href="https://maps.app.goo.gl/oj1q5e8oWhAYfXJV6" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', pointerEvents: 'auto' }}>
                  View on Google Maps
                </Link>
              </Box>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                The event will be held in the main seminar hall. Look for the "Gemini-CLI" event banners upon arrival.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Improved Map Placeholder */}
              <Box
                sx={{
                  position: 'relative',
                  height: 300,
                  bgcolor: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  overflow: 'hidden', // to contain the link styles
                }}
              >
                <Link 
                  href="https://maps.app.goo.gl/oj1q5e8oWhAYfXJV6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{
                    p: 2,
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    borderRadius: 1,
                    textDecoration: 'none',
                    transition: 'background-color 0.3s',
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.7)',
                    },
                    pointerEvents: 'auto',
                  }}
                >
                  Click to View on Google Maps
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Venue;
