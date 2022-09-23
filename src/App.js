import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import Perfil from './components/Perfil';


function App() {
  return (
    <div className="App">
      <Container className="bg-black mt-5">
        <Perfil />
        <Perfil />
      </Container>
    </div>
  );
}

export default App;
