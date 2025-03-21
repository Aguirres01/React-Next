interface CardProps{
    produto:string,
    valor:number,
    desconto:number,
    funcao: (valor: number, desconto: number) => number;    
    children: React.ReactNode;
}

//onde tem desconto borda vermelha, onde tem desconto borda azul.
export default function Card (props:CardProps){
    return(
        <div className={`flex flex-col border-4 ${props.desconto>0?' border-red-700':'border-blue-700'} rounded-sm P-1`}>
        <div>Produto: {props.produto}</div>
        <div>Valor: R${props.valor}</div>
        {props.desconto >0&&(
            <div>
                <div>Desconto R${props.desconto}</div>
                <div>Preço venda: R${props.funcao(props.valor,props.desconto)}</div>
            </div>
        )
        }
        <div>{props.children}</div>
        
        </div>
        
    )
}