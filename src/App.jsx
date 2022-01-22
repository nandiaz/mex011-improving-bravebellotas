import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@material-ui/core'

import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import EditTable from "./Components/EditCommitment/EditCommitment";
import CalendarInfo from "./Components/Dashboard/SideBar/Calendar/CalendarInfo"

import "./Components/Styles/App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: '#001E52' //Azul marino
    },
    secondary: {
      main: '#3DB39E' //Verde fuerte
    },
    background: {
      main: '#F5F5F5' //Gris
    },
    grey:{
      50: '#D4D4D4'
    }
  },
  shape:{
    borderRadius: 10,
  },
  typography:{
    fontSize: 16,
  }
})

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Routes>
          <Route exact path="/login" element={<Login />} />
           <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/edit-commitment" element={<EditTable />} />
          <Route exact path= "/calendarInfo" element= {<CalendarInfo/>}/>
          <Route exact path="*" element={<>404 Page not Found</>} /> 
        </Routes>
    </ThemeProvider>
       
    </>
  );
}

export default App;
