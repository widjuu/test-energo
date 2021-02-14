import { useSelector } from "react-redux";

//components
import { makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

import { UserTableRow } from "./UserTableRow";
import { UserTableHeader } from "./UserTableHeader";
import { UserTableFooter } from "./UserTableFooter";

const useStyles = makeStyles(({ breakpoints }) => ({
  table: {
    margin: "10px",
    width: "500px",
    [breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

export const UserTable = () => {
  const classes = useStyles();
  const data = useSelector((state) => state.users.data);

  return (
    <Paper>
      <TableContainer className={classes.table}>
        <Table size="small">
          <UserTableHeader />
          <TableBody>
            {data.map((row) => (
              <UserTableRow key={row.id} {...row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <UserTableFooter />
    </Paper>
  );
};
