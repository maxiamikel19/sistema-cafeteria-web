import { categorias } from "../data/categoria"
import Categoria from "./Categoria"

export default function Sidebar() {


  return (
    <aside className='md:w-72 h-screen'>
        <div className="p-4">
            <img
                src='../img/logo-oficials.png' 
                alt='Logo principal' 
                className='w-40'
            />
        </div>

        <div className="text-xl px-3">
            {categorias.map( categoria => {
                return (
                    <Categoria 
                        key={categoria.id}
                        categoria={categoria} 
                    />
                )
            })}
        </div>
        <div className="px-4 m-auto">
           <input 
                type="submit" 
                value="cancelar pedido"
                className="bg-red-500 hover:bg-red-700 text-white uppercase w-full p-4 mt-5 cursor-pointer rounded-md"
            /> 
        </div>
        
    </aside>
  )
}
