import fetchBaseQuery from "./fetchBaseQuery.ts";

import {createApi} from "@reduxjs/toolkit/query/react";

export const api = createApi({
        reducerPath: 'api',
        baseQuery: fetchBaseQuery,
        tagTypes: [],
        endpoints: (builder) => ({
                
        })
})
