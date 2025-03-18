//import Image from "next/image";
//import { Geist, Geist_Mono } from "next/font/google";
import Topo from "@/components/Topo"
import Card from "@/components/Card"

const nome = "Marlon Aguirre"
let canal = "DevFishman"

// produtos será um array de objetos
// cada objeto representa um produto
const produtos = [

  {
    produto: 'Mouse',
    valor: 49.90,
    desconto: 0,
    disponivel: true
  },
  {
    produto: 'Teclado',
    valor: 69.90,
    desconto: 0,
    disponivel: true
  },
  {
    produto: 'CPU',
    valor: 829.90,
    desconto: 0,
    disponivel: true
  },
  {
    produto: 'MOnitor',
    valor: 659.90,
    desconto: 0,
    disponivel: true
  },
  {
    produto: 'Cx de som',
    valor: 39.90,
    desconto: 0,
    disponivel: true
  },
  {
    produto: 'Microfone',
    valor: 65.00,
    desconto: 0,
    disponivel: true
  },

]

function caldDesc(v: number, d: number) {
  return v - d
}

function caldDesc2(v: number, d: number) {
  return v - (d / 2)
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
      <div className="flex justify-center gap-3">
        {
          produtos.map((e: any) => {
            if (e.disponivel) {
              return (
                <Card produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={caldDesc} />
              )
            }
          })
        }

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
