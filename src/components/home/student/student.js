import React from 'react';
import { Grid, Paper, Tab, Divider } from '@mui/material';
import { TabPanel, TabContext, TabList } from '@mui/lab';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ListStudent from './listStudent';
import StudentsData from './StudentsData';

export default function Student() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <TabContext value={value}>
          <TabList onChange={handleChange} >
            <Tab value='1' icon={<ListAltIcon />} iconPosition='start' label="List Students" />
            <Tab value='2' icon={<PersonAddAlt1Icon />} iconPosition='start' label="Add Student" />
          </TabList>
          <Divider />
          {/* <TabPanel value='1'><ListStudent /></TabPanel> */}
          <TabPanel value='1'><StudentsData/></TabPanel>
        </TabContext>
      </Paper>
    </Grid>
  )
}
