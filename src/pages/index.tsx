//import Image from "next/image";
//import { Geist, Geist_Mono } from "next/font/google";
import Topo from "@/components/Topo"
import Card from "@/components/Card"

const nome = "Marlon Aguirre"
let canal = "DevFishman"





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
  color: '#OOf',
  backgroundColor: '#eee',
  fontSize: '20px'
}
