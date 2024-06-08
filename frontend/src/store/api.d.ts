export interface IUser {
    uid: string
    name: string
    picture: string
    email: string,
    profile: IProfile
}

export interface IProfile {
    uid: string
    role: IRole
    details: {[key: string]: string | number | boolean | null}
}

export type ReadingLevel = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J'

export type Book = {
    uid: string
    title: string
    author: string
    coverPhotoURL: string
    readingLevel: ReadingLevel
}

export type IRole = 'admin' | 'teacher' | 'student'