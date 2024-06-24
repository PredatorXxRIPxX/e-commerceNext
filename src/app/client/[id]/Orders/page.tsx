import prisma from "../../../../db/db"
import OrderUiClient from "../../../_lib/@CardOrderclient/OrderUiClient"

interface orderUserUi{
    id:string,
    title:string,
    quantite:number,
    userId:string
    price:number
}

export default async function Orders({params}:{params:{id:string}}){
    const userOrdersFetch:any[] = await prisma.order.findMany({where:{userId:params.id}});
    
    return (
        <div className="p-6 bg-white rounded-lg text-black">
            <h1 className="font-bold text-black text-3xl">Orders: </h1>
            {userOrdersFetch.length==0?<h1 className="text-center text-2xl">No Orders</h1>:userOrdersFetch.map((orderUser:orderUserUi)=><OrderUiClient id={orderUser.id} title={orderUser.title} quantity={1} price={orderUser.price} userId={params.id}/>)}
        </div>
    )
}