import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import FruitContainer from './styles'
import api from '../../services/api'
import NavBar from '../../components/NavBar'

function Fruit() {
  const [info, setInfo] = useState([])
  const { id } = useParams()

  async function getAllApiData() {
    const { data } = await api.get('/mock/api/fruits-api/fruits.json')
    setInfo(data)
  }

  useEffect(() => {
    getAllApiData()
  }, [])

  const filterFruit = info.filter(
    fruit => fruit.name.toLowerCase() === id.toLowerCase()
  )

  return (
    <>
      <NavBar />
      {filterFruit[0] && (
        <FruitContainer>
          <div className="card">
            <img src={filterFruit[0]?.photo} alt="Imagem" />
            <div className="content">
              <h1>{filterFruit[0]?.name}</h1>
              <p>Calorias: {filterFruit[0]?.calories}</p>
              <p>Proteína: {filterFruit[0]?.protein}</p>
              <p>Carboidrato: {filterFruit[0]?.carbohydrates}</p>
              <p>Fibra: {filterFruit[0]?.fiber}</p>
              <p>Gordura: {filterFruit[0]?.blubber}</p>
              <p>Porção: {filterFruit[0]?.portion}</p>
              <div className="btn">
                <Link to="/">Voltar</Link>
              </div>
            </div>
          </div>
        </FruitContainer>
      )}
    </>
  )
}

export default Fruit
