"use server"

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../db/db";
import { revalidatePath } from "next/cache";
import { Mongoresponse } from "../../../_lib/types/type";

export default async function loginAPI(fromData:{email:string,password:string}){
  const { email, password } = fromData;
  const response = await prisma.user.findUnique({
    where: {
      email: email,
      password: password,
    },
  })
  return response;
}
