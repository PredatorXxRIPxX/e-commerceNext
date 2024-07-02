"use client"
import { useEffect, useState } from "react";
import { getProduct, updateOrder } from "./route";

interface OrderUiClientProps {
    idProduct: string,
}

export default function OrderUiClient({ idProduct }: OrderUiClientProps) {
    const [quantity, setQuantity] = useState<any>(0);
    const [product,setProduct] = useState<any>({});

    const handleAddition = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    const handleSubtraction = () => {
        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    }

    useEffect(() => {
        const getOrder = async () => {
            const response = await updateOrder({ id: idProduct, quantity: quantity.toString()});
            setQuantity(response.quantity);
        };
        getOrder();
    }, [idProduct, quantity]);

    useEffect(()=>{
        const details = async()=>{
            const response = await getProduct({ id: idProduct });
            setProduct(response);
        }
        details();
    },[])

    return (
        <div className="rounded-lg bg-white text-black shadow-lg p-6 border-solid border-1 border-black mt-2 mb-2">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">{product.title}</h1>
                <h1 className="text-xl font-bold">${parseFloat(product.price).toFixed(2)}</h1>
            </div>
            <div className="flex justify-between items-center mb-4">
                <img src={product.imageUrl} alt={product.title} className="w-24 h-24 rounded-lg object-cover mr-4" />
                <div className="flex flex-col items-center">
                    <h2 className="text-lg font-semibold mb-2">Quantity: {quantity}</h2>
                    <div className="flex items-center space-x-4">
                        <button 
                            onClick={handleAddition} 
                            className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            +
                        </button>
                        <p className="text-lg font-semibold">{quantity}</p>
                        <button 
                            onClick={handleSubtraction} 
                            className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
                        >
                            -
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <h1 className="text-xl font-bold">Total: ${(parseFloat(product.price) * quantity).toFixed(2)}</h1>
            </div>
        </div>
    );
}
