import { useState } from 'react';
import ListadoPersonajes from '../../components/ListadoPersonajes/ListadoPersonajes';
import './Filter.css';

const Filter = () => {
  const [selectedSpecies, setSelectedSpecies] = useState('Human');

  return (
    <div className="container-page">
      <h2>Filtrar por Especie</h2>
      
      <div className="filter-container">
        <label htmlFor="species-select">Selecciona una especie: </label>
        <select 
          id="species-select"
          className="filter-select"
          value={selectedSpecies} 
          onChange={(e) => setSelectedSpecies(e.target.value)}
        >
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          <option value="Humanoid">Humanoid</option>
          <option value="Poopybutthole">Poopybutthole</option>
          <option value="Mythological Creature">Mythological Creature</option>
          <option value="Animal">Animal</option>
          <option value="Robot">Robot</option>
          <option value="Cronenberg">Cronenberg</option>
          <option value="Disease">Disease</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <ListadoPersonajes endpointParams={`&species=${selectedSpecies}`} />
    </div>
  );
};

export default Filter;