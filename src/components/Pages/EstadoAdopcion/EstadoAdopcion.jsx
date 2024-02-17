import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "../../Core/Nav/Nav";
import FilterPopup from "./EstadoAdopcionPopUp"; // Importa el componente del pop-up de filtros
import "./EstadoAdopcion.css";

const EstadoAdopcion = () => {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredAnimals, setFilteredAnimals] = useState([]);

  useEffect(() => {
    let isMounted = true;
    axios
      .get("http://localhost:3300/animals")
      .then((response) => {
        if (isMounted) {
          setAnimals(response.data);
          setFilteredAnimals(response.data);
        }
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
        setError(error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterAnimals(event.target.value);
  };

  const handleApplyFilters = (showAdopted, showNotAdopted) => {
    filterAnimals(searchTerm, showAdopted, showNotAdopted);
    setShowFilters(false);
  };

  const filterAnimals = (term, showAdopted = true, showNotAdopted = true) => {
    const filtered = animals.filter((animal) => {
      const nameIncludesTerm = animal.nombre.toLowerCase().includes(term.toLowerCase());
      if (showAdopted && showNotAdopted) {
        return nameIncludesTerm;
      } else if (showAdopted && !showNotAdopted) {
        return nameIncludesTerm && animal.adoptado;
      } else if (!showAdopted && showNotAdopted) {
        return nameIncludesTerm && !animal.adoptado;
      } else {
        return false; // No mostrar ningún animal
      }
    });

    setFilteredAnimals(filtered);
  };

  if (error) {
    return <div>Error al cargar los datos: {error.message}</div>;
  }

  return (
    <>
      <div className="screen_container">
        <div className="header_nav">
          <Link to="/Adopcion" className="volver_btn">
            Volver
          </Link>
          <div className="buscador2">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Buscar por nombre..."
            />
          </div>
          <div className="filter_btn" onClick={() => setShowFilters(true)}>
            <img src="iconos\secundarios\controles-deslizantes.png" alt="Botón Filtro" className="btn_filtro"/>
          </div>
          <FilterPopup
            isOpen={showFilters}
            onClose={() => setShowFilters(false)}
            handleApplyFilters={handleApplyFilters}
          />
        </div>
        <ul className="main_animal_container_estadoAdopcion">
          {filteredAnimals.map((animal) => (
            <li key={animal._id} className="individual_animal_container_estadoAdopcion">
              <div className="procesoAdopcion1">
                <h2 className="animal_name_estadoAdopcion">Adopción de {animal.nombre}</h2>
                <p style={{ color: animal.adoptado ? '#8bc34a' : 'red' }}>
                  {animal.adoptado ? "Adoptado" : "No Adoptado"}
                </p>
              </div>
              <div className="procesoAdopcion2">
                <div className="animal_photo_estadoAdopcion">
                  <img src={animal.imagen} alt={animal.nombre} />
                </div>
                <div className="animal_data_estadoAdopcion">
                  <p><strong>Nombre:</strong> {animal.nombre}</p>
                  <p><strong>Ciudad:</strong> {animal.ciudad}</p>
                  <p><strong>Sexo:</strong> {animal.sexo}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav_container_estadoAdopcion">
        <Nav className="nav"></Nav>
      </div>
    </>
  );
};

export default EstadoAdopcion;
