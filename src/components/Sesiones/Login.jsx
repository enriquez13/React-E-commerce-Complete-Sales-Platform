import React, { useState } from 'react'
import firebaseApp from '../../firebase/config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth' 
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
const auth = getAuth(firebaseApp)

export const Login = () => {
  const firestore = getFirestore(firebaseApp)
  const [isRegistrando, setIsRegistrando] = useState(false)
  async function registrarUsuario(email, password){
  const infoUsuario = await createUserWithEmailAndPassword(auth, email, password).then((usuarioFirebase) =>{
    return usuarioFirebase
  })
  const docuRef = await doc(firestore, `usuarios/${infoUsuario.user.uid}`, )
  setDoc(docuRef, {correo: email, rol:"user"})
}

  function submitHandler(e){
    e.preventDefault()
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
 
    if(isRegistrando){
      registrarUsuario(email, password)
    }else{
      signInWithEmailAndPassword(auth, email, password)
    }
  }

  return (
    <>
    <h1 className='text-center text-2xl my-10 py-[4rem]'>{isRegistrando ? "Registrate" : "Inicia sesión"}</h1>
    <form className='mx-7 text-black md:w-1/2' onSubmit={submitHandler}>     
      <label >Correo electrónico
        <input type="email" className='w-full mt-1 mb-3 bg-gray-100' id='email'/>
      </label>
      <label>Contraseña
        <input type="password" className='w-full mt-1 mb-3 bg-gray-100' id='password'/>
      </label>
      <div className='flex justify-center'><input type="submit" className='w-1/2 mt-10 mb-6 py-2 text-white bg-black rounded-lg'
      value={isRegistrando ? "Registrar" : "Iniciar sesión"}/>
      </div>
    </form>
    <button className='w-full' onClick={()=> setIsRegistrando(!isRegistrando)}>
      <h1 className='text-center text-sm text-blue-600'>{isRegistrando ? 
        "Ya tengo una cuenta, quiero iniciar sesión"
        : "No tengo una cuenta, quiero registrarme"}</h1>
    </button>
    
    </>
  )
}
