"use server"

import prisma from "../../../../../db/db"

export const getProduct = async ()=>{
    const response = await prisma.product.findMany();
    return response;
}

export const addProductToOrders = async(idProduct:string,idUser:string)=>{
    const response = await prisma.user.update({where:{id:idUser},data:{orders:{push:idProduct}}});
    return response;
}