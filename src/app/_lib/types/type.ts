
export interface CardProps {
    id:string;
    title: string;
    description: string;
    imageUrl: string;
    price: string;
}

export interface Mongoresponse{
    success:boolean;
    message:string;
    user:any;
}

export interface orderType{
    id:string;
    userId:string;
    productId:string[];
}

