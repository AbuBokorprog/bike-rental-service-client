import { baseApi } from "../../api/BaseApi";

export const Types = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTypes: builder.query({
      query: () => "/types",
      providesTags: ["types"],
    }),
    getTypes: builder.query({
      query: (id) => `/types/${id}`,
      providesTags: ["types"],
    }),
    createTypes: builder.mutation({
      query: (data) => ({
        url: "/types",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["types"],
    }),
    updateTypes: builder.mutation({
      query: ({ id, data }) => ({
        url: `/types/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["types"],
    }),
  }),
});

export const {
  useCreateTypesMutation,
  useGetAllTypesQuery,
  useUpdateTypesMutation,
  useGetTypesQuery
} = Types;
