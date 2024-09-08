import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuthRegisterMutation } from "../../redux/features/auth/AuthApi";
import { toast } from "sonner";
import { JWTDecode } from "../../utils/JWTDecode";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/auth/AuthSlice";

const Registration: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schema = z.object({
    name: z.string({ required_error: "The name is required!" }),
    email: z.string({ required_error: "The email is required!" }),
    password: z.string({ required_error: "The password is required!" }),
    confirmPassword: z.string({
      required_error: "The confirm have to matched with password!",
    }),
    phone: z.string({ required_error: "The phone is required!" }),
    address: z.string({ required_error: "The address is required!" }),
    image: z.string({
      required_error: "Please paste your profile picture url!",
    }),
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [userRegister] = useAuthRegisterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loading...");

    const values = {
      name: data.name,
      email: data?.email,
      password: data?.password,
      phone: data.phone,
      address: data.address,
      image: data.image,
    };

    try {
      const res = await userRegister(values).unwrap();
      if (res?.success) {
        const user = JWTDecode(res?.data?.token);

        dispatch(login({ user: user, token: res?.data?.token }));

        toast.success(res.message, { id: toastId, duration: 2000 });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }

    reset();
  };

  return (
    <div className="my-5 lg:my-16">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-screen-md mx-auto bg-secondary-50 p-5 rounded-md border shadow-lg"
      >
        <h3 className="text-xl lg:text-3xl font-semibold my-5 lg:my-16 text-center">
          Registration to your account.
        </h3>
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: true }}
            name="name"
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                id="name"
                type="text"
                variant="outlined"
                className="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-secondary-700 dark:border-secondary-600 dark:placeholder-secondary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            )}
          />
          <p className="text-red-500">{errors?.name?.message as string}</p>
        </div>
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: true }}
            name="email"
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                id="email"
                type="email"
                variant="outlined"
                className="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-secondary-700 dark:border-secondary-600 dark:placeholder-secondary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            )}
          />
          <p className="text-red-500">{errors?.email?.message as string}</p>
        </div>
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: true }}
            name="password"
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                id="password"
                type="password"
                variant="outlined"
                className="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-secondary-700 dark:border-secondary-600 dark:placeholder-secondary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            )}
          />
          <p className="text-red-500">{errors?.password?.message as string}</p>
        </div>
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: true }}
            name="confirmPassword"
            render={({ field }) => (
              <TextField
                {...field}
                label="Confirm Password"
                id="confirmPassword"
                type="password"
                variant="outlined"
                className="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-secondary-700 dark:border-secondary-600 dark:placeholder-secondary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            )}
          />
          <p className="text-red-500">
            {errors?.confirmPassword?.message as string}
          </p>
        </div>
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: true }}
            name="phone"
            render={({ field }) => (
              <TextField
                {...field}
                label="Phone"
                id="phone"
                type="text"
                variant="outlined"
                className="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-secondary-700 dark:border-secondary-600 dark:placeholder-secondary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            )}
          />
          <p className="text-red-500">{errors?.phone?.message as string}</p>
        </div>
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: true }}
            name="address"
            render={({ field }) => (
              <TextField
                {...field}
                label="Address"
                id="address"
                type="text"
                variant="outlined"
                className="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-secondary-700 dark:border-secondary-600 dark:placeholder-secondary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            )}
          />
          <p className="text-red-500">{errors?.address?.message as string}</p>
        </div>
        <div className="my-2">
          <Controller
            control={control}
            rules={{ required: true }}
            name="image"
            render={({ field }) => (
              <TextField
                {...field}
                label="Profile image"
                id="image"
                type="text"
                variant="outlined"
                className="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-secondary-700 dark:border-secondary-600 dark:placeholder-secondary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            )}
          />
          <p className="text-red-500">{errors?.image?.message as string}</p>
        </div>
        <div className="text-center my-3">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full"
          >
            Registered
          </Button>
        </div>
        <div className="my-3">
          <p>
            Are you already registered?{" "}
            <Link to={"/login"} className="text-primary-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Registration;
