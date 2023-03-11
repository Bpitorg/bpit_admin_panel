import * as React from 'react';
import PropTypes from 'prop-types';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { ListItemIcon, List, Divider } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import SchoolIcon from '@mui/icons-material/School';
// import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {
  Link as RouterLink,
} from 'react-router-dom';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default function SideBar(props) {
  return (
    <Drawer variant="permanent" open={props.open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={props.toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {mainListItems}
      </List>
    </Drawer>
  )
}

const mainListItems = (
  <React.Fragment>
    <ListItemLink
      to="students"
      primary="Students"
      icon={
        <Tooltip title={<h3>Students</h3>} placement='right'>
          <IconButton>
            <SchoolIcon />
          </IconButton>
        </Tooltip>
      }
    />
    <ListItemLink
      to="faculty"
      primary="Faculties"
      icon={
        <Tooltip title={<h3>Faculties</h3>} placement='right'>
          <IconButton>
            <PeopleIcon />
          </IconButton>
        </Tooltip>
      }
    />
    <ListItemLink
      to="subjects"
      primary="Subjects"
      icon={
        <Tooltip title={<h3>Subjects</h3>} placement='right'>
          <IconButton>
            <LibraryBooksIcon />
          </IconButton>
        </Tooltip>
      }
    />
  </React.Fragment >
);
