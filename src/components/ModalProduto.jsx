import useProvider from "../hooks/useProvider"
import { useState } from "react"
import { formatarDinheiro } from "../helpers"

export default function ModalProduto() {

    const {produto, handleClickModalProduto} = useProvider()
    const {nome,descricao, imagen, preco} = produto
    const [cantidade, setCantidade] = useState(1)


    const handleAdicionarCantidade=() =>{
        if(cantidade >=5){
            return
        }
        setCantidade(cantidade + 1 )
    }

    const handleDisminuirCantidade=() =>{
        if(cantidade <=1){
            return
        }
        setCantidade(cantidade - 1 )
    }
    //console.log(produto)

  return (
    <div className="md:flex flex gap-10">
        <div className="md:w-1/2 w-full">
            <img 
                src={`../img/${imagen}.jpg`} 
                alt={nome} 
            />
        </div>
        <div className="w-full">
            <div className="text-right w-full p-0">
                <button 
                    onClick={handleClickModalProduto}
                    className="text-blue-950 font-bold uppercase text-md hover:text-red-600"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
               
                </button>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800">{nome}</h3>
            <p className="text-md text-gray-800 py-4">{descricao}</p>
            <p className="font-bold text-xl my-10 uppercase">Pre&ccedil;o: <span className="text-2xl text-orange-800"> {formatarDinheiro(preco)}</span></p>

            <div className="flex items-center justify-between md:px-10">
                <div className="flex">
                    <button 
                        type="button"
                        className="mr-4"
                        onClick={handleDisminuirCantidade}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </button>

                    <p>{cantidade}</p>

                    <button
                        type="button"
                        className="ml-4"
                        onClick={handleAdicionarCantidade}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>


                    </button>
                </div>
                <div className="p-2">
                    <button
                        type="button"
                        className="bg-slate-500 hover:bg-slate-700 text-white uppercase w-full p-3 cursor-pointer rounded-md"
                    >Adicionar</button>
                </div>
            </div>
        </div>
    </div>
  )
}
