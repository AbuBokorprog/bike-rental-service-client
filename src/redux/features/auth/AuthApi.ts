import { baseApi } from "../../api/BaseApi";

export const AuthApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    authLogin: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    authRegister: builder.mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useAuthLoginMutation, useAuthRegisterMutation } = AuthApi;
