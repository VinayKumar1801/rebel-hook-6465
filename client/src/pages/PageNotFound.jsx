import { Flex, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Monster from "../assets/Monster.png"
import {useNavigate} from "react-router-dom"
const PageNotFound = () => {
const navigate = useNavigate()
useEffect(()=>{
    setTimeout(()=>{
        navigate('/')
    },3000)
},[])

  return (
    <>
    <Flex justifyContent={"center"} alignItems='center' height={"100vh"}>
    <Image width={"30%"} src={Monster}/>

    </Flex>
    </>
  ) 
}

export default PageNotFound