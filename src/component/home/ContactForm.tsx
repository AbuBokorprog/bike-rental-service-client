/* eslint-disable no-useless-escape */
import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    // Here you can handle the form submission (e.g., send data to a server)
    reset(); // Reset form fields after submission
  };

  return (
    <div className="">
      <h2 className="text-xl lg:text-3xl font-semibold my-5 lg:my-16 text-center uppercase">
        Contact Us.
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-3 bg-white lg:p-6 rounded-md shadow-md"
      >
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className={`w-full mt-1 p-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500`}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            className={`w-full mt-1 p-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message", { required: "Message is required" })}
            className={`w-full mt-1 p-2 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500`}
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 mt-4 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
