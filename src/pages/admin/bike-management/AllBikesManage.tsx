import React from "react";
import { useGetAllBikesQuery } from "../../../redux/features/bikes/bikes.api";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const AllBikesManage: React.FC = () => {
  const { data } = useGetAllBikesQuery(undefined);

  return (
    <div className="flex-1 p-8 ml-0 lg:ml-64 mx-auto justify-center items-center">
      <h1 className="text-2xl font-bold text-center">All Bikes</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 items-center mx-auto my-5 lg:my-16">
        {data?.data?.map((t) => (
          <Card key={t?._id} sx={{ maxWidth: 345 }} className="">
            <CardMedia
              sx={{ height: 240 }}
              image={t?.images[0]}
              title={t?.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t?.name}
              </Typography>
            </CardContent>
            <CardActions className="flex items-center justify-between">
              <Button size="small" variant="outlined">
                Update
              </Button>
              <Button size="small" variant="outlined">
                Delete
              </Button>
              <Button size="small" variant="contained">
                View Details
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllBikesManage;
