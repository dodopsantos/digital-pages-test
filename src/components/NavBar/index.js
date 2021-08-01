import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBarContainer from './styles'

function NavBar({ filter, onFilterChange, search }) {
  const [nav, setNav] = useState(false)

  function toggleNav() {
    setNav(!nav)
  }

  return (
    <NavBarContainer>
      <div className="container">
        <div className="content">
          <h1>Frutas</h1>
        </div>
        {search && (
          <input
            className="search"
            type="text"
            value={filter}
            placeholder="Pesquise uma fruta"
            onChange={e => onFilterChange(e.target.value)}
          />
        )}
        <div className="content">
          <a className="toggle-button" onClick={() => toggleNav()}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </a>
        </div>
      </div>
      {nav && (
        <div className="dropdown">
          <div className="dropContent">
            <Link onClick={() => toggleNav()} to="/">
              <h2>Página inicial</h2>
            </Link>
          </div>
        </div>
      )}
    </NavBarContainer>
  )
}

export default NavBar
