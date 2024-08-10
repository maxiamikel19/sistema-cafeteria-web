import useSWR from "swr"
import clienteAxios from "../config"
import Produto from "../components/Produto"

export default function Produtos() {
    
    const token = localStorage.getItem('AUTH_TOKEN')
   
    // const obterProdutos = async () => {

    //   try {
    //     const {data} = await clienteAxios('/api/produtos')
    //     console.log(data.data)
    //   } catch (error) {
    //     console.log(error)
    //   } 
     
    // }

    // useEffect( () => {
    //   obterProdutos()
    // }, [])

    const fetcher = () => clienteAxios('/api/produtos', {
        headers: {
          Authorization: `Bearer ${token}`
        }
    }).then(dados => dados.data)
    .catch(err => {
      console.log(err)
    })

    const {data, isLoading, error} = useSWR('/api/produtos', fetcher, { refreshInterval: 1000})

    if(isLoading) return 'Carregando...'
    //console.log(data.data)
   
  return (
    <div>
      <h1 className="text-3xl font-black uppercase">Produtos </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {data.data.map( produto => (
          <Produto
            key={produto.id} 
            produto={produto}
            btnDisponivel={true}
          />
        ))}
      </div>
    </div>
  )
}
