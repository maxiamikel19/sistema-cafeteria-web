import useProvider from "../hooks/useProvider"

export default function ModalProduto() {

    const {produto} = useProvider()

  return (
    <div>
        {produto.nome}
    </div>
  )
}
