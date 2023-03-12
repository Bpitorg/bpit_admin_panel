import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import http_lib from '../../../http/http';
import { rowsPerPage } from '../../../constants/constants';
import TableHeaders from '../../common/tableHeaders';
// import TextField from '@mui/material/TextField';
// import SearchIcon from '@mui/icons-material/Search';
// import IconButton from '@mui/material/IconButton';
import { SUBJECTS_URL } from '../../../constants/apiEndpoints';

function ListSubjects({ setLoader }) {
  const [subjectsList, setSubjectsList] = useState([])
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0)
  // const [searchQuery, setSearchQuery] = useState('')

  const tableColumns = ["Subject Code", "Subject Name"]

  const handleRequest = (page_no) => {
    setLoader(true)
    http_lib.get(SUBJECTS_URL + `?page=${page_no}`)
      .then((res) => {
        setSubjectsList(res.data['results'])
        setCount(res.data['count'])
        setLoader(false)
      })
      .catch((err) => {
        setLoader(false)
        console.log(err)
      })
  }

  useEffect(() => {
    handleRequest(1)
    // eslint-disable-next-line
  }, [])

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
    handleRequest(newPage + 1)
  };

  // const searchSubject = (_) => {
  //   if (searchQuery.length <= 6)
  //     return
  //   // make api call
  // }

  return (
    <>
      {/* <TextField
        value={searchQuery}
        sx={{ mb: 2, p: 0 }}
        placeholder='Search Subjects'
        variant="outlined"
        fullWidth
        size='small'
        InputProps={{
          endAdornment: (
            <IconButton variant="text" color='primary' onClick={searchSubject} > <SearchIcon /> </IconButton>
          ),
        }}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={searchSubject}
      /> */}

      <Paper sx={{ width: '100%', mb: 1 }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHeaders columns={tableColumns} />
            <TableBody>
              {subjectsList.map((subject, key) => (
                <TableRow hover key={key}>
                  <TableCell>{subject['subject_code']}</TableCell>
                  <TableCell>{subject['subject_name']}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          rowsPerPageOptions={[]}
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </Paper>
    </>
  )
}

export default ListSubjects;