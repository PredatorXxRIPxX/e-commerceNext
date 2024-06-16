import { connectToDatabase, prisma } from "@/api/api";
import { NextResponse } from "next/server";

export const GET = async (req:Request) => {
    try {
        const {email,password} = await req.json();
        if(!email || !password) return new Response("Invalide Data", { status: 400 });
        await connectToDatabase();
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        return new NextResponse(JSON.stringify(user), { status: 200 });
    } catch (error) {
        return new Response("error", { status: 500 });
    }
}