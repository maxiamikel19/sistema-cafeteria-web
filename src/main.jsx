import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './router'
import { MainProvider } from './providers/MainProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainProvider>
     <RouterProvider router={router} />
    </MainProvider>
  </React.StrictMode>,
)
