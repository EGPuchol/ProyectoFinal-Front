import "./Acceder.css";
import { Link } from 'react-router-dom'

export const Acceder = () => {
  return (
    <div className="todo">
      <img className="imagen" src="images/images_bienvenida/perro_acceder.png" alt="imagen para acceder" />
      <div className="entrar">
        <h2>¿Cómo quieres entrar?</h2>
        <div className="botones">
        <Link to= {"/Registro"}><button className="usuario">Usuario</button></Link>
        </div>
        <Link to={"/"}><p>Registrarse en otro momento</p></Link>
      </div>
    </div>
  );
};
