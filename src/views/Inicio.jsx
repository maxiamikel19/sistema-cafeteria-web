import useProvider from "../hooks/useProvider"
import useSWR from "swr"
import clienteAxios from "../config"
import Produto from "../components/Produto"

export default function Inicio() {

  const token = localStorage.getItem('AUTH_TOKEN')
  const {categoriaSelecionada} = useProvider()
  
  const fetcher = () => clienteAxios('/api/produtos', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(data => data.data)
  const { data, error, isLoading } = useSWR('/api/produtos', fetcher,{
    refreshInterval:1000
  } )

  if(isLoading) return 'Carregando...';

  const produtos = data.data.filter(produto => produto.categoria_id === categoriaSelecionada.id)
  //console.log(produtos)
  return (
    <>
      <h1 className="text-xl font-bold">{categoriaSelecionada.nome}</h1>
      <p className="text-sm my-10">
        Escolhe os produtos para montar o seu pedido
      </p>

      <div className="grid gap-4 grid-cols-1 md:grig-cols-2 xl:grid-cols-3">
        {produtos.map( produto => (
          <Produto
            key={produto.id} 
            produto={produto}
            btnAdicionar={true}
          />
        ))}
      </div>
    </>
  )
}
