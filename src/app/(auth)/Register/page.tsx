"use client"
import { Input , Button, InputGroup, InputRightElement } from "@chakra-ui/react"
import React from "react"
import Link from "next/link"
import axios from "axios"
import { ChangeEvent, useState } from "react"

export default function Register() {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [show,setShow] = useState(false)
    
    const handleClick = () => setShow(!show)

    const handleRegister = async () =>{
        const response = await axios.post('./Route/route.ts',{username,email,password})
        console.log("response : "+response)
    }
    return (
        <>
            <h1 className=" text-center text-3xl">let's start by join you in our Team</h1>
            <form className="p-6">
                <div className="p-2">
                    <h2>User Name</h2>
                    <Input className="mb-2 mt-2"  size={'lg'} value={username} onChange={(e:ChangeEvent<HTMLInputElement>)=>setUsername(e.target.value)}/>
                </div>
                <div className="p-2">
                    <h2>Email:</h2>
                    <Input className="mb-2 mt-2"  size={'lg'} value={email} onChange={(e:ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)}/>
                </div>
                <div className="p-2">
                    <h2>Password: </h2>
                    <InputGroup >
                        <Input className="mb-2 mt-2" type={show?"text":"password"} size={'lg'} value={password} onChange={(e:ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}/>
                        <InputRightElement width='4.5rem' className="mt-3">
                            <Button h='2.75rem' size='md' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </div>
            </form>
            <center>
                <Button className=" self-center" colorScheme="blue" size="lg" onClick={handleRegister}>Register</Button>
            </center>
            <center>

                <p>Already have an account ? <Link href={"/Login"}><span className="text-blue-500 underline">Log in here</span></Link></p>
            </center>
        </>
    )
}