import React, { useState } from 'react'
import {Box, Button, Heading, Input, Text} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [email , setEmail] = useState("")

  const [password , setPassword] = useState("")

  const [name , setName] = useState("")

  const navigate = useNavigate()

  const handleSignup =() =>{

    if(!email || !password || !name) 
    {
      alert("Some Credentials Are Missing")
    }
    else{
      
        const payload = {
          name,
          email,
          password,
        }

        fetch("http://localhost:8050/user/register",{
            method:"POST",
            body:JSON.stringify(payload),
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then((res)=>{
            alert("User Registration Success")

            navigate("/login")
        })
    }
  }
  return (
    <Box>
        <Box>
        <Heading padding="10px">Plese Register</Heading>
        
        </Box>
        <Box width="30%" margin="auto"style={{boxShadow:"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",padding:"15px"}}>
            <Text>Please Register</Text>

            <Input type="text" value={name} placeholder='Enter name...' onChange={(e)=>setName(e.target.value)}/>
            <Input type="email" value={email} placeholder='Enter Email...' onChange={(e)=>setEmail(e.target.value)}/>
            <Input type="password" value={password} placeholder='Enter Password...' onChange={(e)=>setPassword(e.target.value)}/>

            <Button onClick={handleSignup}>Login</Button>
        </Box>
    </Box>
  )
}

export default Register