import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')

    const navigate = useNavigate();

    const registerAdmin = async () => {
        await axios.post(`http://localhost:1008/registerAdmin`, { name, email, password }).then((res) => {
            alert(res.data.msg);
            navigate('/');
        })
        setName("");
        setEmail("")
        setPass("");
    }
    return (
        <div>
            <h1>Register</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
            <input type="text" value={password} onChange={(e) => setPass(e.target.value)} placeholder='Enter your password' />

            <button onClick={registerAdmin}>Register</button>
            <Link to={"/"}>Login</Link>

        </div>
    )
}