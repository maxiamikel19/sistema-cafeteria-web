export const formatarDinheiro = (dinheiro) => {
  return  dinheiro.toLocaleString('pt-BR',{
        style: 'currency', 
        currency: 'BRL'})
}
