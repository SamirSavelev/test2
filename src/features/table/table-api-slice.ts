import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tableApi = createApi({
  reducerPath: "tableApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    mode: "cors",
  }),
  endpoints(builder) {
    return {
      getData: builder.query<any, void>({
        query() {
          return {
            url: `/tmp/test.php`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useGetDataQuery } = tableApi;
