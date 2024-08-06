import { Link } from "react-router-dom"

export default function Registro() {
  return (
    <>
        <h1 className="text-3xl font-black">Cria sua conta</h1>
        <p className="text-sm">Informe os dados solicitados para criar a sua conta</p>

        <div className="bg-white shadow-lg rounded-md mt-10 py-5 px-5">
            <form 
                action=""
                autoComplete="OFF"
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
                    />
                </div>

                <input 
                    type="submit" 
                    value="Criar sua conta"
                    className="bg-indigo-500 hover:bg-indigo-700 text-white uppercase w-full p-4 mt-5 cursor-pointer rounded-md"
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
