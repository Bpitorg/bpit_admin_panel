import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
import './loader.css';

export default function Loader(props) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    setOpen(props.show)
  }, [props.show])

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <div className="loading-1">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </Backdrop>
    </div>
  );
}
