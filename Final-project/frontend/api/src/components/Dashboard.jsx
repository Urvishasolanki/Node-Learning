import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("token")) {
      navigate('/')
    }
  }, [])
  
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}