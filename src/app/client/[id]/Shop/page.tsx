"use server"
import CardUI from "../../../_lib/@Card/CardUI";
import { getProduct } from "./_Route/route"

interface Product{
    id:string;
    title:string;
    description:string;
    price:number;
    imageUrl:string;

}

export default async function Shop({params}:{params:{id:string}}){
    const productsList = await getProduct();

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mt-4 mb-4">Shop:</h1>
            <div className="grid grid-cols-3 gap-2">
                {productsList.length==0?<h1 className="text-center text-2xl">No Products</h1>:productsList.map((product:any)=><CardUI id={product.id} title={product.title} description={product.description} price={product.price} imageUrl={product.imageUrl}/>)}
            </div>
        </div>
    )
}