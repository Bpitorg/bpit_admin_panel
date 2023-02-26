import * as React from 'react'
import AppBar from './appbar'
import SideBar from './sidebar'

export function Navbar(props) {
  return (
    <>
      <AppBar
        xs={{ backgroundColor: "blue" }}
        open={props.open}
        toggleDrawer={props.toggleDrawer}
      />
      <SideBar
        xs={{ backgroundColor: "blue" }}
        open={props.open}
        toggleDrawer={props.toggleDrawer}
      />
    </>
  );
}