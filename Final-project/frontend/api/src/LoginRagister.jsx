import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'

export default function LoginRegister() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login}></Route>
        <Route path='/dashboard' Component={Dashboard}></Route>
        <Route path='/register' Component={Register}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}