import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>Areas of focus</Toolbar>
      <Toolbar>Action plan</Toolbar>
      <Toolbar>Planned deliberate practice</Toolbar>
      <Toolbar>Accountability</Toolbar>
      <Toolbar>Deliberate practice log</Toolbar>
    </AppBar>
  );
};
export default NavBar;
