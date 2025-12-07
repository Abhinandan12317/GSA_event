import React from 'react';
import { Box, Typography, Container, Grid, Link, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import atmeLogo from '../assets/atme_full.png';

const sponsors = [
  {
    name: 'ATME College of Engineering',
    logo: atmeLogo,
    url: 'https://atme.edu.in/',
  },
];

const Sponsors = () => {
  const theme = useTheme();
  return (
    <Box sx={{ py: 8, bgcolor: 'transparent', pointerEvents: 'auto', margin: 0 }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold', color: 'white' }}>
          Our Host
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {sponsors.map((sponsor, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Link href={sponsor.url} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none' }}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 120,
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: 6,
                    },
                    bgcolor: 'rgba(255, 255, 255, 0.9)', 
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4, // 16px
                  }}
                >
                  <img src={sponsor.logo} alt={`${sponsor.name} logo`} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', height: '100px' }} />
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};


export default Sponsors;
