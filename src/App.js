import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

import { Map } from "./feat/users/components/Map";
import { UserTable } from "./feat/users/components/UserTable";

// redux
import { getUsers } from "./feat/users/actions";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  error: {
    color: palette.error.main,
  },
  appWrapper: {
    display: "flex",
    [breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

export const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (users?.loading) {
    return (
      <Box
        display="flex"
        width="100vw"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress size={100} />
      </Box>
    );
  }

  if (users?.error) {
    return (
      <Box className={classes.error}>{users?.error ?? "Произошла ошибка"}</Box>
    );
  }

  return (
    <>
      <Box className={classes.appWrapper}>
        <UserTable />
        <Box flexGrow={1}>
          <Map />
        </Box>
      </Box>
    </>
  );
};
