import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: red;
    padding: 0;
    margin: 0;
  }

  h1 {
    padding: 0;
    margin: 0;
  }
`

const Background = styled.div`
  display: flex;
  justify-content: center;
  background: #ddd;
  height: 100vh;
`;

const Main = styled.main`
  display: flex;
  background: #fff;
  width: 100%;
  max-width: 1200px;
  max-height: 100vh;
  margin: 80px 0;
`;

function App() {
  return (
    <>
     <GlobalStyle />
    <Background>
      <Main />
    </Background>
    </>
  );
}

export default App;
