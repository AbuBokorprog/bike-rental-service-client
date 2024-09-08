import { TBike } from "../../../types/bikes/bike.type";
import { TReduxResponse } from "../../../types/global.type";
import { baseApi } from "../../api/BaseApi";

export const Bikes = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: () => "/bikes",
      providesTags: ["bike"],
      transformResponse: (response: TReduxResponse<TBike[]>) => {
        return {
          data: response?.data,
        };
      },
    }),
    createBike: builder.mutation({
      query: (data) => ({
        url: "/bikes",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["bike"],
    }),
    updateBike: builder.mutation({
      query: ({ id, data }) => ({
        url: `/bikes/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["bike"],
    }),
  }),
});

export const {
  useCreateBikeMutation,
  useGetAllBikesQuery,
  useUpdateBikeMutation,
} = Bikes;
