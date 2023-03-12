import React from 'react';
import { Grid, Paper, Tab, Divider } from '@mui/material';
import { TabPanel, TabContext, TabList } from '@mui/lab';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ListAltIcon from '@mui/icons-material/ListAlt'
import ListSubjects from './listSubjects';
import AddSubjects from './addSubjects';

export default function Subjects({ setLoader }) {
  const [value, setValue] = React.useState('2');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <TabContext value={value}>
          <TabList onChange={handleChange} >
            <Tab value='1' icon={<ListAltIcon />} iconPosition='start' label="List Subjects" />
            <Tab value='2' icon={<PostAddIcon />} iconPosition='start' label="Add Subjects" />
          </TabList>
          <Divider />
          <TabPanel value='1'><ListSubjects setLoader={setLoader} /></TabPanel>
          <TabPanel value='2'><AddSubjects setLoader={setLoader} /></TabPanel>
        </TabContext>
      </Paper>
    </Grid>
  )
}
