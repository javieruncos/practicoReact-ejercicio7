import React from 'react';
import '../estilos/Perfil.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Perfil = () => {
    return (
        <>
        <div className='contenedorPerfil'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://lh3.googleusercontent.com/-Ek8OBk_hdfc/Wpak83xz7fI/AAAAAAAAOts/uydkIuQNjG8XnNhzP3_BI8440ivghagdwCHMYCw/avatares-perfil-generico%255B3%255D?imgmax=800" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
       </Card>
        </div> 
        </>
    );
};

export default Perfil;