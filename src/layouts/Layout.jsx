import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Resumem from "../components/Resumem"

export default function Layout() {
  return (
    <div className="md:flex">
        
        <Sidebar />

        
        <main className="flex-1 p-4 h-screen overflow-y-scroll bg-slate-200">
          <Outlet />
        </main>

        <Resumem />
    </div>

  )
}
