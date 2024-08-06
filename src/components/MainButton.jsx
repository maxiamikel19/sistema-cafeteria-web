import React from 'react'

export default function MainButton({children}) {
  return (
    <button
        type={children}
        className="bg-amber-600 text-slate-900 uppercase"
    >
        {children}
    </button>
  )
}
