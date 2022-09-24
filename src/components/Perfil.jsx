import React from 'react';
import '../estilos/Perfil.css'
import Card from 'react-bootstrap/Card';
// import avataresHombre from "../img/avataresHombre.png"


const Perfil = (props) => {
    return (
        <>
        <div className='contenedorPerfil'>
        <Card className="mt-5">
       <Card.Body className="d-flex ">
       <Card.Img variant="top" src={require(`../img/avatar-${props.img}.png`)} className="imgCardPerfil" alt="hombre"/>
        <div className="mt-5 mx-5">
         <h2>{props.nombre}</h2>
        <p>{props.cargo}<span className="badge bg-primary mx-2">{props.oficio}</span></p>
        </div>
        </Card.Body>
       </Card>
        </div> 
        </>
    );
};

export default Perfil;