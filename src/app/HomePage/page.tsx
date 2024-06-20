import { cardData } from "@/app/_lib/api/api"
import { Card } from "@chakra-ui/react"
import CardUI from "../_lib/@Card/CardUI"

export default function HomePage(){
    const products = cardData
    return (
        <div className="grid grid-cols-3 gap-5 p-4">
            {products.map((product) => <CardUI title={product.title} description={product.description} price={product.price} imageUrl={product.imageUrl} />)}
        </div>
    )
}