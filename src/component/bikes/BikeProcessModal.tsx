import { Box, Button, Modal } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useAppSelector } from "../../redux/hooks/hooks";
import { currentToken } from "../../redux/store";
import { useCreateRentalMutation } from "../../redux/features/rentals/rentals.api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "2px solid #ffff",
  boxShadow: 24,
  p: 4,
};

interface FormData {
  date: string;
  time: string;
}

const BikeProcessModal = ({ id }: { id: string }) => {
  const token = useAppSelector(currentToken)
  const navigate = useNavigate()
  const [createRental] = useCreateRentalMutation()
  const { handleSubmit, control, watch } = useForm<FormData>();

  const onSubmit = async(data: FormData) => {
 
    const startTime = combineDateAndTime(data.date, data.time);
    const bikeId = id
    const rentalData = {
      startTime,
      bikeId
    }
    try {
      const res = await createRental(rentalData).unwrap()
      console.log(res)
      if(res?.success){
        navigate(`/payment/${res?.data[0]?._id}`)
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong!", { duration:2000})
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Get current date in 'YYYY-MM-DD' format for the date input min attribute
  const getCurrentDate = (): string => {
    return new Date().toISOString().split("T")[0]; // 'YYYY-MM-DD'
  };

  // Get the current time in 'HH:MM' format for the time input min attribute
  const getCurrentTime = (): string => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  // Watch the selected date to dynamically update the min time
  const selectedDate = watch("date");

  // Combine date and time into the required "YYYY-MM-DDTHH:mm:ssZ" format
  const combineDateAndTime = (date: string, time: string): string => {
    const combined = new Date(`${date}T${time}:00Z`);
    return combined.toISOString(); // Converts to "YYYY-MM-DDTHH:mm:ssZ"
  };

  return (
    <div>
      <div>
        <Button
          onClick={handleOpen}
          variant="contained"
          color="primary"
          className="w-full"
        >
          Book Now
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Date Input */}
              <div className="flex flex-col">
                <label htmlFor="date" className="font-semibold mb-2">
                  Select Date:
                </label>
                <Controller
                  name="date"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="date"
                      id="date"
                      min={getCurrentDate()}
                      className="border p-2 rounded-md w-full"
                    />
                  )}
                />
              </div>

              {/* Time Input */}
              <div className="flex flex-col">
                <label htmlFor="time" className="font-semibold mb-2">
                  Select Time:
                </label>
                <Controller
                  name="time"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="time"
                      id="time"
                      className="border p-2 rounded-md w-full"
                      min={
                        selectedDate === getCurrentDate()
                          ? getCurrentTime()
                          : "00:00"
                      }
                    />
                  )}
                />
              </div>
                  <p><small className="text-red-500">Before confirmation you have to pay advance 100 TK. So please Pay Now button.</small></p>
              {token ? <Button type="submit" variant="contained" color="primary" className="w-full">
                Pay Now
              </Button> : <Button type="submit" variant="contained" disabled className="w-full">
                Pay Now
              </Button>}
            </form>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default BikeProcessModal;
