import { Outlet } from "react-router-dom"
import AdminSidebar from "../components/AdminSidebar"
import { useAuth } from "../hooks/useAuth"

export default function AdminLayout() {

  useAuth({middleware: 'auth'})
  return (
    <div className="md:flex">
        
        <AdminSidebar />
    
        <div className="flex-1 h-screen overflow-y-scroll p-3 bg-slate-100">
           <Outlet />
        </div>
    </div>
  )
}
