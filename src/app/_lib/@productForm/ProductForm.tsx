"use client"

import { Button, Input } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { AddProductToDB } from "./_Route/route";

export default function ProductForm(){
    const [productName,SetProductName] = useState("")
    const [productDescription,SetProductDescription] = useState("")
    const [productPrice,SetProductPrice] = useState(0)
    const [productImage,SetProductImage] = useState("")

    const handleAddProduct = async () => {
        const response = await AddProductToDB(productName,productDescription,productPrice.toString(),productImage)
        if(response){
            alert("Product Added");
            window.location.reload();
        }else{
            alert("Failed to add product");
        }
    }

    return (
        <div className=" opacity-40 bg-[#333] flex items-center justify-center z-10 absolute top-0 left-0">
            <div className="bg-white p-5 rounded-lg">
                <h1 className="text-2xl font-bold">Add Product</h1>
                <div className="flex flex-col gap-3">
                    <label>Title</label>
                    <Input size={"lg"} className="mb-2 mt-2"  value={productName} onChange={(e: ChangeEvent<HTMLInputElement>) => SetProductName(e.target.value)}/>          
                </div>
                <div className="flex flex-col gap-3">
                    <label>Description</label>
                    <Input size={"lg"} className="mb-2 mt-2"  value={productDescription} onChange={(e: ChangeEvent<HTMLInputElement>) => SetProductDescription(e.target.value)}/>          
                </div>
                <div className="flex flex-col gap-3">
                    <label>Price</label>
                    <Input type="number" size={"lg"} className="mb-2 mt-2"  value={productPrice} onChange={(e: ChangeEvent<HTMLInputElement>) => SetProductPrice(Number(e.target.value))}/>          
                </div>
                <div className="flex flex-col gap-3">
                    <label>Image</label>
                    <Input type="file" size={"lg"} className="mb-2 mt-2"  value={productImage} onChange={(e: ChangeEvent<HTMLInputElement>) => SetProductImage(e.target.value)}/>          
                </div>
                <Button className=" self-center" colorScheme="blue" size="lg" onClick={handleAddProduct} >Add Product</Button>
            </div>      
        </div>
    )
}