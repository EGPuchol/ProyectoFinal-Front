import React from 'react'
import "./SeccionRegistro.css"
import { Link} from 'react-router-dom'
import { useForm } from "react-hook-form"

export const SeccionRegistro = () => {

  const {
    register,
    handleSubmit
} = useForm()

const doSubmit = (data) =>{
    console.log(data)
}

  return (
    <div className='todoRegistro'>
      <div className='registrarse'>

      <img className='huella' src="images/images_bienvenida/huella_logo.png" alt="fotodePetMatch" />

      <h2 className='textoRegistro'>Bienvenido a PetMatch. Para continuar, inicia sesion o crea una cuenta</h2>

      <form onSubmit={handleSubmit(doSubmit)}>
            
            <label className='logearse'>
            <input type="text" placeholder='Pepito' {...register("nombre", {required:true})}/>

            <input type="text" placeholder='Perez Vivas' {...register("apellidos", {required:true})}/>

            <input type="text" placeholder='alguien@gmail.com' {...register("correo", {required:true})}/>

            <input type="string" placeholder='abcd1234'{...register("contraseña", {required:true, minLength: {value: 8, message: "la contraseña tiene que ser de minimo 8 caracteres e incluir numeros y letras"}})} />
            </label>

            <input type="text" {...register("imagen", {required:true})}/>

            <button>Enviar</button>

        </form>

        <div className='botonesRegistro'>
        <Link to={"/"} className='iniciar'><button>Iniciar sesion</button></Link>
        </div>
      </div>
    </div>
  )
}
