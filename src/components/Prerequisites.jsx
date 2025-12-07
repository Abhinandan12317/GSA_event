import React from 'react';
import { Box, Typography, Container, Paper, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import { useTheme } from '@mui/material/styles';

const prerequisites = [
  {
    icon: <LaptopMacIcon color="primary" />,
    primary: 'Your Laptop',
    secondary: 'A personal laptop is required for the hands-on session.',
  },
  {
    icon: <CodeIcon color="primary" />,
    primary: 'Basic Command Line Knowledge',
    secondary: 'Familiarity with basic terminal/shell commands (cd, ls, mkdir).',
  },
  {
    icon: <WebIcon color="primary" />,
    primary: 'Modern Web Browser',
    secondary: 'Google Chrome, Firefox, or Microsoft Edge are recommended.',
  },
];

const Prerequisites = () => {
  const theme = useTheme();
  return (
    <Box sx={{ py: 8, bgcolor: 'transparent' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold', color: 'white' }}>
          What to Bring
        </Typography>
        <Paper elevation={3} sx={{ 
          p: 4, 
          borderRadius: 4, // 16px
          bgcolor: 'rgba(244, 180, 0, 0.9)', 
          backdropFilter: 'blur(10px)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)'
          }
        }}>
          <Grid container spacing={4}>
            {prerequisites.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ListItemIcon sx={{ fontSize: 40, mr: 2 }}>{item.icon}</ListItemIcon>
                  <Box>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: 'white' }}>
                      {item.primary}
                    </Typography>
                    <Typography color="rgba(255, 255, 255, 0.9)">{item.secondary}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Prerequisites;
