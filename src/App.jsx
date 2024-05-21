import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainMenu from './pages/MainMenu';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
    
      <Routes>
        <Route path='/' element={ <MainMenu /> } /> 
      </Routes>
      

      <footer id="footer">
        <Footer />
      </footer>

    </BrowserRouter>
  );
}
export default App;
