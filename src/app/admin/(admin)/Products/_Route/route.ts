"use server"
import prisma from "../../../../../db/db";

export const getProducts = async () =>{
    return await prisma.product.findMany();
}