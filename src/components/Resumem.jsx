import { formatarDinheiro } from "../helpers"
import useProvider from "../hooks/useProvider"
import ResumenProduto from "./ResumenProduto"
import { useAuth } from "../hooks/useAuth"

export default function Resumem() {

  const {pedido, total, handleCreatePedido} = useProvider()

  const isEmptyPedido = pedido.length === 0;

  const {user, logout} = useAuth({})

  //console.log(isEmptyPedido)

  const handleFormSubmit = (e) => {
    e.preventDefault();

    handleCreatePedido(logout);
  }
   
  return (
    <aside className='md:w-72 h-screen px-3 pb-5 overflow-y-scroll border'>
        <div className="flex w-full mb-2 bg-slate-300 py-4 justify-center">
          <p>Ol&aacute;: {user?.email}</p>
        </div>
        <h1 className='text-xl font-semibold text-slate-800 uppercase'>Seu pedido</h1>
        {pedido.length === 0 ? (
          <>
            <p> &nbsp;</p>
          </>
        ) : (
          <p className="p-2 font-semibold text-right underline ">Pedido 0001</p>
        )}
        <div className="bg-pink-200  rounded-lg">
          {pedido.length === 0 ? (
            <div className="m-auto p-4">
              <h1 className="text-2xl text-center text-red-900 p-2 font-black border-8 border-red-900">Voc&ecirc; n&atilde;o tem produtos agregado ainda!</h1>
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

        <form 
          className="w-full"
          onSubmit={handleFormSubmit}
        >
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
