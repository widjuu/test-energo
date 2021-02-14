import { useDispatch, useSelector } from "react-redux";

// components
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";

import { toggleUser } from "../actions";

export const UserTableRow = ({ id, name, phone, address }) => {
  const dispatch = useDispatch();
  const selectedUsers = useSelector((state) => state.selectedUsers.selected);
  const isSelected = !!selectedUsers[id];

  const onClick = () => dispatch(toggleUser({ id, zipcode: address?.zipcode }));

  return (
    <TableRow hover>
      <TableCell>{name}</TableCell>
      <TableCell align="right">{phone}</TableCell>
      <TableCell padding="checkbox">
        <Checkbox checked={isSelected} onChange={onClick} />
      </TableCell>
    </TableRow>
  );
};
