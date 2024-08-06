import Produto from "../components/Produto"
import { produtos } from "../data/produto"

export default function Inicio() {

  console.log(produtos)
  return (
    <>
      <h1 className="text-xl font-bold">Home</h1>
      <p className="text-sm my-10">
        Escolhe os produtos para montar o seu pedido
      </p>

      <div className="grid gap-4 grid-cols-1 md:grig-cols-2 xl:grid-cols-3">
        {produtos.map( produto => (
          <Produto
            key={produto.id} 
            produto={produto}
          />
        ))}
      </div>
    </>
  )
}
