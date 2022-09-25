import React from 'react';
import '../estilos/Perfil.css'



const Avatar = (props) => {
    return (
        <>
        <div className='Avatar row'>
            <div className='col-12 col-md-6'>
            <img src={require(`../img/avatar-${props.img}`)} alt="avatar" className='w-100 imgAvatar' />
            </div>
            <div className='col-12 col-md-6  d-flex flex-column justify-content-center my-4'>
              <h2>{props.nombre}</h2>
              <p>{props.title}</p>
              <p>{props.department}</p>
            </div>
        </div> 
        </>
    );
};

export default Avatar;