import styled from 'styled-components'

const FruiContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  .card {
    display: flex;
    justify-content: center;
    background-color: aliceblue;
    height: 100%;
    margin: 15vh 3vw;
    flex-wrap: wrap;
    border-radius: 50px;

    img {
      border-radius: 50px;
      width: 300px;
    }
  }

  .content {
    width: 300px;
    padding: 20px;
    border-radius: 50px;
    background-color: aliceblue;
    text-align: center;

    h1 {
      padding-bottom: 10%;
    }

    p {
      font-size: 20px;
    }
    .btn {
      margin-top: 10%;
      padding: 10px;
      border-radius: 50px;
      background-color: ${props => props.theme.colors.primary};

      a {
        padding: 10px;
        text-decoration: none;
        font-size: 20px;
        color: ${props => props.theme.colors.title};
      }
    }
  }
`

export default FruiContainer
