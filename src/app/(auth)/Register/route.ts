import { connectToDatabase, prisma } from "@/api/api";
import { NextResponse } from "next/server";

export const POST = async (req:Request) => {
    try {
        const {name,email,password} = await req.json();
        if(!name || !email || !password) return new Response("error", { status: 400 });
        await connectToDatabase();
        const newUser = prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password,
            },
        });
        return new NextResponse(JSON.stringify(newUser), { status: 200 });
    } catch (error) {
        return new Response("error", { status: 500 });
    }
}