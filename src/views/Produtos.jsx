import useSWR from "swr"
import clienteAxios from "../config"

export default function Produtos() {
    
    const token = localStorage.getItem('AUTH_TOKEN')
    const fetcher = () => clienteAxios('/api/pedidos', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const {data, isLoading, error} = useSWR('/api/pedidos', fetcher)

    console.log(data)
    console.log(isLoading)
    console.log(error)

  return (
    <div>Produtos</div>
  )
}
