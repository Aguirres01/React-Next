import { useState, useEffect } from "react"
import Topo from "@/components/Topo"
import Globais from "@/components/Globais"

export default function Useeffect() {
    const [aux, setAux] = useState<number>(0)

// alterando o valor das variaveis globais
    useEffect(() => {
        alert('UseEffect disparado')
        Globais.canal="DevCaiaque"
        Globais.curso="Java"
        Globais.ano="2029"
    }, [])



    function add() {
        let a = aux
        a++
        setAux(a)
    }


    return (
        <div>
            <Topo />
            <div>
                <p>{`Valor de aux: ${aux}`}</p>
                <button onClick={add}>Adicionar 1</button>
            </div>
            <div>
                        <p>{Globais.canal}</p>
                        <p>{Globais.curso}</p>
                        <p>{Globais.ano}</p>
                       </div>
        </div>
    )
}