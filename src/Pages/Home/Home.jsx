import { useState } from 'react';
import ListadoPersonajes from '../../Components/ListadoPersonajes/ListadoPersonajes';
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container-page">
      <h2>Todos los Personajes</h2>
      
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar personaje en toda la serie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ListadoPersonajes endpointParams={`&name=${searchTerm}`} />
    </div>
  );
};

export default Home;