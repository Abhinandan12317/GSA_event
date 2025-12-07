import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import gsaLogo from '../assets/GSA.png';
import atmeLogo from '../assets/atme_logo.png';

const Header = ({ eventName }) => {
  const theme = useTheme();
  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', pointerEvents: 'auto' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'white' }}>
          {eventName}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Box sx={{ bgcolor: 'white', p: 0.5, borderRadius: 1 }}>
            <img src={gsaLogo} alt="Google Student Ambassador Program" style={{ height: '45px' }} />
          </Box>
          <img src={atmeLogo} alt="ATME College of Engineering" style={{ height: '55px' }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
