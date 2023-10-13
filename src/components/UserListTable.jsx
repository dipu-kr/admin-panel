import React, { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

const UserListTable = ({ mData }) => {
  const data = useMemo(() => mData, []);

  /**@type import('@tanstack/react-table').columnDef<any> */
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "First Name",
      accessorKey: "first_name",
    },
    {
      header: "Last Name",
      accessorKey: "last_name",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
    },
    {
      header: "IP Address",
      accessorKey: "id_address",
    },
  ];

  const tableInstance = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>11100</td>
            <td>Dipu Kumar</td>
            <td>text@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserListTable;
