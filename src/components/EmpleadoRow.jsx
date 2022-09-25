import React from 'react';
import Avatar from './Avatar';




const EmpleadoRow = ({arregloEmpleados}) => {
    return (
        <div className='contenedorAvatar'>
          
          {
            arregloEmpleados.map((item)=> <Avatar img={item.pic} nombre={item.fullName} key={item.id} title={item.title} department={item.department}/>)
          }
        </div>
    );
};

export default EmpleadoRow;