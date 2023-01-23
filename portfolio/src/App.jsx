import './App.css';
import styled, { createGlobalStyle } from "styled-components"
import Index from './pages/Index';
import Footer from './components/footer/Footer';
import NavbarContainer from './components/navbar/NavbarContainer';


const GlobalStyles = createGlobalStyle`
  .container_lg{
    max-width: 1000px;
    width: 100%;
    margin: auto;
  }


`

function App() {
  return (
    <Container>
      <GlobalStyles/>
      <NavbarContainer/>
      <main>
        <Index/>
      </main>
      <Footer/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: ${props => props.theme.lightGray};
  main{
    min-height: 100vh;
  }
`
