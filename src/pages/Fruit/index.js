import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FruitContainer from './styles'
import NavBar from '../../components/NavBar'

function Fruit({ location }) {
  const [data] = useState(location.state.item)

  return (
    <>
      <NavBar />
      <FruitContainer>
        <div className="card">
          <img src={data.photo} alt="Imagem" />
          <div className="content">
            <h1>{data.name}</h1>
            <p>Calorias: {data.calories}</p>
            <p>Proteína: {data.protein}</p>
            <p>Carboidrato: {data.carbohydrates}</p>
            <p>Fibra: {data.fiber}</p>
            <p>Gordura: {data.blubber}</p>
            <p>Porção: {data.portion}</p>
            <div className="btn">
              <Link to="/">Voltar</Link>
            </div>
          </div>
        </div>
      </FruitContainer>
    </>
  )
}

export default Fruit
