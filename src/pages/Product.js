import React from 'react'

import { Link, useParams } from 'react-router-dom'
import { useFetch  } from '../hooks/useFetch'

export  function Product() {

  //! 4 - rota dinamica
  const {id} = useParams()

  //! 5 - carregamento dado individual 
  const url = "http://localhost:3000/products/" + id

  const {data: product, loading, error } = useFetch(url)

  return (
    <div>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}

      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>R$: {product.price}</p>
          {/* 6 - Nested routes */}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}

    </div>
  )
}
