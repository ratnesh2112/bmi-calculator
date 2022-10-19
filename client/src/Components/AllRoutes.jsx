import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BMIHistory from './BMIHistory'
import BMI_Calcutator from './BMI_Calcutator'
import Login from './Login'
import Navbar from './Navbar'
import Profile from './Profile'
import Register from './Register'

const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/bmicalculator' element={<BMI_Calcutator/>}/>
            <Route path='/bmihistory' element={<BMIHistory/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes