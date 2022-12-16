import React from 'react'
import { useSelector } from 'react-redux';
import SidebarWithHeader from '../../components/Sidebar/Sidebar'
import {Navigate} from "react-router-dom"

const Dashboard = () => {
  const { isAuth } = useSelector((store) => store.userLogin);
    if(!isAuth){
        return <Navigate to ="/login"/>
    }
  return (
    <div>
     <SidebarWithHeader/>
    </div>
  )
}

export default Dashboard