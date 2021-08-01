import styled from 'styled-components'

const CardContainer = styled.div`
  background-color: red;
  width: 300px;
  border-radius: 5px;
  margin: 10px;
  background-color: aliceblue;
  box-shadow: 0 0 8px 0 rgba(0, 222, 222, 0.2);
  cursor: pointer;

  a {
    text-decoration: none;
  }

  p,
  h2 {
    color: ${props => props.theme.colors.text};
  }

  :hover {
    transform: scale(0.99, 0.99);
  }
  .figure {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;

    img {
      width: 100%;
      border-radius: 5px;
      border-radius: 0% 0% 44% 56% / 50% 150% 25% 25%;
    }
  }

  .content {
    display: block;
    padding: 10px 30px;

    h2 {
      text-align: center;
      margin-bottom: 10px;
    }
  }
`

export default CardContainer
