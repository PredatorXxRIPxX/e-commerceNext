"use client";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
//import { useDispatch } from "react-redux";
// Import the action to be dispatched
//import { login } from "../redux/actions"; 
import axios from "axios";
import loginAPI from "./Route/route";
import { Mongoresponse } from "../../_lib/types/type";

export default function Login() {
  //const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const handleLogin = async () => {
    var response = await loginAPI({ email, password });
    console.log(response);
    if(!response){
      alert("Invalid Email or Password");
      return;
    }else{
      router.push("/HomePage/Dashboard");
    }
  };

  return (
    <>
      <h1 className="text-center text-3xl">Welcome Back</h1>
      <form className="p-6" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <div className="p-2">
          <h2>Email:</h2>
          <Input
            className="mb-2 mt-2"
            size={"lg"}
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
        </div>
        <div className="p-2">
          <h2>Password: </h2>
          <InputGroup>
            <Input
              className="mb-2 mt-2"
              type={show ? "text" : "password"}
              size={"lg"}
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem" className="mt-3">
              <Button h="2.75rem" size="md" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>
        <center>
          <Button className="self-center" colorScheme="blue" size="lg" onClick={handleLogin}>
            Log in
          </Button>
        </center>
      </form>
      <center>
        <p>
          Don't have an Account?{" "}
          <Link href="/Register">
            <span className="text-blue-500 underline">Register here</span>
          </Link>
        </p>
      </center>
    </>
  );
}
