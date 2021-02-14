import { useSelector, useDispatch } from "react-redux";

// components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

// redux
import { sendSelectedUsers } from "../actions";

const useStyles = makeStyles(({ palette }) => ({
  error: {
    color: palette.error.main,
  },
}));

export const UserTableFooter = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const selectedUsers = useSelector((state) => state.selectedUsers.selected);
  const loading = useSelector((state) => state.selectedUsers.loading);
  const error = useSelector((state) => state.selectedUsers.error);

  const disabled = Object.keys(selectedUsers).length === 0;

  const onButtonClick = () => dispatch(sendSelectedUsers(selectedUsers));

  return (
    <Box display="flex" alignItems="center" px={3} my={1}>
      <Button
        startIcon={
          loading ? <CircularProgress size={20} color="secondary" /> : undefined
        }
        onClick={onButtonClick}
        disabled={disabled}
        variant="contained"
        color={error ? "secondary" : "primary"}
      >
        Отправить
      </Button>
      {error ? (
        <Box ml={2} className={classes.error}>
          {error}
        </Box>
      ) : null}
    </Box>
  );
};
