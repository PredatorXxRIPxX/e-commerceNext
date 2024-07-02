"use client"

import OrderUiClient from "../../../_lib/@CardOrderclient/OrderUiClient";
import { useEffect, useState } from "react";
import { getOrders } from "./_Route/route";

interface OrderUserUi {
    idProduct: string,
}

export default function Orders({ params }: { params: { id: string } }) {
    const [userOrdersFetch, setUserOrdersFetch] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getOrders({ idUser: params.id });
            setUserOrdersFetch(response);
        };
        fetchData();
    }, [params.id]);

    console.log(userOrdersFetch)
    
    return (
        <div className="p-6 bg-gray-100 ml-2 mr-2 rounded-lg text-black">
            <h1 className="font-bold text-black text-3xl">Orders: </h1>
            {userOrdersFetch.length === 0 ? (
                <h1 className="text-center text-2xl">No Orders</h1>
            ) : (
                userOrdersFetch.map((orderUser: OrderUserUi) => (
                    <OrderUiClient 
                        key={orderUser.idProduct}
                        idProduct={orderUser.idProduct} 
                    />
                ))
            )}
        </div>
    );
}
