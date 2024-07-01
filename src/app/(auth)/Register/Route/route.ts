"use server"
import prisma from "../../../../db/db"

export async function RegisterAPI(name: string, email: string, password: string){   

    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
        }).then((user) => {
        return user
    })

    if(user){
        return user
    }

    await prisma.user.create({
        data: {
            username: name,
            email: email,
            password: password
        }
    }).then((user) => {
        return user
    }).catch((err) => {
        return err
    })
    
}