import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SeccionAnimales.css";
import Nav from "../../Core/Nav/Nav";
import { Link } from "react-router-dom";

const SeccionAnimales = () => {
  const [animals, setAnimals] = useState([]);
  const [originalAnimals, setOriginalAnimals] = useState([]);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    ciudad: "",
    especie: "",
    sexo: "",
    tamaño: "",
  });
  const [initialLoad, setInitialLoad] = useState(true);
  const [cities, setCities] = useState([]);
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    if (initialLoad) {
      axios
        .get("http://localhost:3300/animals")
        .then((response) => {
          console.log(response.data);
          setAnimals(response.data);
          setOriginalAnimals(response.data); // Guardar datos originales
          setInitialLoad(false);
        })
        .catch((error) => {
          console.error("Error al hacer la solicitud:", error);
          setError(error);
        });
    }
  }, [initialLoad]);

  useEffect(() => {
    if (!initialLoad) {
      // Filtrar los animales originales con los nuevos filtros
      setAnimals(filtrarAnimales(originalAnimals));
    }
  }, [filters]);

  useEffect(() => {
    const uniqueCities = new Set(
      originalAnimals.map((animal) => animal.ciudad)
    );
    setCities(["", ...Array.from(uniqueCities)]);

    const uniqueSpecies = new Set(
      originalAnimals.map((animal) => animal.especie)
    );
    setSpecies(["", ...Array.from(uniqueSpecies)]);
  }, [originalAnimals]);

  const filtrarAnimales = (data) => {
    let filteredAnimals = data;

    if (filters.ciudad) {
      filteredAnimals = filteredAnimals.filter(
        (animal) => animal.ciudad === filters.ciudad
      );
    }
    if (filters.especie) {
      filteredAnimals = filteredAnimals.filter(
        (animal) => animal.especie === filters.especie
      );
    }
    if (filters.sexo) {
      filteredAnimals = filteredAnimals.filter(
        (animal) => animal.sexo === filters.sexo
      );
    }
    if (filters.tamaño) {
      filteredAnimals = filteredAnimals.filter(
        (animal) => animal.tamaño === filters.tamaño
      );
    }

    return filteredAnimals;
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  if (error) {
    return <div>Error al cargar los datos: {error.message}</div>;
  }

  return (
    <>
      <div className="screen_container">
        <div className="filter_container">
          <div className="filter_buttons">
            <div className="filter_row">
              <label>Ciudad:</label>
              <select
                name="ciudad"
                value={filters.ciudad}
                onChange={handleFilterChange}
              >
                <option value="">Todas</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter_row">
              <label>Especie:</label>
              <select
                name="especie"
                value={filters.especie}
                onChange={handleFilterChange}
              >
                <option value="">Todas</option>
                {species.map((specie, index) => (
                  <option key={index} value={specie}>
                    {specie}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter_row">
              <label>Sexo:</label>
              <select
                name="sexo"
                value={filters.sexo}
                onChange={handleFilterChange}
              >
                <option value="">Todos</option>
                <option value="Macho">Macho</option>
                <option value="Hembra">Hembra</option>
              </select>
            </div>
            <div className="filter_row">
              <label>Tamaño:</label>
              <select
                name="tamaño"
                value={filters.tamaño}
                onChange={handleFilterChange}
              >
                <option value="">Todos</option>
                <option value="Pequeño">Pequeño</option>
                <option value="Mediano">Mediano</option>
                <option value="Grande">Grande</option>
              </select>
            </div>
          </div>
        </div>
        <ul className="main_animal_container">
          {animals.map((animal) => (
            <Link to={`/Adopcion/${animal._id}`}>
              <li key={animal._id} className="individual_animal_container">
                <div className="animal_photo">
                  <img src={animal.imagen} alt={animal.nombre} />
                </div>
                <div className="animal_data">
                  <div className="animal_name">
                    <h2>{animal.nombre}</h2>
                  </div>
                  <div className="animal_city">
                    <p>
                      <strong>Ciudad:</strong> {animal.ciudad}
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="nav_container">
        <Nav className="nav"></Nav>
      </div>
    </>
  );
};

export default SeccionAnimales;
