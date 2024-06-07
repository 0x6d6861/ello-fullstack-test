import backendService from "../../services/backend-service.ts";
import fetchBaseQuery from "./fetchBaseQuery.ts";

import {createApi} from "@reduxjs/toolkit/query/react";

export const api = createApi({
        reducerPath: 'api',
        baseQuery: fetchBaseQuery,
        tagTypes: [],
        endpoints: (builder) => ({
                login: builder.mutation<{token: string}, {email: string, password: string}>({
                    queryFn: async(body: {email: string, password: string}) => {
                        try {
                                const user = await backendService.login(body);
                                return {data: user}
                        } catch (error) {
                            return {error: error}
                        }
                    },
                    onQueryStarted(arg, api) {
                        console.log(arg, api)
                        //     api.dispatch
                    },
                }),
        })
})
