import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Header from './Header';
import Sidebar from './SideBar';
import Main from './Main';

const drawerWidth = 240;

const Layout = ({ window }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} m={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
      <CssBaseline />
      <Header
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <Sidebar
        container={container}
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        drawerWidth={drawerWidth}
      />
      <Main drawerWidth={drawerWidth} />
    </Box>
  );
};

Layout.propTypes = {
  window: PropTypes.func,
};

export default Layout;
