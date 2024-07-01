"use server"

import { create } from "domain"
import prisma from "../../../db/db"

export const addToOrder = async (props:{idUser:string,idProduct:string}) =>{
    const response = await prisma.order.create({
        data:{
            userId:props.idUser,
            productsID:props.idProduct
        }
    })
    
    return response
} 

