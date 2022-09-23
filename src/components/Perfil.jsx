import React from 'react';
import '../estilos/Perfil.css'
import Card from 'react-bootstrap/Card';
import avataresHombre from "../img/avataresHombre.png"


const Perfil = () => {
    return (
        <>
        <div className='contenedorPerfil'>
        <Card className="mt-5">
       <Card.Body className="d-flex ">
       <Card.Img variant="top" src={avataresHombre} className="imgCardPerfil"/>
        <div className="mt-5">
        <Card.Title></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <span>hola</span>
        </div>
        </Card.Body>
       </Card>
        </div> 
        </>
    );
};

export default Perfil;