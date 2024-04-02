import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'


// componentes - formas de separar a aplicção em vários blocos - padrão de repetição visual 
//funções que retornam HTML

// propriedades - props

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
