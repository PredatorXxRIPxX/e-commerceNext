"use client"

import { Product } from "@prisma/client";
import prisma from "../../../../db/db"
import CardUI from "../../../_lib/@Card/CardUI";
import { Button } from "@chakra-ui/react";

export default async function Products(){

    const handleAdd = async () => {
        console.log("Add Product")
    }
    const handleDelete = async () => {
        console.log("Delete Product")
    }

    return (
        <>
            <div className="flex items-center justify-center p-4 w-full">
                <Button className="self-center text-white bg-blue-500 rounded-lg p-5 mr-2" colorScheme="blue" size="lg" onClick={handleAdd}>Add Product</Button>
                <Button onClick={handleDelete} className="self-center text-white bg-red-500 ml-2 rounded-lg p-5" colorScheme="red" size="lg">Delete Product</Button>
            </div>
            
        </>
    )
}