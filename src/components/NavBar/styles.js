import styled from 'styled-components'

const NavBarContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 99;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1vh 2vw;
    background-color: ${props => props.theme.colors.primary};
  }

  .dropdown {
    display: flex;
    justify-content: flex-end;

    .dropContent {
      background-color: ${props => props.theme.colors.primary};
      padding: 1vh 2vw;
      border-radius: 0 0 5px 5px;
    }
    a {
      text-decoration: none;
      color: ${props => props.theme.colors.title};
    }

    a:hover {
      color: ${props => props.theme.colors.text};
    }
  }

  h1 {
    color: ${props => props.theme.colors.title};
  }

  input {
    width: 50%;
    padding: 10px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  .toggle-button {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 35px;
    height: 30px;

    .bar {
      display: block;
      height: 5px;
      width: 100%;
      background-color: white;
      border-radius: 10px;
    }
  }
`

export default NavBarContainer
