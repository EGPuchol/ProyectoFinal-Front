import "./Formulario.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BarraProgreso from "./BarraProgreso";

export const Formulario2 = () => {
  //creamos el estado inicial para guardar los valores
  const initialState = {
    OtrosAnimales: "",
    CualesAnimales: "",
    SeLlevaBien: "",
    EleccionAdoptar: "",
    NecesidadesAnimal: "",
    GastosAnimal: "",
    AlimentacionAnimal: "",
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

    localStorage.setItem("user2", JSON.stringify(state))
    navegar("/Formulario3");

    console.log(state);

    setState(initialState); // esta funcion limpia el formulario una vez submiteado
  };

  return (
    <>
      <form onSubmit={submit}>
        <h5> Formulario de Adopción </h5>
        <BarraProgreso currentStep={2} totalSteps={3}/>
        <h3> Sobre las mascotas </h3>
        <div className="formulario-container">
        <div className="radio-group">
          <div className="radio-question">
            <span>¿Tienes otros animales?</span>
            </div>
          <div className="radio-option">
          <label htmlFor="OtrosAnimalesSi" className="radio-label">Si</label>
          <input
            type="radio"
            id="OtrosAnimalesSi"
            value="True"
            onChange={() => setState({ ...state, OtrosAnimales: "True" })}
            checked={state.OtrosAnimales === "True"}
          ></input>
          </div>
          <div className="radio-option">
          <label htmlFor="OtrosAnimalesNo" className="radio-label">No</label>
          <input
            type="radio"
            id="OtrosAnimalesNo"
            value="False"
            onChange={() => setState({ ...state, OtrosAnimales: "False" })}
            checked={state.OtrosAnimales === "False"}
          ></input>
          </div>
        </div>
        </div>
      
        {/* este es el condicional para que si pulsas te aparezcan las dos siguiente  */}

        {state.OtrosAnimales === "True" && (
          <>
            <label htmlFor="CualesAnimales"> </label>
            <input
              type="text"
              id="CualesAnimales"
              placeholder="¿Cuáles?"
              value={state.CualesAnimales}
              onChange={handleInput}
            ></input>

            <label htmlFor="SeLlevaBien"></label>
            <input
              type="text"
              id="SeLlevaBien"
              placeholder="¿Se lleva bien con otros animales?"
              value={state.SeLlevaBien}
              onChange={handleInput}
            ></input>
          </>
        )}

        <label htmlFor="EleccionAdoptar"> ¿Por qué has elegido adoptar? </label>
        <input
          type="text"
          id="EleccionAdoptar"
          value={state.EleccionAdoptar}
          onChange={handleInput}
        ></input>

        <label htmlFor="NecesidadesAnimal">
          {" "}
          ¿Conoces las necesidades del animal?{" "}
        </label>
        <input
          type="text"
          id="NecesidadesAnimal"
          value={state.NecesidadesAnimal}
          onChange={handleInput}
        ></input>

        <label htmlFor="GastosAnimal"> ¿Conoces sus gastos? </label>
        <input
          type="text"
          id="GastosAnimal"
          value={state.GastosAnimal}
          onChange={handleInput}
        ></input>

        <label htmlFor="AlimentacionAnimal"> ¿Conoces su alimentación? </label>
        <input
          type="text"
          id="AlimentacionAnimal"
          value={state.AlimentacionAnimal}
          onChange={handleInput}
        ></input>

        <button type="submit"> Continuar </button>
      </form>
    </>
  );
};

export default Formulario2;