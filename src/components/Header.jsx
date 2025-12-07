import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import gsaLogo from '../assets/GSA.png';
import atmeLogo from '../assets/atme_logo.png';

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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
          {eventName}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Box sx={{ bgcolor: 'white', p: 0.5, borderRadius: 1 }}>
            <img src={gsaLogo} alt="Google Student Ambassador Program" style={{ height: '40px' }} />
          </Box>
          <img src={atmeLogo} alt="ATME College of Engineering" style={{ height: '50px' }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
