//import Image from "next/image";
//import { Geist, Geist_Mono } from "next/font/google";

const nome = "Marlon"
let canal = "DevFishman"

//funcao está retornando componentes
function Topo() {
  return (
    <div className='flex justify-between items-center bg-zinc-300 h-[100px]'>
      <div>Logo </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='text-3xl'>{canal}</div>
        <div className='subtituloTopo'>Curso de React</div>
      </div>
      <div>{nome}</div>
    </div>
  )
}



export default function Home() {
  return (
    <div>
      <Topo />
      <div style={testecss}>
        <div>Curso de react Next</div>
        <div>Typescript</div>
        <div style={{ color: '#f00', backgroundColor: '#bbb' }}>React</div>
      </div>
    </div>

  )
}

const testecss = {
  display: 'flex',
  justifyContent: 'center',
  alignItens: 'center',
  color: '#oof',
  backgroundColor: '#eee',
  fontSize: '20px'
}
