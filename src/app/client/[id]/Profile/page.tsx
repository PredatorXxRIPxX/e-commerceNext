export default function Profile({params}:{params:{id:string}}){
    return (
        <div>
            <h1>Profile</h1>
            <p>{params.id}</p>
        </div>
    )
}