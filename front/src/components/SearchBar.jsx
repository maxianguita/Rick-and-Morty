import style from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_ID_CHARACTER } from "./redux/actions";




function SearchBar({ onSearch }) {
   const idCharacter = useSelector(state => state.getCharacterId);
   const dispatch = useDispatch();
   const [character, setCharacter] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }


   return (
          
      <div className={style.bar}> 
      
      
         <input type='search' className={style.searchInput} value={character} onChange={handleChange} />
         <button className={style.searchButton} onClick={() => onSearch(character)}>Buscar Personaje
         </button>
         
      </div>
   );
}
export default SearchBar;