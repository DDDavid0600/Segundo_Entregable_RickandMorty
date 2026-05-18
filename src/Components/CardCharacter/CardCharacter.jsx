import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

const CardCharacter = ({ character }) => {
  const navigate = useNavigate();

  return (
    <Card 
      sx={{ 
        width: '100%', 
        height: '100%',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
        border: '1px solid #e2e8f0',
        overflow:'hidden',
        borderRadius:'24px'
      }}
    >
      <CardActionArea onClick={() => navigate(`/character/${character.id}`)}>
        <CardMedia
          component="img"
          height="240"
          image={character.image}
          alt={character.name}
          sx={{ objectFit: 'cover'}}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography 
            gutterBottom 
            variant="h6" 
            component="div"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              height: '40px', 
              lineHeight: '1.1em',
              color: '#334155',
              fontWeight: 600
            }}
          >
            {character.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1.5 }}>
            <strong>Especie:</strong> {character.species}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <strong>Estado:</strong> {character.status}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <strong>Género:</strong> {character.gender}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ padding: '0 16px 16px 16px', justifyContent:'center' }}>
        <Button 
          size="small" 
          variant="outlined" 
          sx={{ 
            color: '#64748b', 
            borderColor: '#e2e8f0', 
            textTransform: 'none',
            '&:hover': { borderColor: '#64748b', backgroundColor: '#f8fafc' } 
          }}
          onClick={() => navigate(`/character/${character.id}`)}
        >
          Detalles
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardCharacter;