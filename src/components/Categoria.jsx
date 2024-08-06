import useProvider from "../hooks/useProvider"

export default function Categoria({categoria}) {

    const { handleClickCategoria, categoriaSelecionada } = useProvider()
    const {id, nome, icono } = categoria

    const handleClickCkangeBackground = () =>{
      categoriaSelecionada.id === id ? "bg-red" : "bg-blue"
    }
    

  return (
    <div className={`${categoriaSelecionada.id === id ? "bg-slate-400" : "bg-white" } p-4 flex items-center gap-4 cursor-pointer hover:bg-slate-200`}>

        <img 
            src={`../img/${icono}`} 
            alt={nome}
            className='w-10' 
        />
        <button 
          className='text-lg text-left w-full'
          type='button'
          onClick={ () => handleClickCategoria(id)}
        >{nome}</button>
    </div>
  )
}
