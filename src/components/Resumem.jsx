import { formatarDinheiro } from "../helpers"
import useProvider from "../hooks/useProvider"
import ResumenProduto from "./ResumenProduto"

export default function Resumem() {

  const {pedido, total} = useProvider()

  const isEmptyPedido = pedido.length === 0;

  //console.log(isEmptyPedido)
   
  return (
    <aside className='w-72 h-screen p-5 overflow-y-scroll'>
        <h1 className='text-3xl font-semibold text-slate-800 capitalize'>Seu pedido</h1>
        <p>Aqui ver&aacute;s o resumen completo do seu pedido</p>

        <div className="py-10">
          {pedido.length === 0 ? (
            <div className="p-2">
              <h1 className="text-2xl text-center">Voc&ecirc; n&atilde;o tem produtos agregado ainda!</h1>
            </div>
          ) : (
            pedido.map(produto => (

              <ResumenProduto
                 produto={produto}
                 key={produto.id}
              />

            ))
          )}
        </div>

        <p className="text-xl mt-10">Total: {''} {formatarDinheiro(total)}</p>

        <form className="w-full">
          <div className="mt-5">
            <input 
              type="submit" 
              className={`${!isEmptyPedido ?'bg-slate-500 hover:bg-slate-700' : 'bg-slate-300'}  text-white uppercase w-full p-3 cursor-pointer rounded-md`}
              value="Confirmar"
              disabled={isEmptyPedido}
            />
          </div>
        </form>
    </aside>
  )
}
