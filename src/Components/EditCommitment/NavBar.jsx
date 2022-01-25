import * as React from 'react';
import "../Styles/NavBar.css";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { IconButton } from '@material-ui/core';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box style={{ backgroundColor: '#3DB39E'}} sx={{ width: '100%', pl: 8, pr: 8, position:"fixed", zIndex:"100" }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav bar">
        <IconButton>
          <DashboardIcon style={{ color: '#2A594D'}} />
          <LinkTab label="Dashboard" href="/Dashboard" style={{ color: 'black'}} />
        </IconButton>
        <LinkTab label="Areas of focus" href="/Areas-Of-Focus" />
        <LinkTab label="Action plan" href="/Action-Plan" />
        <LinkTab label="Planned deliberate practices" href="/Planned-Deliberate-Practices" />
        <LinkTab label="Accountability" href="/Accountability" />
        <LinkTab label="Deliberate practice log" href="/Deliberate-Practice-Log" Link to={`/`} />
      </Tabs>
    </Box>
  );
}
