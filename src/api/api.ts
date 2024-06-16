import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function connectToDatabase() {
    try {
        await prisma.$connect();
        console.log("Connected to the database.");
    } catch (error) {
        return error;
    }
}

export async function disconnectFromDatabase() {
    try {
        await prisma.$disconnect();
        console.log("Disconnected from the database.");
    } catch (error) {
        return error;
    }

}

export const logIn = async (email: string, password: string) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: email,
                password: password
            }
        });
        return user;
    } catch (error) {
        return error;
    }
}

export const signUp = async (username:string,email: string, password: string) => {
    try {
        const user = await prisma.user.create({
            data: {
                name: username,
                email: email,
                password: password
            }
        });
    } catch (error) {
        return error
    }
}

export const getProducts = async () => {
    try {
        const products = await prisma.product.findMany();
        return products;
    } catch (error) {
        return error;
    }
}

export const getProduct = async (id: string) => {
    try {
        const product = await prisma.product.findFirst({
            where: {
                id: id
            }
        });
        return product;
    } catch (error) {
        return error;
    }
}



interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    price: string;
}

export const cardData: CardProps[] = [
    {
        title: "Product 1",
        description: "This is the description for Product 1.",
        imageUrl: "https://example.com/image1.jpg",
        price: "$19.99"
    },
    {
        title: "Product 2",
        description: "This is the description for Product 2.",
        imageUrl: "https://example.com/image2.jpg",
        price: "$29.99"
    },
    {
        title: "Product 3",
        description: "This is the description for Product 3.",
        imageUrl: "https://example.com/image3.jpg",
        price: "$39.99"
    },
    {
        title: "Product 4",
        description: "This is the description for Product 4.",
        imageUrl: "https://example.com/image4.jpg",
        price: "$49.99"
    },
    {
        title: "Product 5",
        description: "This is the description for Product 5.",
        imageUrl: "https://example.com/image5.jpg",
        price: "$59.99"
    },
    {
        title: "Product 6",
        description: "This is the description for Product 6.",
        imageUrl: "https://example.com/image6.jpg",
        price: "$69.99"
    },
    {
        title: "Product 7",
        description: "This is the description for Product 7.",
        imageUrl: "https://example.com/image7.jpg",
        price: "$79.99"
    },
    {
        title: "Product 8",
        description: "This is the description for Product 8.",
        imageUrl: "https://example.com/image8.jpg",
        price: "$89.99"
    },
    {
        title: "Product 9",
        description: "This is the description for Product 9.",
        imageUrl: "https://example.com/image9.jpg",
        price: "$99.99"
    },
    {
        title: "Product 10",
        description: "This is the description for Product 10.",
        imageUrl: "https://example.com/image10.jpg",
        price: "$109.99"
    }
];
