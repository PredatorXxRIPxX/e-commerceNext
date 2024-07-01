"use server"
import prisma from "../../../../db/db";

export const addProduct = async (name: string, price: string, description: string) => {
    return await prisma.product.create({
        data: {
            title: name,
            price: price,
            description: description
        }
    })
}