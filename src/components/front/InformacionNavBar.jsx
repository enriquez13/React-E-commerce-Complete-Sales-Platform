import React from 'react'
import { NavLink } from 'react-router-dom'
import {DataIformacion } from "./DataCategorias"

export const InformacionNavBar = () => {
    return (
        <>
            {DataIformacion.map((informacion, index) => (
                <div className=" grid items-center justify-center h-[3rem] px-4 ">
                    <NavLink key={index} to={`/${informacion.url}`}
                        className=" cursor-pointer  text-xl md:my-0 
                            text-gray-400  hover:text-gray-800 duration-500">
                        <h3 className="uppercase text-sm font-semibold">{informacion.nombre}</h3>
                    </NavLink>
                </div>
            ))}
        </>
    )
}
