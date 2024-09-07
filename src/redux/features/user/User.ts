import { TReduxResponse } from "../../../types/global.type";
import { TUser } from "../../../types/users/user.type";
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
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      transformResponse: (response: TReduxResponse<TUser[]>) => {
        return {
          data: response.data,
        };
      },
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetProfileInfoQuery,
  useUpdateProfileInfoMutation,
} = User;
