import prisma from "../../../../db/db"

export const DeleteProductFromDB = async (productId: string) => {
    const response = await prisma.product.delete({
        where:{
            id:productId
        }
    })
    return response
}