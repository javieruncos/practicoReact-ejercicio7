import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import EmpleadoList from './components/EmpleadoList';




function App() {
  return (
    <div className="App">
      <Container className=" mt-5">
       <EmpleadoList/>
        
      </Container>
    </div>
  );
}

export default App;
