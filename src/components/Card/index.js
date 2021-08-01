import React from 'react'
import { Link } from 'react-router-dom'
import CardContainer from './styles'

function Card({ title, image, children, to }) {
  return (
    <CardContainer>
      <Link to={to}>
        <div className="figure">
          <img src={image} alt="Imagem" />
        </div>
        <div className="content">
          <h2>{title}</h2>
          {children}
        </div>
      </Link>
    </CardContainer>
  )
}

export default Card
