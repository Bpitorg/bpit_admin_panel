import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function TableHeaders({ columns }) {
  return (
    <TableHead>
      <TableRow>
        {
          columns.map((val, key) => <TableCell key={key}>{val}</TableCell>)
        }
      </TableRow>
    </TableHead>
  )
}

export default TableHeaders;