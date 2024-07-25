export interface IUser{
    id:string
    name:string
    surname:string
    login:string
    password:string

}

export type InputUSer=Omit<IUser,"id">
export type PartialUser=Partial<IUser>
