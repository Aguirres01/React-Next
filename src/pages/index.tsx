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
      <div className="flex justify-center gap-3">
        <Card produto={'Mouse'} valor={'R$49,90'}/>
        <Card produto={'Teclado'} valor={'R69,90'}/>
        <Card produto={'Monitor'} valor={'R$459,90'}/>
        <Card produto={'CPU'} valor={'R$799,90'}/>
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
