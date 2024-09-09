import React from "react";
import { useGetAllUsersQuery } from "../../../redux/features/user/User";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { TUser } from "../../../types/users/user.type";

interface Column {
  id: "image" | "name" | "email" | "phone" | "address" | "role" | "action";
  label: string;
  minWidth?: number;
  sortable?: boolean;
  align?: "right" | "left";
  format?: (value: string) => string;
}

const columns: readonly Column[] = [
  { id: "image", label: "Image", minWidth: 170 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 100 },
  {
    id: "phone",
    label: "Phone",
    minWidth: 170,
    align: "left",
  },
  {
    id: "address",
    label: "Address",
    minWidth: 170,
    align: "left",
  },
  {
    id: "role",
    label: "Role",
    minWidth: 170,
    align: "left",
    sortable: true,
    format: (value: string) => value,
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "left",
  },
];

const AllUser = () => {
  const { data } = useGetAllUsersQuery(undefined);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  let count = 0;
  if (data?.data) {
    count = Number(data?.data?.length?.toFixed());
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handlePromoteUser = (user: Partial<TUser>) => {
    // Logic to promote or demote user based on their current role
    if (user.role === "admin") {
      // Demote the user to 'user'
      console.log(`Demoting ${user.name} to user`);
      // API call or state update to change role
    } else {
      // Promote the user to 'admin'
      console.log(`Promoting ${user.name} to admin`);
      // API call or state update to change role
    }
  };

  return (
    <div className="flex-1 p-8 ml-0 lg:ml-64 mx-auto justify-center items-center">
      <h1 className="text-xl lg:text-3xl font-semibold uppercase text-center">
        All users
      </h1>
      <Paper
        sx={{ width: "100%", height: "100%", overflow: "hidden" }}
        className="my-5 lg:my-16"
      >
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.data
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: TUser) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "image" ? (
                              <img
                                src={value as string}
                                alt={row.name}
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: "50%",
                                }}
                              />
                            ) : column.id === "action" ? (
                              <Button
                                onClick={() => handlePromoteUser(row)}
                                variant="contained"
                                className="px-4 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-700"
                              >
                                {row.role === "admin"
                                  ? "Demote to User"
                                  : "Promote to Admin"}
                              </Button>
                            ) : column.format && typeof value === "string" ? (
                              column.format(value as string)
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default AllUser;
