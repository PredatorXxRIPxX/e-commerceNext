
import { Metadata } from "next"
import { Inter } from "next/font/google"
import '../globals.css'
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "e-commerce|Registration",
    description: "start your journey with us",
    
}

export default function Layout({children}:{children:React.ReactNode}){
    return (
        <html lang="en">
            <body className="flex items-center bg-black justify-center w-screen h-screen border-2 border-solid border-black">
                <ChakraProvider>
                    <div className="bg-white text-black font-bold rounded-lg p-4">
                        {children}
                    </div>
                </ChakraProvider>
            </body>
        </html>
    )
}