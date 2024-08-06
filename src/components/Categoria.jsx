import React from 'react'

export default function Categoria({categoria}) {

    const {id, nome, icono } = categoria

  return (
    <div className='bg-white p-4 flex items-center gap-4 cursor-pointer hover:bg-slate-200'>

        <img 
            src={`../img/${icono}`} 
            alt={nome}
            className='w-10' 
        />
        <p className='text-lg'>{nome}</p>
    </div>
  )
}
