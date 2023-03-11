import React from 'react'
import firebaseApp from '../../firebase/config'
import { getAuth, signOut } from 'firebase/auth'
import {Admin} from './Admin/Admin'
import { NavLink } from 'react-router-dom'
//import { Home } from '../front/Home'



const  auth = getAuth(firebaseApp)

export const HomeLogin = ({user}) => {
  return (
    <>
    {user.rol === "user" ? <NavLink to='/'> Ir a la tienda</NavLink> : ""}
    {user.rol === "admin" ? <Admin /> : <HomeLogin/>}
    </>
  )
}
