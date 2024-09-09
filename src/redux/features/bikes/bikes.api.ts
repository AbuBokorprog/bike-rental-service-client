import { TBike } from "../../../types/bikes/bike.type";
import { TQueryParams, TReduxResponse } from "../../../types/global.type";
import { baseApi } from "../../api/BaseApi";

export const Bikes = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/bikes",
          method: "GET",
          params: params, // Use params.toString() for proper URL formatting
        };
      },
      providesTags: ["bike"],
      transformResponse: (response: TReduxResponse<TBike[]>) => {
        return {
          data: response?.data?.data,
          meta: response?.data?.meta,
        };
      },
    }),
    getSingleBike: builder.query({
      query: (id) => `/bikes/${id}`,
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
    deleteBike: builder.mutation({
      query: (id) => ({
        url: `/bikes/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["bike"],
    }),
  }),
});

export const {
  useCreateBikeMutation,
  useGetAllBikesQuery,
  useGetSingleBikeQuery,
  useUpdateBikeMutation,
  useDeleteBikeMutation,
} = Bikes;
