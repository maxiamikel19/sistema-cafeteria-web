import { createContext, useEffect, useState } from "react"
import clienteAxios from "../config";
import { toast } from "react-toastify";

const MainContext = createContext();

const MainProvider = ({children}) => {

    const [categorias, setCategorias] = useState([])
    const [categoriaSelecionada, setCategoriaSelecionada] = useState({})
    const [modal, setModal] = useState(false)
    const [produto, setProduto] = useState({})
    const [pedido, setPedido] = useState([])
    const [total, setTotal] = useState(0)
    

    const getCategorias = async () => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            //console.log(import.meta.env.VITE_API_URL)
            const {data} = await clienteAxios('/api/categorias', {
                headers: {
                    Authorization : `Bearer ${token}`
                }
            })
            setCategorias(data.data)
            setCategoriaSelecionada(data.data[0])
            //console.log(data.data)
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
        getCategorias()
    }, [])


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

    const handleAdicionarprodutoPedido = ({categoria_id, descricao, disponivel, ...produto}) => {
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

    const handleEditarProdutoPedido = (id) => {
        //console.log(id)
        const produtoAtualizado = pedido.filter(produto => produto.id === id)[0]
        setProduto(produtoAtualizado)
        setModal(!modal)
        //console.log(produtoAtualizado)
    }


    const handleEliminarProdutoPedido = (id) => {
        //console.log(id)
        const produtoEliminado = pedido.filter(produto => produto.id !== id)
        setPedido(produtoEliminado)
        toast.success('Produto eliminado com sucesso!')
        //console.log(produtoAtualizado)
    }

    const handleCreatePedido = async (logout) =>{
        const token = localStorage.getItem('AUTH_TOKEN')
       
        try {
            await clienteAxios.post('/api/post', 
            {
              total, 
              produtos: pedido.map(produto => {/* Percorrer os pedidos e guardar o id e a cantidade no arrar produtos */
                return {
                  id:produto.id,
                  cantidade: produto.cantidade   
                }
              }), 
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success('Pedido enviado com sucesso')
           // console.log(produtos)
           setTimeout( () =>{
             setPedido([])
           }, 5000)

           //Encerrar a sessão do usuario
           setTimeout( () => {
             localStorage.removeItem('AUTH_TOKEN');
             logout();
           }, 5000)
        } catch (error) {
            console.log(error)
        }
    }

    const handleCompletarPedido = async (id) => {

        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            await clienteAxios.put(`/api/pedidos/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
           
        } catch (error) {
            console.log(error)
        }
    }

    const handleClickDesativarProduto = async (id) => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            await clienteAxios.put(`/api/produtos/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
           
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        const calcTotal = pedido.reduce( (total, produto) => (produto.preco * produto.cantidade) + total, 0)
        setTotal(calcTotal)
    }, [pedido])

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
                handleAdicionarprodutoPedido,
                handleEditarProdutoPedido,
                handleEliminarProdutoPedido,
                total,
                handleCreatePedido,
                handleCompletarPedido,
                handleClickDesativarProduto
            }}
        >{children}</MainContext.Provider>
    )

}

export {MainProvider}
export default MainContext