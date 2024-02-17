import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './components/Pages/Home/Home';
import { SeccionMapa } from './components/Pages/SeccionMapa/SeccionMapa';
// import { SeccionAnimales } from './components/Pages/SeccionAnimales/SeccionAnimales';
import SeccionAnimales from './components/Pages/SeccionAnimales/SeccionAnimales';
import { SeccionPerfil } from './components/Pages/SeccionPerfil/SeccionPerfil';
import { SeccionOtrosServicios } from './components/Pages/SeccionOtrosServicios/SeccionOtrosServicios';
import { Carrousel } from './components/Pages/Carrousel/Carrousel';
import EstadoAdopcion from './components/Pages/EstadoAdopcion/EstadoAdopcion';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path= "/" element= {<Home/>}/>
        <Route path= "/Carrousel" element= {<Carrousel/>}/>
        <Route path = "/Mapa" element= {<SeccionMapa/>} />
        <Route path = "/Adopcion" element= {<SeccionAnimales/>} />
        <Route path = "/Perfil" element= {<SeccionPerfil/>} />
        <Route path = "/OtrosServicios" element= {<SeccionOtrosServicios/>} />
        <Route path = "/estadoAdopcion" element= {<EstadoAdopcion/>} />

        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
