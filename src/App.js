import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import Perfil from './components/Perfil';




function App() {
  return (
    <div className="App">
      <Container className=" mt-5">
        <Perfil 
        img="hombre"
        nombre="Sergio Ocampos"
        oficio="Enginnering"
        cargo="CTO"
        />
        <Perfil 
        img="mujer"
        nombre="Laya Dueñas"
        oficio="Business"
        cargo="CEO"
        />
        <Perfil 
        img="mujer"
        nombre="Shantell Meza"
        oficio="Business"
        cargo="CFO"
        />
      </Container>
    </div>
  );
}

export default App;
