import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const Main = ({ drawerWidth }) => (
  <Box
    component="main"
    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
  >
    <Toolbar />
    <Typography sx={{ marginBottom: 2 }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua...
    </Typography>
    <Typography sx={{ marginBottom: 2 }}>
      Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
      ullamcorper eget nulla facilisi etiam dignissim diam...
    </Typography>
  </Box>
);

Main.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
};

export default Main;
