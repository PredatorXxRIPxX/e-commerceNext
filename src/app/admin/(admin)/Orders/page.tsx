import prisma from "../../../../db/db"
import { orderType} from "../../../_lib/types/type"

export default  async function Orders(){
    const orders:any[] = await prisma.order.findMany(); 
    return (
        <>
            <div className="w-full p-4 grid gap-4 grid-cols-3 justify-center text-black">
                {orders.map((order:orderType) => {
                    return (
                        <div className="bg-white p-4 rounded-lg">
                            <h1 className="text-2xl font-bold">Order ID: {order.id}</h1>
                            <h1 className="text-xl font-bold">User ID: {order.userId}</h1>
                            <h1 className="text-xl font-bold">Product ID: {order.productId}</h1>
                        </div>
                    )
                })}
            </div>
        </>
    )
}