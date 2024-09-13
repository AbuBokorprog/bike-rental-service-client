import React from 'react';
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  usePromoteUserMutation,
} from '../../../redux/features/user/User';
import {
  Button,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'sonner';

interface Column {
  id:
    | 'image'
    | 'name'
    | 'email'
    | 'phone'
    | 'address'
    | 'role'
    | 'action'
    | 'delete';
  label: string;
  minWidth?: number;
  align?: 'right' | 'left';
}

const columns: readonly Column[] = [
  { id: 'image', label: 'Image', minWidth: 100 },
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'email', label: 'Email', minWidth: 100 },
  {
    id: 'phone',
    label: 'Phone',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'address',
    label: 'Address',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'role',
    label: 'Role',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'delete',
    label: 'Delete',
    minWidth: 100,
    align: 'left',
  },
];

const AllUserSkeleton = () => {
  const skeletonRows = Array.from({ length: 10 }).map((_, index) => (
    <TableRow key={index}>
      {columns.map((column) => (
        <TableCell key={column.id} align={column.align}>
          <Skeleton variant="rectangular" width={100} height={20} />
        </TableCell>
      ))}
    </TableRow>
  ));

  return (
    <div className="flex-1 p-8 ml-0 lg:ml-64 mx-auto justify-center items-center">
      <h1 className="text-xl lg:text-3xl font-semibold uppercase text-center">
        All users
      </h1>
      <Paper
        sx={{ width: '100%', height: '100%', overflow: 'hidden' }}
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
            <TableBody>{skeletonRows}</TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default AllUserSkeleton;
