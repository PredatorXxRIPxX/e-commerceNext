import prisma from "../../../../db/db"

export const AddProductToDB = async (productName: string, productDescription: string, productPrice: string, productImage: string) => {
    const response = await prisma.product.create({
        data:{
            title:productName,
            description:productDescription,
            price:productPrice,
            image:productImage
        }
    })
    return response
}