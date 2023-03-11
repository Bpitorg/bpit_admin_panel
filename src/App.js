import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { HashRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Student from './components/home/student/student';
import Login from './components/login/login';
import { Dashboard } from '@mui/icons-material';
import Loader from './components/loader/loader';
import Subjects from './components/home/subjects/subjects';
// import Faculty from './components/home/faculty/faculty';

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');
  const [loader, setLoader] = React.useState(false)

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
      <Loader show={loader} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setLoader={setLoader} />} />
          <Route path="/login" element={<Login setLoader={setLoader} />} />
          <Route path="/home" element={<Home setLoader={setLoader} />}>
            <Route path="dashboard" element={<Dashboard setLoader={setLoader} />} />
            <Route path="students" element={<Student setLoader={setLoader} />} />
            <Route path="subjects" element={<Subjects setLoader={setLoader} />} />
            {/* <Route path="faculty" element={<Faculty setLoader={setLoader} />} /> */}
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
