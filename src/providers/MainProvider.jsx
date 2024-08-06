import { createContext, useState } from "react"
import { categorias as categoriaDB } from "../data/categoria"
import { produtos as produtoDB} from "../data/produto"

const MainContext = createContext();

const MainProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriaDB)
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(categorias[0])
    const [produtos, setProdutos] = useState(produtoDB)

    const handleClickCategoria = (id) => {
        const categoria = categorias.filter( categoria => (categoria.id === id))[0]
        setCategoriaSelecionada(categoria)
       // console.log(categoria)
    }


    return (
        <MainContext.Provider
            value={{
                categorias,
                categoriaSelecionada,
                handleClickCategoria,
                produtos
            }}
        >{children}</MainContext.Provider>
    )

}

export {MainProvider}
export default MainContext