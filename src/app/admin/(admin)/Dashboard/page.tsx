import React from "react";
import prisma from "../../../../db/db"
import DashCard from "../@dashboardCards/dashcard";

export default async function Dashboard(){
    const totalUsers = await prisma.user.count();
    const totalProducts = await prisma.product.count();
    const totalOrders = await prisma.order.count();    
    return (
        <>
            <h1 className="  p-5 font-bold text-white text-5xl">DashBoard</h1>
            <DashCard props={{title:"Total Users",information:"Total number of users",value:totalUsers.toString()}}/>
            <DashCard props={{title:"Total Products",information:"Total number of products",value:totalProducts.toString()}}/>
            <DashCard props={{title:"Total Orders",information:"Total number of orders",value:totalOrders.toString()}}/>
        </>
    )
}