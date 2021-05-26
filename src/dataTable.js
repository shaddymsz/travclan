import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function DataTable({ data }) {
  const maxBid = () => {
    var highest = data[6].bids.sort((a, b) => b.amount - a.amount)[0];
    return highest.amount;
  };
  const minBid = () => {
    var minimum = data[9].bids.sort((a, b) => a.amount - b.amount)[0];
    return minimum.amount;
  };
  const [maxbid, setMaxbid] = useState(true);
  const handleClick = () => {
    minBid();
    setMaxbid(!maxbid);
  };
  // console.log(data[1].bids[1].amount);

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Premium</TableCell>

            <TableCell align="right">
              <Button className="btn btn-primary" onClick={handleClick}>
                Min/Max
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} onClick={() => console.log(row.id)}>
              <TableCell component="th" scope="row">
                {row.firstname}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">
                {row.hasPremium ? <p>Yes</p> : <p>No</p>}
              </TableCell>
              <TableCell align="right">
                {maxbid ? <p>{maxBid(row.bids)}</p> : <p>{minBid(row.bids)}</p>}
              </TableCell>

              <TableCell>{row.bids.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
