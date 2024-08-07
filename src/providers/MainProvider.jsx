import { createContext, useState } from "react"
import { toast } from "react-toastify";
import { categorias as categoriaDB } from "../data/categoria"
import { produtos as produtoDB} from "../data/produto"

const MainContext = createContext();

const MainProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriaDB)
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(categorias[0])
    const [modal, setModal] = useState(false)
    const [produto, setProduto] = useState({})
    const [pedido, setPedido] = useState([])
    

    const handleClickCategoria = (id) => {
        const categoria = categorias.filter( categoria => (categoria.id === id))[0]
        setCategoriaSelecionada(categoria)
       // console.log(categoria)
    }

    const handleClickModalProduto = () => {
        setModal(!modal)
    }

    const handleSetProduto = (produto) =>{
        setProduto(produto)
    }

    const handleAdicionarprodutoPedido = ({categoria_id, descricao, imagen, disponivel, ...produto}) => {
        //console.log(produto)
        //Pega uma copia do pedido que tem a adiciona o atual produto
        if(pedido.some(prod => prod.id === produto.id)){
            const atualizado = pedido.map(prod => prod.id === produto.id ? produto : prod)
            setPedido(atualizado)
            toast.success('Produto editado no seu pedido')
        }else{
           setPedido([...pedido, produto]) 
           toast.success('Produto adicionado com sucesso ao pedido')
        }
        
    }

    return (
        <MainContext.Provider
            value={{
                categorias,
                categoriaSelecionada,
                handleClickCategoria,
                modal,
                handleClickModalProduto,
                produto,
                handleSetProduto,
                pedido,
                handleAdicionarprodutoPedido
            }}
        >{children}</MainContext.Provider>
    )

}

export {MainProvider}
export default MainContext