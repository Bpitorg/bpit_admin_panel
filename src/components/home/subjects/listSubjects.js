import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import { SUBJECTS_URL } from '../../../constants/api_endpoints';
import http_lib from '../../../http/http';
import { AddSerialNo } from '../../../utils/utils';

function ListSubjects({ setLoader }) {
  const [subjectsList, setSubjectsList] = useState([])
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - subjectsList.length) : 0;

  useEffect(() => {
    setLoader(true)
    http_lib.get(SUBJECTS_URL)
      .then((res) => {
        setSubjectsList(AddSerialNo(res.data))
        setLoader(false)
      })
      .catch((err) => {
        setLoader(false)
        console.log(err)
      })
    // eslint-disable-next-line
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', mb: 1 }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S. No</TableCell>
              <TableCell>Subject Code</TableCell>
              <TableCell>Subjects Name</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? subjectsList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : subjectsList
            ).map((subject, key) => (
              <TableRow hover key={key}>
                {/* <TableCell>{key + 1}</TableCell> */}
                <TableCell>{subject['sno']}</TableCell>
                <TableCell>{subject['subject_name']}</TableCell>
                <TableCell>{subject['subject_code']}</TableCell>
                <TableCell>View edit delete</TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={4} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20]}
        component="div"
        count={subjectsList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default ListSubjects;