"use client";
import { useAppSelector } from "@/store/store";
import { User } from "@/store/userSlice";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector<useAppSelector>((state:User) => state.user);

  return (
    <>
      {user.auth ? (<h1>hello</h1>) : (<h1>goodbye</h1>)}    
    </>
  );
}

