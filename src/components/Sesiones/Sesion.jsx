import React, { useState } from 'react'
import { Login } from './Login'
import { HomeLogin } from './HomeLogin'
import firebaseApp from '../../firebase/config';
import {getAuth, onAuthStateChanged} from "firebase/auth"  
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import NavBar from '../front/NavBar';

const firestore = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export const Sesion = () => {
  const [user, setUser] = useState(null)

  async function getRol(uid) {
    const docuRef = doc(firestore, `usuarios/${uid}`)
    const docuCifrada = await getDoc(docuRef)
    const infoFinal = docuCifrada.data().rol
    return infoFinal
  }  

function setUserWithFirebaseAndRol (usuarioFirebase){
  getRol(usuarioFirebase.uid).then((rol)=> {  
    const userData =  {
    uid : usuarioFirebase.uid,
    email : usuarioFirebase.email,
    rol : rol,
  }
  setUser(userData)
  
})
 
}

  onAuthStateChanged(auth, (usuarioFirebase) =>{
    if (usuarioFirebase){
    if(!user){
      setUserWithFirebaseAndRol(usuarioFirebase)
    }    
    } else{
      setUser(null)
    }
  })
  return (
   <> 
   
   <NavBar user={user}/>
   {user ? <HomeLogin user={user}/> : <Login/>} 
   </>
  )
}
