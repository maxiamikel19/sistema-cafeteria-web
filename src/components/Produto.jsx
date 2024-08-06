import { formatarDinheiro } from "../helpers"

export default function Produto({produto}) {

    const {id,nome,imagen, descricao, preco, disponivel} = produto
  return (
    <div className='border p-3 shadow-md bg-white rounded'>
        <img 
            src={`../img/${imagen}.jpg`} 
            alt={nome} 
            className='w-full'
        />

        <div className="p-5">
            <h3 className='text-md font-semibold'>{nome}</h3>
            <p className="mt-5 test-sm">{descricao}</p>
            <p className='mt-5 font-black text-3xl text-amber-600'>{formatarDinheiro(preco)}</p>
        </div>

        <input 
            type="submit" 
            value="Selecionar"
            className="bg-slate-500 hover:bg-slate-700 text-white uppercase w-full p-4 mt-5 cursor-pointer rounded-md"
        />
    </div>
  )
}
