import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import atmeLogo from '../assets/atme_full.png';

const GoogleColorText = ({ text }) => {
    const googleColors = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'];
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {text.split('').map((char, index) => (
                <span key={index} style={{ color: googleColors[index % googleColors.length] }}>
                    {char}
                </span>
            ))}
        </Typography>
    );
};

const Header = ({ eventName }) => {
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      sx={{
        background: 'rgba(255, 255, 255, 0.05)',
        boxShadow: 'none',
        pointerEvents: 'auto',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar>
        <GoogleColorText text={eventName} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <img src={atmeLogo} alt="ATME College of Engineering" style={{ height: '50px' , background: 'white', borderRadius: '10px'}} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
