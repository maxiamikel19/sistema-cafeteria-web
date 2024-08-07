import useProvider from "../hooks/useProvider"
import Categoria from "./Categoria"

export default function Sidebar() {

    const {categorias} = useProvider()

  return (
    <aside className='md:w-72 h-screen flex flex-col justify-between'>
        <div className="p-4">
            <img
                src='../img/logo-oficials.png' 
                alt='Logo principal' 
                className='w-40'
            />
        </div>

        <div className="text-xl px-3 overflow-y-auto h-screen">
            {categorias.map( categoria => {
                return (
                    <Categoria 
                        key={categoria.id}
                        categoria={categoria} 
                    />
                )
            })}
        </div>
        <div className="px-4 m-auto mb-5">
           <input 
                type="submit" 
                value="cancelar pedido"
                className="bg-red-500 hover:bg-red-700 text-white uppercase w-full p-4 mt-5 cursor-pointer rounded-md"
            /> 
        </div>
        
    </aside>
  )
}
