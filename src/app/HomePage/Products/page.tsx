"use client"

import { Product } from "@prisma/client";
import prisma from "../../../db/db"
import CardUI from "../../_lib/@Card/CardUI";
import { CardProps } from "../../_lib/types/type";
import { Button } from "@chakra-ui/react";

export default async function Products(){
    const listProdectDB:Product[] = await prisma.product.findMany();
    const listProdect:CardProps[] = listProdectDB.map((product) => {
        return {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            imageUrl: product.image
        }
    })

    const handleAdd = async () => {
        console.log("Add Product")
    }
    const handleDelete = async () => {
        console.log("Delete Product")
    }

    return (
        <>
            <div>
                <Button onClick={handleAdd} colorScheme="blue">Add Product</Button>
                <Button onClick={handleDelete} colorScheme="red">Delete Product</Button>
            </div>
            <div className="w-full p-4 grid gap-4 grid-cols-3 justify-center">
                {listProdect.map((product) => <CardUI id={product.id} title={product.title} description={product.description} price={product.price} imageUrl={""}/>)}
            </div>
        </>
    )
}