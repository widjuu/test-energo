import { useDispatch, useSelector } from "react-redux";

//components
import { Table } from "antd";

//utils
import { toggleUser } from "../actions";

const columns = [
  {
    title: "Имя",
    dataIndex: "name",
  },
  {
    title: "Телефон",
    dataIndex: "phone",
  },
];

export const UserTable = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.data);
  const selectedUsers = useSelector((state) => state.selectedUsers.selected);

  const dataSource = data.map((userId) => {
    return {
      id: userId?.id,
      name: userId?.name,
      key: userId?.id,
      phone: userId?.phone,
      address: userId?.address,
    };
  });

  const selectedRowKeys = Object.keys(selectedUsers).map((userId) => {
    const user = selectedUsers[userId];

    return user.id;
  });

  const rowSelection = {
    selectedRowKeys,
    onSelect(record) {
      dispatch(
        toggleUser({
          id: record.id,
          zipcode: record.zipcode,
          address: record.address,
        })
      );
    },
  };

  return (
    <div>
      <Table
        size="small"
        pagination={false}
        columns={columns}
        dataSource={dataSource}
        rowSelection={rowSelection}
      />
    </div>
  );
};
