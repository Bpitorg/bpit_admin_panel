import * as React from "react";
import {useState, useEffect} from 'react'
import Box from "@mui/material/Box";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import axios from "axios";


function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter />
    </Box>
  );
}


const VISIBLE_FIELDS = ["enrollment number","name", "year", "branch", "section", "group"];

export default function QuickFilteringCustomLogic() {
  const [objData, setObjData] = useState([]);
const config = {
  headers: {
    Authorization: 'Token '+localStorage.getItem('token'),
  },
};
  useEffect(() => {
    axios
      .get(`/student/profile/search?query=`,config)
      .then((res) => {
        const persons = res.data;
        setObjData(...persons);
        console.log(objData)
      });
  }, []);
  const { data } = useDemoData({
    dataSet: "Employee",
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });
  // console.log(data.columns);

  // Otherwise filter will be applied on fields such as the hidden column id
  const columns = React.useMemo(
    () => [
      {
        field: "enrollment number",
        headerName: "E.NO",
        width: 175,
      },
      {
        field: "name",
        headerName: "Name",
        width: 250,
      },
      {
        field: "batch",
        headerName: "Batch",
        width: 150,
      },
      {
        field: "branch",
        headerName: "Branch",
        width: 100,
      },
      {
        field: "section",
        headerName: "Section",
        width: 100,
      },
      {
        field: "group",
        headerName: "Group",
        width: 100,
      },
      {
        field: "class_roll_number",
        headerName: "Class Roll No.",
        width: 150,
      },
    ],
    []
  );

  return (
    <Box sx={{ height: 400, width: 1 }}>
      <DataGrid
        {...data}
        columns={columns}
        components={{ Toolbar: QuickSearchToolbar }}
      />
    </Box>
  );
}