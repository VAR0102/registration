"use server"

import { PartialUser } from "./types"
import bcrypt from "bcrypt"
import { nanoid } from "nanoid"
import { addUser } from "./api"
import { redirect } from "next/navigation"

export const hanldeSignup= async (prev:unknown,data:FormData)=>{
    const password = data.get("password") as string;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordPattern.test(password)) {
        return {message:"Password must be at least 6 characters long and include at least one letter, one number, and one symbol." , password};
    }
let user:PartialUser={
    id:nanoid(),
    name:data.get("name") as string,
    surname:data.get("surname") as string,
    login:data.get("login") as string,
    password:data.get("password") as string

}
if(user.password){
user.password=await bcrypt.hash(user.password, 10)
}

const login = data.get("login") as string
if(login){
    return {message:"Login already exist",login}
}



addUser(user)
redirect("/login")

    
}


export const handleLogin = async (prev:unknown,data:FormData)=>{
   
     const  name=data.get("name") as string
     const   surname=data.get("surname") as string
     const   login=data.get("login") as string
     const  password=data.get("password") as string

    
   if(!data.get("login") || !data.get("password"))
    return{
message:"Please Fill all filds"
}
if(!login){
    return {message:"Error",login}

}




}