"use client"
import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux"
import { deleteProfile } from "./_Route/route";
import { useState } from "react";
import { redirect } from "next/navigation";
import EditProfile from "./@editProfile/page";

export default function Profile({params}:{params:{id:string}}){
    const user = useSelector((state:any)=>state.user);
    const [visible,setVisible] = useState(false);
    const handleEdit = async()=>{
        setVisible(true);
    }
    const handleDelete = async ()=>{
        const response = await deleteProfile(params.id);
        if(response){
            redirect("/Login")
        }else{
            alert("enable to delete Profile")
        }            
    }
    
    return (
        <>
        {visible && <EditProfile visible={visible} setVisible={setVisible} id={params.id} nameprop={user.username} emailprop={user.email} passwordprop={user.password}/>}
        <div className="p-6 rounded-lg bg-white text-black w-full">
            <h1 className="font-bold text-3xl">username: {user.username}</h1>
            <p className="font-bold text-xl text-gray-600"> user ID: {params.id}</p>
            <p className=" font-semibold text-xl text-black">user Email: {user.email}</p>
            <div className="flex items-center justify-center w-full">
                <Button colorScheme="blue" className="self-center text-white bg-blue-500 ml-2 rounded-lg p-5" onClick={handleEdit}>Edit Profile</Button>
                <Button colorScheme="red" className="self-center text-white bg-red-500 ml-2 rounded-lg p-5" onClick={handleDelete}>Delete Profile</Button>
            </div>
        </div>
        </>
    )
}