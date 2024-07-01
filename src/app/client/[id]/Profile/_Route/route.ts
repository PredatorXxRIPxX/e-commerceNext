"use server"
import prisma from "../../../../../db/db"

export const deleteProfile = async (id: string) => {
    const user = await prisma.user.delete({
        where: {
            id: id
        }
    })
    return user
}

export const editProfile = async (id: string, data: { username: string, email: string }) => {
    const user = await prisma.user.update({
        where: {
            id: id
        },
        data: data
    })
    return user
}