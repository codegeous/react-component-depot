import Axios from "axios";
import Header from "components/Header";
import Table from "components/Table";
import React, { useEffect, useState } from "react";

const UserListTable = () => {
  const [users, setUsers] = useState([]);

  const columns = [
    { title: "S.No", key: "id" },
    { title: "Name", key: "name" },
    { title: "UserName", key: "username" },
    {
      title: "Email",
      key: "email",
      render: (email) => <a href={`mailto:${email}`}>{email}</a>,
    },
    {
      title: "Phone",
      key: "phone",
      render: (phone) => <a href={`tel:${phone}`}>{phone}</a>,
    },
    { title: "Company", key: "company", render: ({ name }) => name },
    { title: "Website", key: "website" },
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await Axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(data);
      } catch (e) {}
    };

    getData();
  }, []);

  return (
    <>
      <Header title="User List (Table)" />
      <div className="row justify-content-center">
        <div className="col-lg-12">
          {/* <pre>{JSON.stringify(users, 0, 2)}</pre> */}
          <Table columns={columns} dataSource={users} />
        </div>
      </div>
    </>
  );
};

export default UserListTable;
