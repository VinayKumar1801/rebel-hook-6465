import React from 'react'
import {Routes,Route} from "react-router-dom"
import Dashboard from '../pages/Dashboard/Dashboard'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
const Routers = () => {
  return (
   <Routes>
    <Route path ='/' element={<Signup/>} ></Route>
    <Route path ='/login' element={<Login/>} ></Route>
    <Route path ='/home' element={<Dashboard/>} ></Route>
   </Routes>
  )
}

export default Routers