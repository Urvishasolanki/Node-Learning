import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate()

    const onLogin = async () => {
        await axios.post(`http://localhost:1008/loginAdmin`, { email, pass }).then((res) => {
            alert(res.data.msg);
            
            if(res.data.code) {
                navigate('/register')
            } else {
                localStorage.setItem("token", res.data.token);
                navigate('/dashboard')
            }
        })
        setEmail("")
        setPass("");
        
    }

    return (
        <div>
            <h1>Login</h1>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />
            <input type="text" value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Enter password' />

            <button onClick={onLogin}>Login</button>

            <Link to={"register"}>Register</Link>
        </div>
    )
}