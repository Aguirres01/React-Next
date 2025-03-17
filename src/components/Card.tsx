export default function Card (props:any){
    return(
        <div className='flex flex-col border border-red-700 rounded P-1'>
        <div>{props.produto}</div>
        <div>{props.valor}</div>
        </div>
        
    )
}