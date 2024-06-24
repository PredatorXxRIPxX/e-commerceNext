import prisma from "../../../../db/db"
import CardUI from "../../../_lib/@Card/CardUI"
import { orderType } from "../../../_lib/types/type"

export default async function Orders({params}:{params:{id:string}}){
    const userOrdersFetch:any[] = await prisma.order.findMany({where:{userId:params.id}})
    return (
        <div className="p-6 bg-white rounded-lg text-black">
            <h1 className="font-bold text-black text-3xl">Orders: </h1>
            {userOrdersFetch.length==0?<h1 className="text-center text-2xl">No Orders</h1>:userOrdersFetch.map((orderUser:any)=><CardUI id={orderUser.id} title={orderUser.title} description={orderUser.description} price={orderUser.price} imageUrl={orderUser.imageUrl}/>)}
        </div>
    )
}