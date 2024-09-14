import React, { useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Skeleton,
} from '@mui/material';

const CompareSkeleton: React.FC = () => (
  <TableContainer component={Paper} className="overflow-x-auto">
    <Table className="min-w-full">
      <TableHead>
        <TableRow>
          <TableCell className="font-bold">Product Details</TableCell>
          {/* Skeleton columns */}
          {[...Array(3)].map((_, index) => (
            <TableCell key={index} className="relative">
              <Skeleton variant="text" width={100} height={30} />
              <IconButton
                size="small"
                className="absolute top-0 right-0"
                aria-label="close"
              >
                <Skeleton variant="circular" width={20} height={20} />
              </IconButton>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {/* Skeleton rows for each field */}
        {[...Array(5)].map((_, rowIndex) => (
          <TableRow key={rowIndex}>
            <TableCell component="th" scope="row" className="font-semibold">
              <Skeleton variant="text" width={120} height={25} />
            </TableCell>
            {[...Array(3)].map((_, cellIndex) => (
              <TableCell key={cellIndex}>
                <Skeleton variant="text" width={100} height={25} />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default CompareSkeleton;
