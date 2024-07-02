"use server"
import prisma from "../../../db/db";
export const updateOrder = async (props: { id: string, quantity: string }) => {
    const response = await prisma.order.update({
        where: { id: props.id },
        data: { quantity: props.quantity }
    });
    return response
}

export const getProduct = async (props: { id: string }) => {
    const response = await prisma.product.findUnique({
        where: { id: props.id }
    });
    return response
}