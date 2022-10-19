import React from 'react'
import { Link } from 'react-router-dom'
import {Box} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Box style={{width:"90%",margin:"auto",display:"flex",justifyContent:"space-around",backgroundColor:"teal",color:"white",padding:"12px"}}>
        <Link to="/bmicalculator" style={{fontSize:"22px"}}>BMI Calcutator</Link>
        <Link to="/bmihistory" style={{fontSize:"22px"}}>History</Link>
        <Link to="/" style={{fontSize:"22px"}}>Register</Link>
        <Link to="/login" style={{fontSize:"22px"}}>Login</Link>
        <Link to="/profile" style={{fontSize:"22px"}}>Profile</Link>

    </Box>
  )
}

export default Navbar