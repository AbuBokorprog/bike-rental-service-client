import React from "react";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  usePromoteUserMutation,
} from "../../../redux/features/user/User";
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
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";

interface Column {
  id:
    | "image"
    | "name"
    | "email"
    | "phone"
    | "address"
    | "role"
    | "action"
    | "delete";
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
  {
    id: "delete",
    label: "Delete",
    minWidth: 100,
    align: "left",
  },
];

const AllUser = () => {
  const { data } = useGetAllUsersQuery(undefined);
  const [deleteUser] = useDeleteUserMutation();
  const [promoteUser] = usePromoteUserMutation();
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

  const handlePromoteUser = async (user: Partial<TUser>) => {
    const toastId = toast.loading("Promoting...");

    try {
      const res = await promoteUser(user?._id).unwrap();

      if (res?.success) {
        if (user.role === "user") {
          toast.success(`Promoting ${user.name} to admin`, {
            id: toastId,
            duration: 2000,
          });
        } else if (user.role === "admin") {
          toast.success(`Promoting ${user.name} to super-admin`, {
            id: toastId,
            duration: 2000,
          });
        } else {
          toast.success(`Demoting ${user.name} to user`, {
            id: toastId,
            duration: 2000,
          });
        }
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
  };

  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Loading...");
    try {
      const res = await deleteUser(id).unwrap();

      if (res?.success) {
        toast.success(res?.message, { id: toastId, duration: 2000 });
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
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
                                {row.role === "user"
                                  ? "Promote to Admin"
                                  : row.role === "admin"
                                    ? "Promote to super-admin"
                                    : "Demote to user"}
                              </Button>
                            ) : column.id === "delete" ? (
                              <Button
                                onClick={() => handleDelete(row._id)}
                                variant="contained"
                                className="px-4 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-700"
                              >
                                <DeleteIcon />
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
