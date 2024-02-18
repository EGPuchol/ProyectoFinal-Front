import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Formulario.css";
import BarraProgreso from "./BarraProgreso";

export const Formulario = ({statusAdop}) => {
  //creamos el estado inicial para guardar los valores
  const initialState = {
    NombreYapellidos: "",
    Email: "",
    Telefono: "",
    DNI: "",
    CalleNumeroPiso: "",
    CodigoPostal: "",
    Ciudad: "",
    AceptaTerminos: false
  };


  const [state, setState] = useState(initialState);

  const navegar = useNavigate();

  const handleInput = (ev) => {
    //aquí cogemos el valor del id y el valor del input que estamos recibiendo
    const { id, value } = ev.target;
    console.log(id,value);
    //cada vez que se ejecuta la función de un input a traves de los elementos que le hemos puesto los onchange, recogemos el valor que tenía al 'principio' y le sumamos el id que es como está vinculado el input que sea y su value que va a ser su valor
    setState({ ...state, [id]: value });
    //console.log(state);
  };

  const handleCheckboxChange = (ev) => {
    //esta es para el checkbox
    const {checked} = ev.target;
    setState({...state, AceptaTerminos: checked});
  };
 //esta funcion la utilizaremos para pasar la información, falta terminar
  const submit = (ev) => {
    // con esta linea nos cargamos el comportamientopor defecto del evento para poder guardar los valores posteriormente
    ev.preventDefault();
    // console.log("funciona");

    localStorage.setItem("user", JSON.stringify(state));
    navegar ("/Formulario2")

    setState(initialState) // esta funcion limpia el formulario una vez submiteado
  };


  return (
    <>
    <div className="formulario">
      <form onSubmit={submit}>
        <h5> Formulario de Adopción </h5>
        <BarraProgreso currentStep={1} totalSteps={3} />
        <h3> Tus datos </h3>
        <label htmlFor="NombreYapellidos"></label>
        <input
          type="text"
          id="NombreYapellidos"
          placeholder="Nombre y apellidos"
          value={state.NombreYapellidos}
          onChange={handleInput}
        ></input>

        <label htmlFor="Email"></label>
        <input
          type="text"
          id="Email"
          placeholder="Email"
          value={state.Email}
          onChange={handleInput}
        ></input>

        <label htmlFor="Telefono"> </label>
        <input
          type="number"
          id="Telefono"
          placeholder="Télefono"
          value={state.Telefono}
          onChange={handleInput}
        ></input>

        <label htmlFor="DNI"></label>
        <input
          type="text"
          id="DNI"
          placeholder="DNI"
          value={state.DNI}
          onChange={handleInput}
        ></input>

        <h3> Dirección </h3>

        <label htmlFor="CalleNumeroPiso"> </label>
        <input
          type="text"
          id="CalleNumeroPiso"
          placeholder="Calle, número, piso"
          value={state.CalleNumeroPiso}
          onChange={handleInput}
        ></input>

        <label htmlFor="CodigoPostal">  </label>
        <input
          type="text"
          id="CodigoPostal"
          placeholder="Código Postal"
          value={state.CodigoPostal}
          onChange={handleInput}
        ></input>

        <label htmlFor="Ciudad"> </label>
        <input
          type="text"
          id="Ciudad"
          placeholder="Ciudad"
          value={state.Ciudad}
          onChange={handleInput}
        ></input>

<label htmlFor="AceptaTerminos"> Acepto los términos y condiciones de la adopción </label>
        <input
          type="checkbox"
          id="AceptaTerminosad"
          value={state.AceptaTerminos}
          onChange={handleCheckboxChange}
        ></input>

       <button type="submit" disabled={!state.AceptaTerminos} className={state.AceptaTerminos ? 'enabled' : ''}> Continuar </button>
      </form>
      </div>
    </>
  );
};

export default Formulario;