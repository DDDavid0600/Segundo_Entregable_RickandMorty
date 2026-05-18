import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Details.css';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('No se encontró el personaje especificado.');
        return res.json();
      })
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="status-message">Cargando detalles del personaje...</div>;
  if (error) return <div className="status-message">Error: {error}</div>;

  return (
    <div className="container-page">
      <Button 
        onClick={() => navigate(-1)} 
        sx={{ color: '#64748b', marginBottom: '20px', textTransform: 'none', backgroundColor:'#bbe8ff' }}
      >
        ← Volver
      </Button>

      {character && (
        <div className="details-card">
          <img src={character.image} alt={character.name} className="details-img" />
          <div className="details-info">
            <h1 className="details-name">{character.name}</h1>
            <p><strong>Especie:</strong> {character.species}</p>
            <p><strong>Estado:</strong> {character.status}</p>
            <p><strong>Género:</strong> {character.gender}</p>
            <p><strong>Origen:</strong> {character.origin?.name}</p>
            <p><strong>Ubicación actual:</strong> {character.location?.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;