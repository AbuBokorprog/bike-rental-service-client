import { Breadcrumbs, Stack } from "@mui/material";
import React, { ReactNode } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type TBreadcrumbs = {
  breadcrumbs: ReactNode[];
};

const CustomBreadcrumbs: React.FC<TBreadcrumbs> = ({ breadcrumbs }) => {
  return (
    <Stack spacing={2}>
      <Breadcrumbs 
        separator={<NavigateNextIcon fontSize="large"/>}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};

export default CustomBreadcrumbs;
