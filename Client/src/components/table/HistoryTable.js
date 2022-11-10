import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'batchId', label: 'Batch\u00a0ID', minWidth: 80, align: 'center'},
  { id: 'date', label: 'Date', minWidth: 80, align: 'center'},
  { id: 'quantity', label: 'Quantity', minWidth: 80, align: 'center'},
  { id: 'by', label: 'By', minWidth: 80, align: 'center'}
];

function createData(batchId, date, quantity, by) {
  return {batchId, date, quantity, by};
}

const data = [
  {batchId: '3287263', date: '6-Jun-2022', quantity: 1324171354, by: "Afrina Akhter"},
  {batchId: '3287263', date: '6-Jun-2022', quantity: 1324171354, by: "Afrina Akhter"},
  {batchId: '3287263', date: '6-Jun-2022', quantity: 1324171354, by: "Afrina Akhter"},
  {batchId: '3287263', date: '6-Jun-2022', quantity: 1324171354, by: "Afrina Akhter"},
  {batchId: '3287263', date: '6-Jun-2022', quantity: 1324171354, by: "Afrina Akhter"},
  {batchId: '3287263', date: '6-Jun-2022', quantity: 1324171354, by: "Afrina Akhter"},
  {batchId: '3287263', date: '6-Jun-2022', quantity: 1324171354, by: "Afrina Akhter"},
  {batchId: '3287263', date: '6-Jun-2022', quantity: 1324171354, by: "Afrina Akhter"},
  {batchId: '3287263', date: '6-Jun-2022', quantity: 1324171354, by: "Afrina Akhter"},
  {batchId: '3287263', date: '6-Jun-2022', quantity: 1324171354, by: "Afrina Akhter"},
  {batchId: '3287263', date: '6-Jun-2022', quantity: 1324171354, by: "Afrina Akhter"},
  {batchId: '3287263', date: '6-Jun-2022', quantity: 1324171354, by: "Afrina Akhter"},
  {batchId: '3287263', date: '6-Jun-2022', quantity: 1324171354, by: "Afrina Akhter"},
  {batchId: '3287263', date: '6-Jun-2022', quantity: 1324171354, by: "Afrina Akhter"},
  {batchId: '3287263', date: '6-Jun-2022', quantity: 1324171354, by: "Afrina Akhter"},
  {batchId: '3287263', date: '6-Jun-2022', quantity: 1324171354, by: "Afrina Akhter"},
  {batchId: '3287263', date: '6-Jun-2022', quantity: 1324171354, by: "Afrina Akhter"},
  {batchId: '3287263', date: '6-Jun-2022', quantity: 1324171354, by: "Afrina Akhter"},
  {batchId: '3287263', date: '6-Jun-2022', quantity: 1324171354, by: "Afrina Akhter"},
  {batchId: '3287263', date: '6-Jun-2022', quantity: 1324171354, by: "Afrina Akhter"},
  {batchId: '3287263', date: '6-Jun-2022', quantity: 1324171354, by: "Afrina Akhter"}
];

let rows = [];
  data.map(mp => rows.push(createData(mp.batchId, mp.date, mp.quantity, mp.by)))

export default function StockReportTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 590 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
