"use server"
import prisma from "../../../../db/db";

export const deleteProduct = async (id: string) => {
    return await prisma.product.delete({
        where: {
            id: id,
        },
    })
}