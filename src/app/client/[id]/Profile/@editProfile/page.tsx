"use client";
import { Box, Input, Button, VStack, Heading, useToast } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { editUser } from "./route";


export default function EditProduct(props: { visible: boolean; setVisible: Function ;id:string;nameprop:string;emailprop:string;passwordprop:string}) {
    const [name, setName] = useState(props.nameprop);
    const [email, setEmail] = useState(props.emailprop);
    const [password, setPassword] = useState(props.passwordprop);
    const toast = useToast();

    const handleEdit = async () => {
        const response = await editUser(props.id,name, email, password);
        if (response) {
            toast({
                title: "User editted",
                description: "The user has been successfully editted.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            handleExit();
        } else {
            toast({
                title: "Failed to edit user",
                description: "There was an error editing the user.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
        alert("User has been editted");
        window.location.reload();
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
                    Edit User
                </Heading>
                <VStack spacing={4}>
                    <Input
                        value={name}
                        placeholder="User Name"
                        className="p-2"
                        size="lg"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    />
                    <Input
                        value={email}
                        className="p-2"
                        placeholder="user email"
                        size="lg"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                    <Input
                        value={password}
                        className="p-2"
                        placeholder="user password"
                        size="lg"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                    <div className="w-full p-2 flex-col items-center justify-stretch">

                    <Button size="lg" w="full" className="bg-blue-500 text-white rounded-md p-4 mr-2" onClick={handleEdit}>
                        Finish Editing
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
