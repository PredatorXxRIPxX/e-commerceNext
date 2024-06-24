export default function Shop({params}:{params:{id:string}}){
    return (
        <div>
            <h1>Shop</h1>
            <p>{params.id}</p>
        </div>
    )
}