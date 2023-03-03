import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import http_lib from "../../../http/http";
import { STUDENTS_LIST_URL } from "../../../constants/api_endpoints";

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

export default function QuickFilteringCustomLogic() {
  const [objData, setObjData] = useState([]);
  const config = {
    headers: {
      Authorization: "Token " + localStorage.getItem("token"),
    },
  };
  useEffect(() => {
    http_lib.get(STUDENTS_LIST_URL, config).then((res) => {
      const persons = res.data;
      setObjData(persons);
      // console.log(persons);
    });
  }, []);

  const useData = {rows:objData}
  useEffect(() => {
    console.log(useData);
  }, []);
  // Otherwise filter will be applied on fields such as the hidden column id
  const columns = React.useMemo(
    () => [
      {
        field: "enrollment_number",
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
        field: "student_group",
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
    <Box sx={{ height: 600, width: 1 }}>
      <DataGrid
        getRowId={(row) => row.enrollment_number}
        {...useData}
        columns={columns}
        components={{ Toolbar: QuickSearchToolbar }}
      />
    </Box>
  );
}
