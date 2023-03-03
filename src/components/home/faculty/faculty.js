import React from 'react';
import { Grid, Paper, Tab, Divider } from '@mui/material';
import { TabPanel, TabContext, TabList } from '@mui/lab';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddFaculty from './AddFaculty';

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
            <Tab value='1' icon={<ListAltIcon />} label="List Faculty" />
            <Tab value='2' icon={<PersonAddAlt1Icon />} label="Add Faculty" />
          </TabList>
          <Divider />
          <TabPanel value='1'>1</TabPanel>
          <TabPanel value='2'><AddFaculty /></TabPanel>
        </TabContext>
      </Paper>
    </Grid>
  )
}