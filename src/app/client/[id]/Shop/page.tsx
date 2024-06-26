"use client";
import { useEffect, useState } from "react";
import CardUI from "../../../_lib/@Card/CardUI";
import { getProduct } from "./_Route/route";

export default function Shop({ params }: { params: { id: string } }) {
    const [productList, setProductList] = useState<any[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProduct();
            setProductList(products);
        }
        fetchProducts();
    }, []); 

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mt-4 mb-4">Shop:</h1>
            <div className="grid grid-cols-3 gap-2">
                {productList.length === 0 
                    ? <h1 className="text-center text-2xl">No Products</h1>
                    : productList.map((product: any) => (
                        <CardUI 
                            key={product.id} // Add key prop
                            id={product.id} 
                            title={product.title} 
                            description={product.description} 
                            price={product.price} 
                            imageUrl={product.imageUrl} 
                        />
                    ))}
            </div>
        </div>
    );
}
