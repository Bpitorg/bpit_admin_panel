import React from 'react';
import { Grid, Paper, Tab, Divider } from '@mui/material';
import { TabPanel, TabContext, TabList } from '@mui/lab';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ListAltIcon from '@mui/icons-material/ListAlt'
import ListSubjects from './listSubjects';

export default function Subjects({ setLoader }) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <TabContext value={value}>
          <TabList onChange={handleChange} >
            <Tab value='1' icon={<ListAltIcon />} iconPosition='start' label="List Subjects" />
            {/* <Tab value='2' icon={<PersonAddAlt1Icon />} iconPosition='start' label="Add Subjects" /> */}
          </TabList>
          <Divider />
          <TabPanel value='1'><ListSubjects setLoader={setLoader} /></TabPanel>
          {/* <TabPanel value='2'>Add subjects</TabPanel> */}
        </TabContext>
      </Paper>
    </Grid>
  )
}
