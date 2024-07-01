"use client";
import { Box, Input, Button, VStack, Heading, useToast } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { addProduct } from "./route";

export default function AddProduct(props: { visible: boolean; setVisible: Function }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const toast = useToast();

    const handleAdd = async () => {
        const response = await addProduct(name, price, description);
        if (response) {
            toast({
                title: "Product Added",
                description: "The product has been successfully added.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            handleExit();
        } else {
            toast({
                title: "Failed to Add Product",
                description: "There was an error adding the product.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    const handleExit = () => {
        props.setVisible(false);
    };

    return (
        <Box
            className="fixed inset-0 flex items-center justify-center z-10 text-black font-bold rounded-lg p-4" 
            bg="rgba(51, 51, 51, 0.75)"
        >
            <Box
                className="bg-white p-6 rounded-md shadow-lg text-center max-w-sm w-full flex-col items-center" 
                bg="white"
                p={6}
                rounded="md"
                boxShadow="lg"
                textAlign="center"
                maxW="sm"
                w="full"
            >
                <Heading as="h1" size="lg" mb={6}>
                    Add Product
                </Heading>
                <VStack spacing={4}>
                    <Input
                        value={name}
                        placeholder="Product Name"
                        className="p-2"
                        size="lg"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    />
                    <Input
                        value={price}
                        className="p-2"
                        placeholder="Product Price"
                        size="lg"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)}
                    />
                    <Input
                        value={description}
                        className="p-2"
                        placeholder="Product Description"
                        size="lg"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                    />
                    <div className="w-full p-2 flex-col items-center justify-stretch">

                    <Button size="lg" w="full" className="bg-blue-500 text-white rounded-md p-4 mr-2" onClick={handleAdd}>
                        Add Product
                    </Button>
                    <Button size="lg" w="full" className=" ml-2 bg-red-500 text-white rounded-md p-4" onClick={handleExit}>
                        Exit
                    </Button>
                    </div>
                </VStack>
            </Box>
        </Box>
    );
}
