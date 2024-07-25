"use client"

import { useActionState } from "react";
import { hanldeSignup } from "./lib/actions";



export default function Home() {
  

  const[state,handleSignupAcion]= useActionState(hanldeSignup,{message:"" , password:"", login:""} )
  
  return (
    <main className="p-4 px-6 mx-6">
      <h1 className="is-size-3">Signup</h1>
      <div className="columns">
        <div className="column is-two-fifths p-4">
          <form className="box" action={handleSignupAcion}>
          {state?.message && <p className="notification is-danger">{state.message}</p>}
              <div className="field my-4">
                <input 
                  type="text" 
                  className="input is-dark"
                  placeholder="please enter your name"
                  name="name"
                />
              </div>
              <div className="field my-4">
                <input 
                  type="text" 
                  className="input is-dark"
                  placeholder="please enter your surname"
                  name="surname"
                />
              </div>
              <div className="field my-4">
                <input 
                  type="text" 
                  className="input is-dark"
                  placeholder="please enter your login"
                  name="login"
                  defaultValue={state?.login || ""}
                />
              </div>
              <div className="field my-4">
                <input 
                  type="password" 
                  className="input is-dark"
                  placeholder="please enter your password"
                  name="password"
                  defaultValue={state?.password || ""}
                />
              </div>
              <button className="button is-success">submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}
