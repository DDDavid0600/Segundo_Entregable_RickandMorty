import { useState, useEffect } from 'react';
import GridCharacter from '../GridCharacter/GridCharacter';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ListadoPersonajes = ({ endpointParams }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Hace el fetch cada vez que cambia la página
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://rickandmortyapi.com/api/character?page=${page}${endpointParams}`)
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            setCharacters([]);
            setTotalPages(1);
            setLoading(false);
            return;
          }
          throw new Error('No se pudo obtener la información de la API.');
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setCharacters(data.results);
          setTotalPages(data.info.pages);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [page, endpointParams]);

  // Si se cambia lo que busca, lo regresamos a la página 1
  useEffect(() => {
    setPage(1);
  }, [endpointParams]);

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) return <div className="status-message">Cargando personajes...</div>;
  if (error) return <div className="status-message">Error: {error}</div>;
  if (characters.length === 0) return <p className="status-message">No se encontraron resultados.</p>;

  return (
    <>
      <GridCharacter characters={characters} />
      
      <Stack spacing={2} sx={{ mt: 5, mb: 2, alignItems: 'center' }}>
        <Pagination 
          count={totalPages} 
          page={page} 
          onChange={handlePageChange}
          showFirstButton 
          showLastButton 
          size="large"
          sx={{
            '& .MuiPaginationItem-root': { color: '#334155' },
            '& .Mui-selected': { backgroundColor: '#64748b !important', color: '#fff' }
          }}
        />
      </Stack>
    </>
  );
};

export default ListadoPersonajes;