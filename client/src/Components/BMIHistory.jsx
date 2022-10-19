import React, { useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button
  } from '@chakra-ui/react'
import { useEffect } from 'react'

const BMIHistory = () => {

    const[data,setData] = useState([])

    const getData = ()=>{
        fetch("http://localhost:8050/bmi/history",{
            method:"GET",
            headers : {
                'Content-Type': 'application/json',
                'authorization' : `bearer ${localStorage.getItem("usertoken")}`
            }
        })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                setData(res)
            })
    }

    useEffect(()=>{
        getData()
    },[])

    const deletebmi = (id) =>{
        console.log(id);
        fetch(`http://localhost:8050/bmi/${id}/deletebmi`,{
            method:"DELETE"
        })
        .then((res)=>{
            alert("Deleted successfully")
        })
    }
  return (
    <div>
        <TableContainer width="80%" margin="auto">
            <Table variant='striped' colorScheme='cyan'>
            <Thead>
                <Tr>
                <Th>Weight</Th>
                <Th>Height</Th>
                <Th>BMI</Th>
                </Tr>
            </Thead>
            <Tbody>
                {data.map((item)=>(
                <Tr>
                    <Td>{item.weight}</Td>
                    <Td>{item.height}</Td>
                    <Td>{item.BMI}</Td>
                    <Td><Button onClick={()=>deletebmi(item._id)}>Delete</Button></Td>
                </Tr>
                ))}
            </Tbody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default BMIHistory