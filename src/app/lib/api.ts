import Database from "better-sqlite3";
import { IUser, PartialUser } from "./types";

const db  = new Database("auth.db")

export const addUser=(user:PartialUser):Database.RunResult=>{
    return db.prepare(`
        INSERT INTO users(id,name,surname,login,password)
        VALUES(@id,@name,@surname,@login,@password)

        `).run(user)
}

export const getAllUsers=():IUser[]=>{
    return db.prepare("SELECT * FROM  users ").all() as IUser[]
}

export const getUserByLogin = (login:string):IUser|null=>{
    let result = db.prepare(`SAELECT * FROM users WHERE login =?`)
    .get(login)
    if(!result){
    return null
    }
    return result as IUser
}
