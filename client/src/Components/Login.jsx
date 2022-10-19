import React, { useState } from 'react'
import {Box, Button, Heading, Input, Text} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email , setEmail] = useState("")

    const [password , setPassword] = useState("")
  
    const navigate = useNavigate()
  
    const handleLogin =() =>{
        if(!email || !password)
        {
            alert("Some Credentials are missing")
        }
        else{
            const payload={
                email,password
            }
            fetch("http://localhost:8050/user/login",{
                method:"POST",
                body:JSON.stringify(payload),
                headers : {
                    'Content-Type': 'application/json',
                }
            })
            .then((res)=>res.json())
            .then((res)=>{

                console.log(res)
                localStorage.setItem("usertoken" ,res.token)

                alert("Login Successfull")

                navigate("/bmicalculator")
            })
        }
    }
  return (
    <div>
        <Box>

         <Heading padding="15px">Please Login</Heading>
        
        </Box>
        <Box width="30%" margin="auto" style={{boxShadow:"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",padding:"15px"}}>
            <Text>Please Login To Continue</Text>

            <Input value={email} placeholder='Enter Email...' onChange={(e)=>setEmail(e.target.value)}/>
            <Input value={password} placeholder='Enter Password...' onChange={(e)=>setPassword(e.target.value)}/>

            <Button onClick={handleLogin}>Login</Button>
        </Box>
    </div>
  )
}

export default Login