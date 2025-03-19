import Link from "next/link";

export default function Topo() {
    return (
        <div className='flex flex-col justify-between items-center bg-zinc-300 h-[140px]'>
            <div>Logo </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-3xl'>DevFishman</div>
                <div className='subtituloTopo'>Curso de React</div>
            </div>
            <nav className='flex gap-5'>
                <Link href={'/'}>
                    Home
                </Link>
                <Link href={
                    {
                        pathname:'/produtos/produtos',
                        query:{
                            nome:'Marlon', 
                            curso: 'React'}
                    }
                    }>
                    Produtos
                </Link>
                <Link href={'/teste/teste'}>
                    Teste
                </Link>
                <Link href={'/usestate/usestate'}>
                    Usestate
                </Link>
               
            </nav>
        </div>
    )
}