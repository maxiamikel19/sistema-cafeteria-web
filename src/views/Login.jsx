import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import { useAuth } from "../hooks/useAuth"
import Alerta from "../components/Alerta"

export default function Login() {

    const refEmail = useRef()
    const refPassword = useRef()
    const [errores, setErrores] = useState([])

    const {login} = useAuth({
        middleware: 'guest', 
        url: '/'
    })


    const handleFormLogin = async (e) =>{
        e.preventDefault()

        const dados = {
            email: refEmail.current.value,
            password: refPassword.current.value
        }

        login(dados, setErrores)
    }

  return (
    <>
    <h1 className="text-3xl font-black">Login</h1>
    <p className="text-sm">Entre sua conta para asessar os produtos</p>

    <div className="bg-white shadow-lg rounded-md mt-10 py-5 px-5">
        <form 
            action=""
            autoComplete="OFF"
            noValidate
            onSubmit={handleFormLogin}
        >
            {errores ? errores.map(error => <Alerta key={error}>{error}</Alerta>) : null}
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

            
            <input 
                type="submit" 
                value="Entrar"
                className="bg-slate-500 hover:bg-slate-700 text-white uppercase w-full p-4 mt-5 cursor-pointer rounded-md"
            />
        </form>
    </div>

    <nav 
      className="text-slate-500 my-5 text-xs"
    >
        <Link 
          to="/auth/registro"
          className=" hover:text-slate-800"
        >N&atilde;o tem conta? Crie uma</Link>
    </nav>
</>
  )
}
