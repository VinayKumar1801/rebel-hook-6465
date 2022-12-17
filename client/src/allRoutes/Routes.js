import React from 'react'
import {Routes,Route} from "react-router-dom"
import MainDashboard from '../pages/MainDashboard/MainDashboard'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
const Routers = () => {
  return (
   <Routes>
    <Route path ='/' element={<Signup/>} ></Route>
    <Route path ='/login' element={<Login/>} ></Route>
    <Route path ='/home' element={<MainDashboard/>} ></Route>
   </Routes>
  )
}

export default Routers