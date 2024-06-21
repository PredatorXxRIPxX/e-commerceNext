import { Product } from "@prisma/client";
import prisma from "../../../db/db"
import CardUI from "../../_lib/@Card/CardUI";
import { CardProps } from "../../_lib/types/type";

export default async function Products(){
    const listProdectDB:Product[] = await prisma.product.findMany();
    const listProdect:CardProps[] = listProdectDB.map((product) => {
        return {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            imageUrl: product.image
        }
    })
    return (
        <>
            <div className="w-full p-4 grid gap-4 grid-cols-3 justify-center">
                {listProdect.map((product) => <CardUI id={product.id} title={product.title} description={product.description} price={product.price} imageUrl={""}/>)}
            </div>
        </>
    )
}