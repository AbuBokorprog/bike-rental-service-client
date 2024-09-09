import { Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuthLoginMutation } from "../../redux/features/auth/AuthApi";
import { toast } from "sonner";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { JWTDecode } from "../../utils/JWTDecode";
import { login } from "../../redux/features/auth/AuthSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { JwtPayload } from "jwt-decode";
const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [userLogin] = useAuthLoginMutation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = z
    .object({
      email: z.string({ required_error: "Email is required!" }),
      password: z.string({ required_error: "Password is required!" }),
    })
    .required();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loading...");

    try {
      const res = await userLogin(data).unwrap();

      if (res?.success) {
        const user = JWTDecode(res?.data?.token) as JwtPayload;

        dispatch(login({ user: user, token: res?.data?.token }));

        toast.success(res.message, { id: toastId, duration: 2000 });
        if(user?.role === 'super-admin'){
          navigate(`/dashboard/admin`);
        }else{
          navigate(`/dashboard/${user?.role}`)
        }
       
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
    reset();
  };

  return (
    <div className="my-24">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-screen-md mx-auto bg-secondary-50 p-5 rounded-md border shadow-lg"
      >
        <h3 className="text-xl lg:text-3xl font-semibold my-5 lg:my-16 text-center">
          Login to your account.
        </h3>
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
          <p className="text-red-500">{errors.email?.message as string}</p>
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
          <p className="text-red-500">{errors.password?.message as string}</p>
        </div>
        <div className="text-center my-3">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full"
          >
            Login
          </Button>
        </div>
        <div className="my-3">
          <p>
            Don’t have an account yet?{" "}
            <Link
              to={"/registration"}
              className="text-primary-500 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
