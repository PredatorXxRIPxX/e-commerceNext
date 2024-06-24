"use client"
import { useState } from "react";


interface orderUserProps{
    id:string,
    title:string,
    quantity:number,
    price:number,
    userId:string

}

export default function OrderUiClient({id,title,quantity,price,userId}:orderUserProps){
    const [quan,setQuan] = useState(quantity);
    const handleAddition = ()=>{
        setQuan(quan+1);
    }
    const handlesous = ()=>{
        if(quan>0){
            setQuan(quan-1);
        }
    }
    return (
        <div className="rounded-lg bg-white,text-black">
            <div className="flex justify-between p-2">
                <h1 className="text-xl font-bold">{title}</h1>
                <h1 className="text-xl font-bold">{price}</h1>
            </div>
            <div className="flex justify-between p-2">
                <div className="flex items-center justify-between p-4">
                    <h1 className="text-xl font-bold">Quantity: {quantity}</h1>
                    <div className="flex items-center">
                        <button onClick={handleAddition}>+</button>
                        <p>{quan}</p>
                        <button onClick={handlesous}>-</button>
                    </div>
                </div>
                <h1 className="text-xl font-bold">Total: {price*quan}</h1>
            </div>
        </div>
    )
}


