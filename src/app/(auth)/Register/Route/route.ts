import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../../db/db"

export async function RegisterAPI(req: NextApiRequest,res:NextApiResponse) {   
      if(!prisma.$connect()){
        await prisma.$connect()
      }
      const { name, email, password } = await req.body
      if (!name || !email || !password) {
        console.log('Missing required fields')
        
        return res.status(400).json({ message: 'Missing required fields' });
      }
    
      try {    
        const user = await prisma.user.create({
          data: {
            username: name,
            email,
            password: password,
          },
        });
        console.log('User created successfully')
        return res.status(201).json(user); 
      } catch (error) {
        console.error(error);
        if (error.code === 'P2002') {
          return res.status(400).json({ message: 'Email already exists' });
        }
        res.status(500).json({ message: 'Internal Server Error' });
      } finally {
        await prisma.$disconnect();
      }
}