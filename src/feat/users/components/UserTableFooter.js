import { useSelector, useDispatch } from "react-redux";

// components
import { Spin, Button } from "antd";

// redux
import { sendSelectedUsers } from "../actions";

export const UserTableFooter = () => {
  const dispatch = useDispatch();

  const selectedUsers = useSelector((state) => state.selectedUsers.selected);
  const loading = useSelector((state) => state.selectedUsers.loading);
  const error = useSelector((state) => state.selectedUsers.error);

  const disabled = Object.keys(selectedUsers).length === 0;

  const onButtonClick = () => dispatch(sendSelectedUsers(selectedUsers));

  return (
    <div className="user-table-footer">
      <Button
        type="primary"
        shape="round"
        icon={loading ? <Spin size="large" /> : undefined}
        onClick={onButtonClick}
        disabled={disabled}
        color={error ? "secondary" : "primary"}
      >
        Отправить
      </Button>
      {error ? <div>{error}</div> : null}
    </div>
  );
};
