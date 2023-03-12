import React from 'react';
import { Grid, Paper, Tab, Divider } from '@mui/material';
import { TabPanel, TabContext, TabList } from '@mui/lab';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupsIcon from '@mui/icons-material/Groups';
import AddFaculty from './addFaculty';

export default function Faculty() {
  const [value, setValue] = React.useState('2');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <TabContext value={value}>
          <TabList onChange={handleChange} >
            <Tab value='1' icon={<GroupsIcon />} iconPosition='start' label="List Faculty" />
            <Tab value='2' icon={<GroupAddIcon />} iconPosition='start' label="Add Faculty" />
          </TabList>
          <Divider />
          <TabPanel value='1'>1</TabPanel>
          <TabPanel value='2'><AddFaculty /></TabPanel>
        </TabContext>
      </Paper>
    </Grid>
  )
}