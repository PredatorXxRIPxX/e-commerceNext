"use client"

import OrderUiClient from "../../../_lib/@CardOrderclient/OrderUiClient";
import { useEffect, useState } from "react";
import { getOrders } from "./_Route/route";

interface orderUserUi {
    id: string,
    title: string,
    quantite: number,
    userId: string,
    price: number
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

    console.log(userOrdersFetch);
    
    return (
        <div className="p-6 bg-white rounded-lg text-black">
            <h1 className="font-bold text-black text-3xl">Orders: </h1>
            {userOrdersFetch.length === 0 ? (
                <h1 className="text-center text-2xl">No Orders</h1>
            ) : (
                userOrdersFetch.map((orderUser: orderUserUi) => (
                    <OrderUiClient 
                        key={orderUser.id} 
                        id={orderUser.id} 
                        title={orderUser.title} 
                        quantity={orderUser.quantite} // Fixed the property name
                        price={orderUser.price} 
                        userId={params.id}
                    />
                ))
            )}
        </div>
    );
}
