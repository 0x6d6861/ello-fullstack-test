import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../../store.ts";
import { Book } from '../../api';

type MainSliceType = {
    students: {
        [key: string]: {
            id: string
            name: string
            picture: string
            class: string
            readings: Book[]
        }}
}


const initialState: MainSliceType = {
    students: {}
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        addStudent: (state, action: PayloadAction<{id: string, name: string, class: string, picture: string}>) => {
            if(!state.students[action.payload.id]) {
                state.students[action.payload.id] = {
                    id: action.payload.id,
                    name: action.payload.name,
                    picture: action.payload.picture,
                    class: action.payload.class,
                    readings: []
                }
            }
            
        },
        addBook: (state, action: PayloadAction<{studentId: string, book: Book}>) => {
            const existingBookIndex = state.students[action.payload.studentId].readings.findIndex(
                (existingBook) => existingBook.uid === action.payload.book.uid
            );

            if (existingBookIndex === -1) {
                state.students[action.payload.studentId].readings.unshift(action.payload.book);
            } else {
                console.log("Book already exists for this student.");
            }
        },
        removeBook: (state, action: PayloadAction<{studentId: string, bookId: string}>) => {
            state.students[action.payload.studentId].readings = state.students[action.payload.studentId].readings.filter(book => book.uid !== action.payload.bookId)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addStudent, addBook, removeBook } = mainSlice.actions

export const getAllStudents = (state: RootState) => state.main.students;
export const getStudentById = (state: RootState) => (id) => state.main.students[id] || null;

export default mainSlice.reducer