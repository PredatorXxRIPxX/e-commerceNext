"use server";
import prisma from "../../../../../db/db"
export const editUser = async (id: string, name: string, email: string, password: string) => {
    const response = await prisma.user.update({
        where:{
            id:id
        },
        data:{
            username:name,
            email:email,
            password:password
        }
        
    });
    return response;
}