import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import Alerta from "../components/Alerta"
import { useAuth } from "../hooks/useAuth"

export default function Registro() {

    const refName = useRef()
    const refEmail = useRef()
    const refPassword = useRef()
    const refPasswordConfitmation = useRef()
    const [errores, setErrores] = useState([])
    const {registro} = useAuth({middleware: 'guest', url:'/'})

    
    const handleFormSubmit = async (e) =>{
        e.preventDefault()

        const dados = {
            name: refName.current.value,
            email: refEmail.current.value,
            password: refPassword.current.value,
            password_confirmation: refPasswordConfitmation.current.value
        }
        //console.log(dados)
        registro(dados, setErrores)
    }
  return (
    <>
        <h1 className="text-3xl font-black">Cria sua conta</h1>
        <p className="text-sm">Informe os dados solicitados para criar a sua conta</p>

        <div className="bg-white shadow-lg rounded-md mt-10 py-5 px-5">

            {errores ? errores.map(error => <Alerta key={error}> {error}</Alerta>) : null}
            <form 
                autoComplete="OFF"
                onSubmit={handleFormSubmit}
                noValidate
            >

                <div className="mb-4">
                    <label 
                        htmlFor="name" 
                        className="text-slate-800"
                    >Nome</label>
                    <input 
                        type="text" 
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="name"
                        id="name"
                        placeholder="Seu nome"
                        ref={refName}
                    />
                </div>

                <div className="mb-4">
                    <label 
                        htmlFor="email" 
                        className="text-slate-800"
                    >Email</label>
                    <input 
                        type="email" 
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="email"
                        id="email"
                        placeholder="Seu email"
                        ref={refEmail}
                    />
                </div>

                <div className="mb-4">
                    <label 
                        htmlFor="password" 
                        className="text-slate-800"
                    >Senha</label>
                    <input 
                        type="password" 
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="password"
                        id="password"
                        placeholder="Sua senha"
                        ref={refPassword}
                    />
                </div>

                <div className="mb-4">
                    <label 
                        htmlFor="password_confirmation" 
                        className="text-slate-800"
                    >Repetir a senha</label>
                    <input 
                        type="password" 
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="password_confirmation"
                        id="password_confirmation"
                        placeholder="Repetir a senha"
                        ref={refPasswordConfitmation}
                    />
                </div>

                <input 
                    type="submit" 
                    value="Criar sua conta"
                    className="bg-slate-500 hover:bg-slate-700 text-white uppercase w-full p-4 mt-5 cursor-pointer rounded-md"
                />
            </form>
        </div>

        <nav 
      className="text-slate-500 my-5 text-xs"
    >
        <Link 
          to="/auth/login"
          className=" hover:text-slate-800"
        >Tem conta? Acessar</Link>
    </nav>
    </>
  )
}
