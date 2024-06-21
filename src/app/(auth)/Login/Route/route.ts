import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../db/db";
import bcrypt from "bcrypt";

export default async function loginAPI(req: NextApiRequest, res: NextApiResponse) {
    if(!prisma.$connect){
        await prisma.$connect()
    }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user && await bcrypt.compare(password, user.password)) {
      return res.status(200).json({ success: true, user });
    } else {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}
