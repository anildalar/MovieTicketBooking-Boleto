// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BACKEND_URL } from '../helper/helper'


export const movieApi = createApi({
    //1P;V
    reducerPath:'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_URL}` }),
    endpoints: (builder) => ({
        getMovieByName: builder.query({
          query: () => `/api/movies?populate=*`,
        }),
      }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieByNameQuery } = movieApi