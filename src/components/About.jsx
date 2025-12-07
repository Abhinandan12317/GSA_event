import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';

const speakerImages = {
  '1.jpeg': img1,
  '2.jpeg': img2,
  '3.jpeg': img3,
};

const speakers = [
  {
    name: 'Abhinandan',
    title: 'Google Student Ambassador',
    image: '1.jpeg',
    description: 'Abhinandan is a passionate advocate for technology and community building. As a Google Student Ambassador, he helps students explore Google technologies and foster innovation.',
  },
  {
    name: 'Lakshmi M',
    title: 'Google Student Ambassador',
    image: '2.jpeg',
    description: 'Lakshmi M is dedicated to empowering her peers through technology. Her work as a Google Student Ambassador involves organizing workshops and tech talks to spread knowledge.',
  },
  {
    name: 'Bhuvan D N',
    title: 'Google Student Ambassador',
    image: '3.jpeg',
    description: 'Bhuvan D N focuses on creating impactful learning experiences. Through his role as a Google Student Ambassador, he aims to inspire the next generation of developers and innovators.',
  },
];

const About = () => {
  const theme = useTheme();
  return (
    <Box sx={{
      py: 8,
      bgcolor: 'rgba(0, 0, 0, 0.2)',
      color: theme.palette.text.primary,
      position: 'relative',
      zIndex: 1,
    }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 6, color: 'white' }}>
          About the Speakers
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {speakers.map((speaker, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3,
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4, // 16px
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)'
                }
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3 }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: 160,
                      height: 160,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: `3px solid ${theme.palette.primary.main}`,
                    }}
                    image={speakerImages[speaker.image]}
                    alt={speaker.name}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5" component="h3" sx={{ color: 'white' }}>
                    {speaker.name}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    {speaker.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', mt: 2 }}>
                    {speaker.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography variant="body1" sx={{ textAlign: 'center', mt: 4, fontStyle: 'italic', color: theme.palette.text.secondary }}>
          The speakers are excited to share their knowledge and connect with you!
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
