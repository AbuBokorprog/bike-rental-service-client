import { TReduxResponse } from "../../../types/global.type";
import { TType } from "../../../types/types/types.type";
import { baseApi } from "../../api/BaseApi";

export const Types = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTypes: builder.query({
      query: () => "/types",
      providesTags: ["types"],
      transformResponse: (response: TReduxResponse<TType[]>) => {
        return {
          data: response?.data,
        };
      },
    }),
    createTypes: builder.mutation({
      query: (data) => ({
        url: "/types",
        method: "POST",
        body: data,
      }),
    }),
    updateTypes: builder.mutation({
      query: ({ id, data }) => ({
        url: `/types/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateTypesMutation,
  useGetAllTypesQuery,
  useUpdateTypesMutation,
} = Types;
