"use server"
import prisma from "../../../../../db/db"

export const getOrders = async (props:{idUser:string}) =>{
    const response = await prisma.order.findMany({where:{userId:props.idUser}});
    return response
}
