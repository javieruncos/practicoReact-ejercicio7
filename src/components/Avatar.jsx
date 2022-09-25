import React from 'react';
import '../estilos/Perfil.css'



const Avatar = (props) => {
    return (
        <>
        <div className='Avatar'>
            <div>
            <img src={require(`../img/avatar-${props.img}`)} alt="avatar" />
            </div>
            <div>
              <h2>{props.nombre}</h2>
            </div>
        </div> 
        </>
    );
};

export default Avatar;