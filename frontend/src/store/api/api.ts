import backendService from "../../services/backend-service.ts";
import { loginUser } from "../features/auth/slice.ts";
import fetchBaseQuery from "./fetchBaseQuery.ts";

import {createApi} from "@reduxjs/toolkit/query/react";

export const api = createApi({
        reducerPath: 'api',
        baseQuery: fetchBaseQuery,
        tagTypes: [],
        endpoints: (builder) => ({
                login: builder.mutation<{token: string}, {email: string, password: string}>({
                    queryFn: async(body: {email: string, password: string}, api, extraOptions) => {
                        try {
                                const reponse = await backendService.login(body);
                                api.dispatch(loginUser({user: reponse.user, token: reponse.token}))
                                return {data: reponse}
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
