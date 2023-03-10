
import { useNavigate } from 'react-router-dom'
import { useState, React } from 'react'

export function SearchForm() {

    const navigate = useNavigate()
    const [query, setQuery] = useState()

    function handleSubmit(event){
        event.preventDefault()

        navigate('/search?q=' + query.trim()) 

        if(query === undefined || query === ''){
            navigate('/')
        }

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Buscar em produtos..' onChange={(event) => setQuery(event.target.value)}></input>
            <input type="submit" value="Buscar"></input>
        </form>
    </div>
  )
}
