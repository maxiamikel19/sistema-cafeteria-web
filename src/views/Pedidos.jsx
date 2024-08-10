import clienteAxios from "../config"
import useSWR from "swr"
import { formatarDinheiro } from "../helpers"

export default function Pedidos() {

  const token = localStorage.getItem('AUTH_TOKEN')
  
  const fetcher = () => clienteAxios('/api/pedidos', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
  const {data, error, isLoading} = useSWR('/api/pedidos', fetcher, { refreshInterval:1000})

  // console.log(data?.data)
  // console.log(isLoading)
  // console.log(error)
  
  if(isLoading) return ("Carregando...")

  console.log(data)
  return (
    <div className="w-full px-3S">
      <div className="px-2 pb-4 shadow-2xl bg-white border text-center mb-2">
        <h1 className="uppercase font-black text-slate-600 text-2xl">pedidos</h1>
      </div>

      <div className="w-full grid grid-cols-2 gap-4">
        
        {data.data.data.map(pedido => (
          <div className="p-5 border bg-white shadow space-y-2">
             <p key={pedido.id} className="font-semibold uppercase underline"> id:  {pedido.id}</p>
              
             {pedido.produtos.map(produto=> (
              <div className="border p-2 my-3 border-purple-200 rounded" key={produto.id}>
                <p className="font-semibold uppercase my-2">code: {produto.id}</p>
                <p className="py-3"><span>Produto:</span> {produto.nome}</p>
                <p className="p-2 my-3 font-semibold uppercase">
                  <span>QTD: </span> <span>{produto.pivot.cantidade}</span>
                </p>
              </div>
             ))}

             <p>CLiente: {pedido.user.name}</p>
             <p className="p-2 my-3 font-semibold ">
                Total a pagar: 
                <span className="text-purple-950 uppercase ml-3">{formatarDinheiro(pedido.total)}</span>
              </p>

             <div className="p-3">
              <button 
                  type="submit"
                  className="bg-purple-700 hover:bg-purple-600 text-white uppercase w-full p-3 font-bold cursor-pointer rounded-md"
                  
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </button> 
             </div>
          </div>
         
        ))}

      </div>
    </div>
  )
}
