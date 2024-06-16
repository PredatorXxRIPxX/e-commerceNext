"use client"
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import Link from "next/link"
import { ChangeEvent, useState } from "react"
import { useAppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";
import { login } from "@/store/userSlice";
import { NextResponse } from "next/server";

export default function Login() {

    const dispatch = useDispatch<useAppDispatch>();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [show,setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const handlelogin = () => {
        dispatch(login({auth:true,email:email,username:"user",orders:[]}))
        NextResponse.redirect('/');
    }

    return (
        <>
            <h1 className=" text-center text-3xl">Welcome Back</h1>
            <form className="p-6">
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
                <Button className=" self-center" colorScheme="blue" size="lg" onClick={handlelogin}>Log in</Button>
            </center>
            <center>
                <p>Don't have an Account ? <Link href={'/Register'}><span className="text-blue-500 underline" >Register here</span></Link></p>
            </center>
        </>
    )
}