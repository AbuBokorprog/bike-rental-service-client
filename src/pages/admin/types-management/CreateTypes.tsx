import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField } from "@mui/material";
import React from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z } from "zod";
import { useCreateTypesMutation } from "../../../redux/features/types/Types.api";
import { toast } from "sonner";

const CreateTypes: React.FC = () => {
  const schema = z.object({
    name: z.string(),
    image: z.string(),
  });
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: "", image: "" },
  });

  const [createTypes] = useCreateTypesMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loading...");
    try {
      const res = await createTypes(data).unwrap();

      if (res?.success) {
        toast.success(res.message, { id: toastId, duration: 2000 });
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }

    reset();
  };
  return (
    <div className="flex-1 p-8 ml-0 lg:ml-64 mx-auto justify-center items-center">
      <h1 className="text-2xl font-bold text-center">Create Type</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-screen-2xl mx-auto my-5 lg:my-10 bg-secondary-50 p-5 rounded-md border shadow-lg"
      >
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: "Name is required" }}
            name="name"
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                className="block w-full"
                error={!!errors.name}
                helperText={errors.name ? "Name are required" : ""}
              />
            )}
          />
        </div>
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: "Image is required" }}
            name="image"
            render={({ field }) => (
              <TextField
                {...field}
                label="Image"
                variant="outlined"
                className="block w-full"
                error={!!errors.image}
                helperText={errors.image ? "Image are required" : ""}
              />
            )}
          />
        </div>
        <Button type="submit" variant="contained" className="mt-6 w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateTypes;
