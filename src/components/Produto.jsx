import React from 'react'

export default function Produto({produto}) {

    const {nome,imagen, descricao, preco, disponivel} = produto
  return (
    <div className='border p-3 shadow-md bg-white rounded'>
        <img 
            src={`../img/${imagen}.jpg`} 
            alt={nome} 
            className='w-full'
        />

        <div className="p-5">
            <h3 className='text-md font-semibold'>{nome}</h3>
            <p className="mt-5 test-sm">{descricao}</p>
            <p className='mt-5 font-black text-3xl text-amber-600'>{preco}</p>
        </div>
    </div>
  )
}
