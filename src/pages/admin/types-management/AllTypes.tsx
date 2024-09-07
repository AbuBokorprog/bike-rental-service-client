import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useGetAllTypesQuery } from "../../../redux/features/types/Types.api";

const AllTypes: React.FC = () => {
  const { data } = useGetAllTypesQuery(undefined);

  return (
    <div className="flex-1 p-8 ml-0 lg:ml-64 mx-auto justify-center items-center">
      <h1 className="text-2xl font-bold text-center">All Types</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 items-center mx-auto my-5 lg:my-10">
        {data?.data.map((t) => (
          <Card key={t?._id} sx={{ maxWidth: 345 }} className="">
            <CardMedia
              sx={{ height: 240 }}
              image={t?.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t?.name}
              </Typography>
            </CardContent>
            <CardActions className="flex items-center justify-between">
              <Button size="small" variant="contained">
                Update
              </Button>
              <Button size="small" variant="outlined">
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllTypes;
