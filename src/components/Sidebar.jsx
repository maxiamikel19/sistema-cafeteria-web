import useProvider from "../hooks/useProvider"
import { useAuth } from "../hooks/useAuth"
import Categoria from "./Categoria"

export default function Sidebar() {

    const {categorias} = useProvider()
    const {logout} = useAuth({middleware: 'auth'})

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
           <button 
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white uppercase w-full p-4 mt-5 cursor-pointer rounded-md"
                onClick={logout}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                </svg>

            </button> 
        </div>
        
    </aside>
  )
}
