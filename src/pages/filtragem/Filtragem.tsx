import Topo from "@/components/Topo"
import { useEffect, useState } from "react"

export default function Filtragem() {
    const [carros, setCarros] = useState<{ id: number, categ: string, valor: string, modelo: string }[]>([])
    const [categ, setCateg] = useState<string>('')
    
    // Estados para o formulário de cadastro
    const [novaCateg, setNovaCateg] = useState<string>('')
    const [novoValor, setNovoValor] = useState<string>('')
    const [novoModelo, setNovoModelo] = useState<string>('')

    useEffect(() => {
        buscarCarros()
    }, [])

    function buscarCarros() {
        fetch('http://localhost:8080/api/carros/listar')
            .then(res => res.json())
            .then(data => setCarros(data))
            .catch(error => console.error("Erro ao buscar carros:", error))
    }

    function cadastrarCarro(event: React.FormEvent) {
        event.preventDefault()

        const novoCarro = {
            categ: novaCateg,
            valor: novoValor,
            modelo: novoModelo
        }

        fetch('http://localhost:8080/api/carros/cadastrar', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoCarro)
        })
        .then(res => res.json())
        .then(() => {
            buscarCarros() // Atualiza a lista após o cadastro
            setNovaCateg("")
            setNovoValor("")
            setNovoModelo("")
        })
        .catch(error => console.error("Erro ao cadastrar carro:", error))
    }

    const carrosFiltrados = categ ? carros.filter(c => c.categ === categ) : carros

    return (
        <div>
            <Topo />
            <label>Selecione a categoria</label>
            <select value={categ} onChange={(evt) => setCateg(evt.target.value)}>
                <option value="">Todos</option>
                <option value="Esporte">Esporte</option>
                <option value="SUV">SUV</option>
                <option value="Utilitario">Utilitario</option>
            </select>

            <div className="flex flex-col mt-4">
                <div className="flex flex-row w-[500px] font-bold">
                    <div className="w-full">Categoria</div>
                    <div className="w-full">Valor</div>
                    <div className="w-full">Modelo</div>
                </div>

                {carrosFiltrados.length > 0 ? (
                    carrosFiltrados.map((c) => (
                        <div className="flex flex-row w-[500px]" key={c.id}>
                            <div className="w-full">{c.categ}</div>
                            <div className="w-full">{c.valor}</div>
                            <div className="w-full">{c.modelo}</div>
                        </div>
                    ))
                ) : (
                    <p className="mt-2">Nenhum carro encontrado.</p>
                )}
            </div>

            {/* Formulário de Cadastro */}
            <div className="mt-6 p-4 border rounded">
                <h2 className="font-bold">Cadastrar Novo Carro</h2>
                <form onSubmit={cadastrarCarro} className="flex flex-col gap-2">
                    <select value={novaCateg} onChange={(e) => setNovaCateg(e.target.value)} required>
                        <option value="">Selecione a categoria</option>
                        <option value="Esporte">Esporte</option>
                        <option value="SUV">SUV</option>
                        <option value="Utilitario">Utilitario</option>
                    </select>
                    <input type="text" placeholder="Modelo" value={novoModelo} onChange={(e) => setNovoModelo(e.target.value)} required />
                    <input type="number" placeholder="Valor" value={novoValor} onChange={(e) => setNovoValor(e.target.value)} required />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
