interface DisplayStateProps {
    valor: number
    fadicionar:any
    fsubtrair:any
}



export default function DisplayState(props:DisplayStateProps) {
    return (
        <div className="flex flex-col p-5 rounded-md bg-zinc-300 justify-center items-center w-[300px]">
            <div className="flex bg-zinc-700 text-green-500 justify-center items-center w-[200px] mb-3">
            {props.valor}
            </div>
            <div className="flex gap-3">
            <button className='btnPadrao' onClick={props.fadicionar}>adicionar</button>
            <button className='btnPadrao' onClick={props.fsubtrair}>subtrair</button>
            </div>
        </div>
    )
}