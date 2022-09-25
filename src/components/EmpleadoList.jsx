import React from 'react';
import { useState } from "react";
import '../estilos/EmpleadoList.css'
import EmpleadoRow from './EmpleadoRow';


const EmpleadoList = () => {

    const [arregloEmpleados, setarregloEmpleados] = useState([
    
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "hombre.png" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "mujer.png" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "hombre.png" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "mujer.png" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "hombre.png" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "mujer.png" },
    
    ])




    //  let arregloEmpleados = [

    //      { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "hombre.png" },
    //      { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "mujer.png" },
    //      { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "hombre.png" },
    //      { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "mujer.png" },
    //      { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "hombre.png" },
    //      { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "mujer.png" },
    // ]




    return (
        <div className="contenedorList">
         <EmpleadoRow arregloEmpleados={arregloEmpleados}/>
        
        </div>
    );
};

export default EmpleadoList;