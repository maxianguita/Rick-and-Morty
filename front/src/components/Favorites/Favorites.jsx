import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import style from './Favorites.module.css';


const Favorites = () =>{

    const { myFavorites } = useSelector (state => state)
    
    console.log('favorites', myFavorites);
    return(   
        <div className={style.container}>
              
       {
           myFavorites?.map((character)  => {
                return (
                    
                    
                    <div className={style.card}>
                        

                         <div className={style.front}> 
                         <img src={character.image} alt={character.name} />
                        </div>  
                              
                        <Link to={`/detail/${character.id}`}> 
                         <h2 className={style.h2}>Name: {character.name}</h2>
                        </Link>
                        <h2>Species:{character.species}</h2>
                        <h2>Gender:{character.gender}</h2> 
                        
                    </div>
                )

                })
           
        }
         
      </div>

    
    )
}

export default Favorites;







         