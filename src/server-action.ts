"use server";

import { signIn as _signIn, signOut as _signOut } from "@/auth";

export async function signIn(){
  await _signIn();
}

export async function signInCredentials(formData:FormData){
  await _signIn("credentials", {
    username: formData.get("username"),
    password: formData.get("password"),
    redirectTo: "/"
  })
}

export async function signOut(){
  await _signOut();
}
