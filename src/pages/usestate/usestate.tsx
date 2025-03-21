import { useState } from "react"
import DisplayState from "@/components/DisplayState"
import Topo from "@/components/Topo"

export default function Usestate(){
    const [cont, setCont] = useState<number>(0)


  
    return(
        <div>
            <div>
                <Topo/>
            </div>
            usestate
            <DisplayState valor={cont} fvalor={setCont}></DisplayState>
            
        </div>
    )
}