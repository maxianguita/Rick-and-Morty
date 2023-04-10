import { ADD_FAVORITE, DELETE_FOVORITE, GET_POKEMON_CHARACTER } from "./action-types";
import axios from 'axios';




export const addFavorite = (character) => {
     return { type: ADD_FAVORITE, payload: character }
    return async (dispatch) =>{
        const response = await axios.post('http:localhost:3001/rickandmorty/fav', character)
        const data = response.date;
        return dispatch({
            type: ADD_FAVORITE,
            payload: data

        })
    }
}

export const deleteFavorite = (id) => {

    return async (dispatch) =>{
       const response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
       const data = response.data;

       return dispatch({
        type: DELETE_FOVORITE,
        payload: data
       })
    }

}
export const GET_ID_CHARACTER = async(id) => {
    return async (dispatch) => {
        const response = await axios.delete(`http://localhost:3001/api/character/${id}`);
        const data = response.data;

        return dispatch({
            type: GET_POKEMON_CHARACTER,
            payload: data
           })
    }
};

export const filterCards = (gender) => {
    return { type : filterCards, payload: gender}
}
export const orderCards =(id => {
    return { type: orderCards, payload: id}
        
})



