import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/home/dashboard';
import Home from './components/home/home';
import Student from './components/home/student/student';
import Login from './components/login/login';
import Faculty from './components/home/faculty/faculty';

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="students" element={<Student />} />
            <Route path="faculty" element={<Faculty />} />
          </Route>
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
      {/* <Button sx={{ float: "right", position:"absolute" }} >
        LightMode
      </Button> */}
    </ThemeProvider>
  );
}
