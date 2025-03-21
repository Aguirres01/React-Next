import Topo from "@/components/Topo";
import {useState, useEffect} from "react";
import Globais from "@/components/Globais";


const cursos = ['','HTML', 'React', 'C++', 'Javascript', 'Arduino', 'CSS']


//criado dois campos de texto, um para o nome e outro para o curso, eles serão alterados conforme o user digita.
export default function Inputs() {
    const [nome, setNome] = useState<string>('')
    const [curso, setCurso] = useState<string>('')

    useEffect(() => {
        Globais.curso="react"
    }, [])

    function fcursos(){
        return cursos.map((c)=><option key={c}>{c}</option>)
    }
    
  


    return (
        <div>
            <div><Topo/>
           <div className="campoForm">
                <label>Nome</label>
                {/* deixa o input editavel*/}
                <input type="text" value={nome} onChange={(evt)=>setNome(evt.target.value)}/>
           </div>
           <div className="campoForm">
                <label>Curso</label>
                <select value={curso} onChange={(evt)=>setCurso(evt.target.value)}>
                    {/*metodo para percorrer a lista de cursos
                    {
                        
                        cursos.map((c)=><option key={c}>{c}</option>)
                    } */}
                    {fcursos()}
                </select>
           </div>
           <div>Nome digitado: {nome}</div><div>Curso escolhido: {curso}</div>
           <div>
            <p>{Globais.canal}</p>
            <p>{Globais.curso}</p>
            <p>{Globais.ano}</p>
           </div>
           </div>
        </div>
    )
}