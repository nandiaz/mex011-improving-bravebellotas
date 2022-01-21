import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav bar example">
        <LinkTab label="Areas of focus" href="/drafts" />
        <LinkTab label="Action plan" href="/trash" />
        <LinkTab label="Planned deliberate practices" href="/spam" />
        <LinkTab label="Accountability" href="/drafts" />
        <LinkTab label="Deliberate practice log" href="/trash" />
      </Tabs>
    </Box>
  );
}
