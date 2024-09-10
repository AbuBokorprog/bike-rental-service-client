import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useGetAllTypesQuery } from "../../../redux/features/types/Types.api";
import { TType } from "../../../types/types/types.type";
import TypesUpdateField from "../../../component/dashboard/admin/TypesDashboard/TypesUpdateField";

const AllTypes: React.FC = () => {
  const { data } = useGetAllTypesQuery(undefined);
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState<string | undefined>("")

  // Open and close modal handlers
  const handleOpenModal = (id:string) => {
    setId(id)
    setOpenModal(true)
  }
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div className="flex-1 p-8 ml-0 lg:ml-64 mx-auto justify-center items-center">
      <h1 className="text-xl lg:text-3xl font-semibold uppercase text-center">
        All Types.
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 items-center mx-auto my-5 lg:my-16">
        {data?.data?.map((t: TType) => (
          <Card key={t?._id} sx={{ maxWidth: 345 }} className="">
            <CardMedia sx={{ height: 240 }} image={t?.image} title={t?.name} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t?.name}
              </Typography>
            </CardContent>
            <CardActions className="flex items-center justify-between">
              <button
                onClick={() =>handleOpenModal(t?._id)}
                className="bg-primary-500 text-white px-4 py-2 rounded-md"
              >
                Update
              </button>

              <Button size="small" variant="outlined">
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
        <TypesUpdateField handleClose={handleCloseModal} open={openModal} id={id}/>
      </div>
    </div>
  );
};

export default AllTypes;
