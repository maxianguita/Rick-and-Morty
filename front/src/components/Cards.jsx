import Card from './Card';
import { CardsContainer } from "./styledComponents";

function Cards({ characters, onClose }) { // props siempre son objetos 


   return (
      
      
      <CardsContainer>
         
         

         {
            
            characters?.map(({ id, name, species, gender, image }) => {//destructurin para simplificar codigo 

               return <Card
                  key={id}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  id={id}
                  onClose={() => onClose(id)}

               />

            })
         }
      </CardsContainer>

   );
}


export default Cards;