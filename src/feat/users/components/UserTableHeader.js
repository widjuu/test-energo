import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export const UserTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Имя</TableCell>
        <TableCell align="right">Телефон</TableCell>
        <TableCell padding="checkbox"></TableCell>
      </TableRow>
    </TableHead>
  );
};
