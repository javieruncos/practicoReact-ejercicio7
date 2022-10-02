import React from 'react';
import '../estilos/EmpleadoList.css'
import EmpleadoRow from './EmpleadoRow';


const EmpleadoList = () => {


    let arregloEmpleados=[
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "mujer9.png" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "mujer2.png" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "mujer3.png" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "hombre2.png" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "hombre3.png" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "mujer4.png" },
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "mujer5.png" },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "mujer8.png" },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "hombre4.png" },
      ]
      
  
  
    return (
        <div className="contenedorList">
         <EmpleadoRow arregloEmpleados={arregloEmpleados}/>
        
        </div>
    );
};

export default EmpleadoList;