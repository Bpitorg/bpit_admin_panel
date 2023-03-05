import * as React from 'react'
import AppBar from './appbar'
import SideBar from './sidebar'

export function Navbar({ open, toggleDrawer, setLoader }) {
  return (
    <>
      <AppBar
        xs={{ backgroundColor: "blue" }}
        open={open}
        toggleDrawer={toggleDrawer}
        setLoader={setLoader}
      />
      <SideBar
        xs={{ backgroundColor: "blue" }}
        open={open}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
}