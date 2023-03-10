import React from 'react'

import { useSearchParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

export  function Search() {

  const [searchParams] = useSearchParams()

  const url = "http://localhost:3000/products?" + searchParams

  const {data: items, loading, error} = useFetch(url)

  return (
    <div>
        <h1>Search</h1>

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
