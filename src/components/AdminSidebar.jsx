import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import useProvider from "../hooks/useProvider"

export default function AdminSidebar() {
    const {logout} = useAuth({middleware: 'auth'})
    const {pedido} = useProvider()
  return (
    <aside className='md:w-72 h-screen bg-purple-400'>
        <div className="p-4">
            <img 
              src="/img/logo-oficials.png" 
              alt="Logo principal" 
              className='w-40'
            />
        </div>

        <nav className="p-4 flex flex-col">
            <Link to="/admin" className="font-semibold text-xl p-2 bg-purple-600 justify-between flex mb-2 rounded-md hover:bg-purple-700">
              Pedidos <span className="text-lg bg-purple-800 text-white p-2 rounded-full">{pedido.length}</span>
            </Link>
            <Link to="admin/produtos" className="font-semibold text-xl p-2 bg-purple-600 justify-between flex mb-2 rounded-md hover:bg-purple-700">
              Produtos <span className="text-lg bg-purple-800 text-white p-2 rounded-full">38</span>
            </Link>
        </nav>

        <div className="px-4 m-auto mb-5 text-center">
           <button 
                type="submit"
                className="bg-purple-700 hover:bg-purple-600 text-white uppercase w-auto p-4 mt-5 cursor-pointer rounded-md"
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
