import React from "react";

export default function DashCard({props}:{props:{title:string,information:string,value:string}}){
    return (
        <div className="border-1 border-solid border-gray-100 rounded-md m-6 flex-col text-black bg-white p-6">
            <h1 className="font-bold text-3xl">{props.title}</h1>
            <p className="  font-normal text-lg text-gray-800">{props.information}</p>
            <h3 className=" font-normal text-xl">{props.value}</h3>
        </div>
    )
}