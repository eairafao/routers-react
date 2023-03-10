import {React} from 'react'
import {useFetch} from '../hooks/useFetch'
import { Link } from 'react-router-dom'

import './Home.css'

export function Home() {
  //! 3 - Carregamento de dados
  const url = "http://localhost:3000/products"

  const {data:items, loading, error} = useFetch(url)

  return (
    <div>
      <p>Home</p>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <ul className='products'>
        {items && items.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$: {item.price}</p>
            {/* 4 - Rota dinâmica */}
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
        {!items && <p>Carregando dados..</p>}
      </ul>
    </div>
  )
}
