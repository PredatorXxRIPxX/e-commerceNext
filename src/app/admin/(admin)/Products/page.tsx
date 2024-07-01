"use client";
import { Product } from "@prisma/client";
import { Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import AddProduct from "../@addProduct/page";
import { getProducts } from "./_Route/route";
import DeleteProduct from "../@deleteProduct/deleteProduct";
import AdminProductCard from "../../../_lib/@adminProductCard/adminProductCard";

export default function Products() {
    const [visible, setVisible] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [visibleDelete, setVisibleDelete] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await getProducts();
            setProducts(fetchedProducts);
        };
        fetchProducts();
    }, [visible,visibleDelete]);

    const handleAdd = () => {
        setVisible(true);
    };

    const handleDelete = () => {
        setVisibleDelete(true);
    };

    return (
        <>
            <div className='flex justify-between p-4'>
                <h1 className='text-3xl font-bold'>Products</h1>
                <div>

                <Button size="lg" className="bg-blue-500 text-white font-bold rounded-md p-4 mr-2" colorScheme="blue" onClick={handleAdd}>
                    Add Product
                </Button>
                <Button size="lg" className="bg-red-500 text-white font-bold rounded-md p-4 ml-4" colorScheme="red" onClick={handleDelete}> Delete Product</Button>
                </div>
            </div>
            {visible && <AddProduct visible={visible} setVisible={setVisible} />}
            {visibleDelete && <DeleteProduct visibleDelete={visibleDelete} setVisibleDelete={setVisibleDelete} />}
            <div className='grid grid-cols-3 gap-3 p-5'>
                {products.map((product: Product) => (
                    <AdminProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        imageUrl="url-image"
                        price={product.price}
                    />
                ))}
            </div>
        </>
    );
}
