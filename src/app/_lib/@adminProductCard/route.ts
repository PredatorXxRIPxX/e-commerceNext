"use server"
import prisma from "../../../db/db"

export const updateProduct = async (id:string,title:string,description:string,price:string)=>{
    const response = await prisma.product.update({
        where:{
            id:id
        },
        data:{
            title:title,
            description:description,
            price:price
        }
    })
    return response
}