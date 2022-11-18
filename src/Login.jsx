import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export default function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    
    let data = {};
    const login = (e)=>{
        
        data.email = email
        data.password = password
        axios.post("https://reqres.in/api/login", data).then((response)=>{
            console.log(response)
            localStorage.setItem("token",response.data.token);
            window.location.reload();
        }).catch((err)=>{
            console.log(err);
        })
        e.preventDefault();
    }

    return (
    <div>
        <form onSubmit={login}>
            <input type="text" onChange={(e) => setemail(e.target.value)} />
            <input type="text" onChange={(e) => setpassword(e.target.value)} />
            <input type="submit" value="submit" />
        </form>
    </div>)
}
