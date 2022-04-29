import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../../store/slice/neverlandUserSlice';
// import Profile from './profile'
import Sidebar from './sidebar'

const Dashboard = () => {
  const token = useSelector(getUserData)?.token;
  const navigate = useNavigate()

  if (!token) {
    navigate('/home')
  }
  return (
    <Sidebar />
  )
}

export default Dashboard
