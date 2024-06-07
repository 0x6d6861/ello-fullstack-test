import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "../../store.ts";
import { IUser } from '../../api';
import { appLocalStorage } from '../../../utils/app-storage.ts';

export interface AuthState {
    user: IUser | null
    token: string | null
}

const initialState: AuthState = {
    token: appLocalStorage.getToken()?.token,
    user: appLocalStorage.getUser()
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
          state.user = action.payload
            appLocalStorage.setUser(action.payload)
        },
        setToken: (state, action: PayloadAction<string>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.token = action.payload
            appLocalStorage.setToken({token: action.payload})

        },
        loginUser: (state, action: PayloadAction<{user: IUser, token: string}>) => {
            state.token = action.payload.token
            state.user = action.payload.user

            appLocalStorage.setUser(action.payload.user)
            appLocalStorage.setToken({token: action.payload.token})


        },
        logoutUser: (state) => {
            state.token = null
            state.user = null

            appLocalStorage.clear()

        }
    },
})

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = authSlice.actions

export const getToken = (state: RootState) => state.auth.token
export const getUser = (state: RootState) => state.auth.user
export const isLoggedIn = (state: RootState) => state.auth.user && state.auth.token
export default authSlice.reducer