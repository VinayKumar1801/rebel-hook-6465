import React from 'react'
import {Routes,Route} from "react-router-dom"
import MainDashboard from '../pages/MainDashboard/MainDashboard'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'


import Checkout from '../pages/Checkout/Checkout'
import Pricing from '../pages/Pricing'
import MainHome from '../components/Home/MainHome'
const Routers = () => {
  return (
    <>
   
   <Routes>
    <Route path='/' element={<MainHome/>}></Route>
    <Route path ='/signup' element={<Signup/>} ></Route>
    <Route path ='/login' element={<Login/>} ></Route>
    <Route path='/pricing' element={<Pricing/>}></Route>
    <Route path ='/dashboard' element={<MainDashboard/>} ></Route>
    <Route path='/checkout' element={<Checkout/>}></Route>
   </Routes>
   </>
  )
}

export default Routers