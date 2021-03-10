import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import { Spin } from "antd";

import { UserTableFooter } from "./feat/users/components/UserTableFooter";
import { Map } from "./feat/users/components/Map";
import { UserTable } from "./feat/users/components/UserTable";

// redux
import { getUsers } from "./feat/users/actions";

export const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (users?.loading) {
    return (
      <div className="error-layout">
        <Spin size="large" />
      </div>
    );
  }

  if (users?.error) {
    return <div>{users?.error ?? "Произошла ошибка"}</div>;
  }

  return (
    <>
      <div>
        <UserTable />
        <UserTableFooter />
        <div style={{ flexGrow: 1 }}>
          <Map />
        </div>
      </div>
    </>
  );
};
