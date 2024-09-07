import { baseApi } from "../../api/BaseApi";

export const User = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfileInfo: builder.query({
      query: () => "/users/me",
      providesTags: ["user"],
    }),

    updateProfileInfo: builder.mutation({
      query: (data) => ({
        url: "/users/me",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetProfileInfoQuery, useUpdateProfileInfoMutation } = User;
