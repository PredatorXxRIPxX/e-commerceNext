"use client"

import Link from "next/link";
import { useSelector } from "react-redux";
export default function HomePage({children}:{children:React.ReactNode}){
    const user = useSelector((state:any)=>state.user);
    return (
        <>
            
            <nav className="flex items-center justify-center p-6 text-white bg-black font-bold">
                <ul className="flex list-none items-center" >
                    <li className="p-4 ml-2 mr-2"><Link href={`/client/${user.id}/Shop`}>Shop</Link></li>
                    <li className="p-4 ml-2 mr-2"><Link href={`/client/${user.id}/Orders`}>Orders</Link></li>
                    <li className="p-4 ml-2 mr-2"><Link href={`/client/${user.id}/Profile`}>Profile</Link></li>
                </ul>
            </nav>
            <div>
                {user.auth?children:<h1 className="text-center text-3xl">Please Login as a user</h1>}
            </div>
            
        </>
    )
}