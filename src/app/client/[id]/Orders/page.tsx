export default function Orders({params}:{params:{id:string}}){
    return (
        <div>
            <h1>Orders</h1>
            <p>{params.id}</p>
        </div>
    )
}