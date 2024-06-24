"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
export default function HomePage({children}:{children:React.ReactNode}){
    const currentPath = usePathname()
    const admin = useSelector((state:any)=>state.admin);
    return (
        <div>
            <nav className="flex items-center justify-center p-6 text-white bg-black font-bold">
                <ul className="flex list-none items-center" >
                    <Link href={"/admin/Dashboard"}><li className={`p-4 ml-2 mr-2 ${currentPath === "/admin/Dashboard ? bg-blue-500 text-white:bg-black text-white"}`}>Dashboard</li></Link>
                    <Link href={"/admin/Products"}><li className={`p-4 ml-2 mr-2 ${currentPath === "/admin/Products ? bg-blue-500 text-white:bg-black text-white"}`}>Products</li></Link>
                    <Link href={"/admin/Orders"}><li className={`p-4 ml-2 mr-2 ${currentPath === "/admin/Orders ? bg-blue-500 text-white:bg-black text-white"}`}>Orders</li></Link>
                </ul>
            </nav>
            <div>
                {admin.auth?children:<h1 className="text-center text-3xl">Please Login</h1>}
            </div>
        </div>
    )
}

