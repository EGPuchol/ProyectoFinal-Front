import "./Formulario.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Formulario3 = () => {
  //creamos el estado inicial para guardar los valores
  const initialState = {
    DondeVives: "",
    VivesAlquiler: "",
    PermiteAnimales: "",
    Mudarte: "",
    TieneJardin: "",
    VivesOtrasPersonas: "",
    AcuerdoAdopcion: "",
    VisitaCasa: "",
  };

  const [state, setState] = useState(initialState);

  const navegar = useNavigate();

  const handleInput = (ev) => {
    //aquí cogemos el valor del id y el valor del input que estamos recibiendo
    const { id, value } = ev.target;

    //cada vez que se ejecuta la función de un input a traves de los elementos que le hemos puesto los onchange, recogemos el valor que tenía al 'principio' y le sumamos el id que es como está vinculado el input que sea y su value que va a ser su valor
    setState({ ...state, [id]: value });
    //console.log(state);
  };

  const submit = (ev) => {
    // con esta linea nos cargamos el comportamientopor defecto del evento para poder guardar los valores posteriormente
    ev.preventDefault();
    // console.log("funciona");

    localStorage.setItem("user", state);
    navegar("/Formulario3");

    setState(initialState); // esta funcion limpia el formulario una vez submiteado
  };

  return (
    <>
      <form onSubmit={submit}>
        <h5> Formulario de Adopción </h5>
        <h3> Familia y hogar </h3>

        <label htmlFor="DondeVives"> ¿Dónde vives? </label>
        <input
          type="text"
          id="DondeVives"
          placeholder="piso, casa, chalet"
          value={state.DondeVives}
          onChange={handleInput}
        ></input>

        <div className="radio-group">
          <span>¿Vives de alquiler?</span>
          <div className="radio-option">
          <label htmlFor="VivesAlquilerSi" className="radio-label">Si</label>
          <input
            type="radio"
            id="VivesAlquilerSi"
            value="True"
            onChange={() => setState({ ...state, VivesAlquiler: "True" })}
            checked={state.VivesAlquiler === "True"}
          ></input>
          </div>
          <div className="radio-option">
          <label htmlFor="VivesAlquilerNo" className="radio-label">No</label>
          <input
            type="radio"
            id="VivesAlquilerNo"
            value="False"
            onChange={() => setState({ ...state, VivesAlquiler: "False" })}
            checked={state.VivesAlquiler === "False"}
          ></input>
          </div>
        </div>

        <div className="radio-group">
          <span>¿Tu casero permite animales?</span>
          <div className="radio-option">
          <label htmlFor="PermiteAnimalesSi" className="radio-label">Si</label>
          <input
            type="radio"
            id="PermiteAnimalesSi"
            value="True"
            onChange={() => setState({ ...state, PermiteAnimales: "True" })}
            checked={state.PermiteAnimales === "True"}
          ></input>
          </div>
          <div className="radio-option">
          <label htmlFor="PermiteAnimalesNo" className="radio-label">No</label>
          <input
            type="radio"
            id="PermiteAnimalesNo"
            value="False"
            onChange={() => setState({ ...state, PermiteAnimales: "False" })}
            checked={state.PermiteAnimales === "False"}
          ></input>
          </div>
        </div>

        <div className="radio-group">
          <span>¿Crees que podrías mudarte pronto?</span>
          <div className="radio-option">
          <label htmlFor="MudarteSi" className="radio-label">Si</label>
          <input
            type="radio"
            id="MudarteSi"
            value="True"
            onChange={() => setState({ ...state, Mudarte: "True" })}
            checked={state.Mudarte === "True"}
          ></input>
          </div>
          <div className="radio-option">
          <label htmlFor="MudarteNo" className="radio-label">No</label>
          <input
            type="radio"
            id="MudarteNo"
            value="False"
            onChange={() => setState({ ...state, Mudarte: "False" })}
            checked={state.Mudarte === "False"}
          ></input>
          </div>
        </div>

        

        <button type="submit"> Enviar </button>
      </form>
    </>
  );
};

export default Formulario3;
