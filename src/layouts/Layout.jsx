import { Outlet } from "react-router-dom"
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import useProvider from "../hooks/useProvider";
import Sidebar from "../components/Sidebar"
import Resumem from "../components/Resumem"
import ModalProduto from "../components/ModalProduto";
import "react-toastify/dist/ReactToastify.css"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Layout() {
  
  const {modal} = useProvider();

  //console.log(modal)
  Modal.setAppElement("#root")
  return (
    <>
      <div className="md:flex">
          
          <Sidebar />

          
          <main className="flex-1 p-4 h-screen overflow-y-scroll bg-slate-200">
            <Outlet />
          </main>

          <Resumem />
      </div>
      <Modal isOpen={modal} style={customStyles}>       
         <ModalProduto />
      </Modal>
      <ToastContainer />
    </>

  )
}
