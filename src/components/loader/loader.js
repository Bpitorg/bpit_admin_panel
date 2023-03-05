import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import './loader.css';

export default function Loader(props) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    setOpen(props.show)
  }, [props.show])

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 20 }}
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
