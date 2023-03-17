import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {addFavorite, deleteFavorite} from './redux/actions'






function Card({ name, species, gender, image, onClose, id }) {
     const [isFav, setIsFav] = useState(false);
     const dispatch = useDispatch();
     const myFavorites = useSelector(state => state.myFavorites);
      
    
   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id))
      }
      
       else {
         setIsFav(true);
         dispatch(addFavorite({ name, species, gender, image, onClose, id }))
       }
   }

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      })
   }, [myFavorites]);

 
   return (
      <div className={style.container}>

         {
        isFav ? (
        <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
            )
           }
         
       
         <Link to={`/detail/${id}`}>
            <h2>Name: {name}</h2>
         </Link>
         <button onClick={onClose} className={style.closeButton} >X</button> 
         <h2>Species:{species}</h2>
         <h2>Gender:{gender}</h2>
         <img src={image} alt={name} />
         
         
      </div>
   );
}
export default Card;