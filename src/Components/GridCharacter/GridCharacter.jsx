import CardCharacter from '../CardCharacter/CardCharacter'
import './GridCharacter.css'

const GridCharacter = ({characters}) => {
  return (
    <div className="character-grid">
      {characters.map((char) => (
        <GridCharacterItem key={char.id} char={char} />
      ))}
    </div>
  )
}
// Componente interno para evitar locuras en el mapeo
const GridCharacterItem = ({ char }) => (
  <div className="grid-item">
    <CardCharacter character={char} />
  </div>
)

export default GridCharacter