import {configureStore, ConfigureStoreOptions} from '@reduxjs/toolkit'
import authReducer from './features/auth/slice.ts'
import mainReducer from './features/main/slice.ts'
import {api} from './api/api.ts';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


export const createStore = (
    options?: ConfigureStoreOptions["preloadedState"] | undefined
) =>
    configureStore({
        reducer: {
            [api.reducerPath]: api.reducer,
            auth: authReducer,
            main: mainReducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(api.middleware),
        ...options
    });

export const store = createStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
