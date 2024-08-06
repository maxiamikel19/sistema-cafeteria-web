import { Link } from "react-router-dom"

export default function Login() {
  return (
    <>
    <h1 className="text-3xl font-black">Login</h1>
    <p className="text-sm">Entre sua conta para asessar os produtos</p>

    <div className="bg-white shadow-lg rounded-md mt-10 py-5 px-5">
        <form 
            action=""
            autoComplete="OFF"
        >

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
                />
            </div>

            
            <input 
                type="submit" 
                value="Entrar"
                className="bg-indigo-500 hover:bg-indigo-700 text-white uppercase w-full p-4 mt-5 cursor-pointer rounded-md"
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
