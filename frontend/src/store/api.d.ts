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

export interface Book {
    title: string
      author: string
      coverPhotoURL: string
      readingLevel: string
}

export type IRole = 'admin' | 'teacher' | 'student'