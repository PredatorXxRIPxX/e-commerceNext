"use client"
import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux"
export default function Profile({params}:{params:{id:string}}){
    const user = useSelector((state:any)=>state.user);
    return (
        <div className="p-6 rounded-lg bg-white text-black w-full">
            <h1 className="font-bold text-3xl">username: {user.username}</h1>
            <p className="font-bold text-xl text-gray-600"> user ID: {params.id}</p>
            <p className=" font-semibold text-xl text-black">user Email: {user.email}</p>
            <div className="flex items-center justify-center w-full">
                <Button colorScheme="blue" className="self-center text-white bg-blue-500 ml-2 rounded-lg p-5">Edit Profile</Button>
                <Button colorScheme="red" className="self-center text-white bg-red-500 ml-2 rounded-lg p-5">Delete Profile</Button>
            </div>
        </div>
    )
}