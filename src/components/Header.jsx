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
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img src={gsaLogo} alt="Google Student Ambassador Program" style={{ height: '50px', marginRight: '10px' }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
