import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserData, reset } from '../../store/slice/neverlandUserSlice';
import Sidebar from './sidebar'

const Dashboard = () => {
  const token = useSelector(getUserData)?.token;
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!token ) {
      navigate('/home')
    }
    return () => {
      dispatch(reset());
    };
  }, [dispatch])
  // if (!token ) {
  //   navigate('/home')
  // }
  return (
    <Sidebar />
  )
}

export default Dashboard
