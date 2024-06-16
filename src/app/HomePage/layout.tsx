"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomePage({children}:{children:React.ReactNode}){
    const currentPath = usePathname()
    
    return (
        <div>
            <nav className="flex items-center justify-center p-6 text-white bg-black font-bold">
                <ul className="flex list-none items-center" >
                    <Link href={"/HomePage"}><li className={`p-4 ml-2 mr-2 ${currentPath === "/HomePage ? bg-blue-500 text-white:bg-black text-white"}`}>Home</li></Link>
                    <Link href={"/HomePage/Products"}><li className={`p-4 ml-2 mr-2 ${currentPath === "/HomePage/Products ? bg-blue-500 text-white:bg-black text-white"}`}>Products</li></Link>
                    <Link href={"/HomePage/Orders"}><li className={`p-4 ml-2 mr-2 ${currentPath === "/HomePage/Orders ? bg-blue-500 text-white:bg-black text-white"}`}>Orders</li></Link>
                </ul>
            </nav>
            <div>
                {children}
            </div>
        </div>
    )
}

