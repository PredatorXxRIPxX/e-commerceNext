"use client"

import { Button, Input } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { DeleteProductFromDB } from "./_Route/route";

export default function ProductForm(){
    const [productId,setProductId] = useState("");
    const handleDelete = async () => {
        if(productId === ""){
            alert("Please enter a product ID")
            return
        }else{
            const response = await DeleteProductFromDB(productId)
            if(response){
                alert("Product Deleted")
                window.location.reload();
            }else{
                alert("Product not found")
            }
        }
    }
    return (
        <div className=" opacity-40 bg-[#333] flex items-center justify-center z-10 absolute top-0 left-0">
            <div className="bg-white p-5 rounded-lg">
                <h1 className="text-2xl font-bold">Add Product</h1>
                <div className="flex flex-col gap-3">
                    <label>Product ID:</label>
                    <Input size={"lg"} className="mb-2 mt-2"  value={productId} onChange={(e: ChangeEvent<HTMLInputElement>) => setProductId(e.target.value)}/>          
                </div>
                <Button className=" self-center" colorScheme="red" size="lg" onClick={handleDelete} >Delete Product</Button>
            </div>      
        </div>
    )
}