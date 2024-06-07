export interface IUser {
    uid: string
    name: string
    phone: string
    email: string
}

export interface IProfile {
    uid: string
    role: IRole
    details: {[key: string]: string | number | boolean | null}
}

export type IRole = 'admin' | 'teacher' | 'student'