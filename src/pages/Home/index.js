import React, { useState, useEffect } from 'react'
import HomeContainer from './styles'
import Card from '../../components/Card'
import api from '../../services/api'
import NavBar from '../../components/NavBar'

function Home() {
  const [info, setInfo] = useState([])
  const [filter, setFilter] = useState('')

  async function getAllApiData() {
    const { data } = await api.get('/mock/api/fruits-api/fruits.json')
    setInfo(data)
  }

  useEffect(() => {
    getAllApiData()
  }, [])

  function onFilterChange(value) {
    setFilter(value)
  }

  const lowerFilter = filter.toLowerCase()
  const filterFruit = info.filter(fruit =>
    fruit.name.toLowerCase().includes(lowerFilter)
  )

  return (
    <>
      <NavBar search filter={filter} onFilterChange={onFilterChange} />
      <HomeContainer>
        <h1>Lista de frutas</h1>
        <div className="content">
          {filterFruit?.map(item => (
            <Card
              key={item.name}
              title={item.name}
              image={item.photo}
              to={{
                pathname: `/fruta/${item.name}`
              }}
            >
              <p>Calorias: {item.calories}</p>
              <p>Proteína: {item.protein}</p>
              <p>Carboidrato: {item.carbohydrates}</p>
              <p>Fibra: {item.fiber}</p>
              <p>Gordura: {item.blubber}</p>
              <p>Porção: {item.portion}</p>
            </Card>
          ))}
        </div>
      </HomeContainer>
    </>
  )
}

export default Home
