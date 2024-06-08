import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../../store.ts";

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

type ReadingLevel = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J'

type Book = {
    id: string
    title: string
    author: string
    coverPhotoURL: string
    readingLevel: ReadingLevel
}

const initialState: MainSliceType = {
    students: {}
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        addStudent: (state, action: PayloadAction<{id: string, name: string, class: string, picture: string}>) => {
            state.students[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                picture: action.payload.picture,
                class: action.payload.class,
                readings: []
            }
        },
        addBook: (state, action: PayloadAction<{studentId: string, book: Book}>) => {
            state.students[action.payload.studentId].readings.push(action.payload.book)
        },
        removeBook: (state, action: PayloadAction<{studentId: string, bookId: string}>) => {
            state.students[action.payload.studentId].readings = state.students[action.payload.studentId].readings.filter(book => book.id !== action.payload.bookId)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addStudent, addBook, removeBook } = mainSlice.actions

export const getAllStudents = (state: RootState) => state.main.students;
export const getStudentById = (state: RootState, id: string) => state.main.students[id] || null;

export default mainSlice.reducer