import Card from "@/components/Card"
import Topo from "@/components/Topo"
import { useRouter } from "next/router"


// produtos será um array de objetos
// cada objeto representa um produto
const produtos = [

    {
        id:1,
        produto: 'Mouse',
        valor: 49.90,
        desconto: 0,
        disponivel: true
    },
    {
        id:2,
        produto: 'Teclado',
        valor: 69.90,
        desconto: 0,
        disponivel: true
    },
    {
        id:3,
        produto: 'CPU',
        valor: 829.90,
        desconto: 0,
        disponivel: true
    },
    {
        id:4,
        produto: 'MOnitor',
        valor: 659.90,
        desconto: 0,
        disponivel: true
    },
    {
        id:5,
        produto: 'Cx de som',
        valor: 39.90,
        desconto: 0,
        disponivel: true
    },
    {
        id:6,
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


export default function ProdutosPagina() {
    const router = useRouter()
    const parametros = router.query 
    console.log(parametros)
    return (
        <div>
            <Topo />

            <div className="flex justify-center gap-3">
                {
                    produtos.map((e: any) => {
                        if (e.disponivel) {
                            return (
                                <Card key={e.id} produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={caldDesc}>  
                                    <div>Curso de React Next</div>
                                    <div>JIRAIA CURSOS</div>
                                
                                </Card>
                            )
                        }
                    })
                }

            </div>
        </div>
    )
}