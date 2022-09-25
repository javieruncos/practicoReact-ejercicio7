import React from 'react';
import '../estilos/Avatar.css'
import Avatar from './Avatar';
import Cards from './Cards';



const EmpleadoRow = ({arregloEmpleados}) => {
    return (
        <div className='contenedorAvatar'>
          {
            arregloEmpleados.map((item)=>{return <Avatar img={item.pic}/>})
          }


        </div>
    );
};

export default EmpleadoRow;