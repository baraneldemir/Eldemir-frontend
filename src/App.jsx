import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import MainMenu from './pages/MainMenu';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
    <Container>
      <Routes>
        <Route path='/' element={ <MainMenu /> } /> 
      </Routes>
    </Container>

    </BrowserRouter>
  );
}
export default App;
