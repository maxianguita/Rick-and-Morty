import { ADD_FAVORITE, DELETE_FOVORITE, GET_POKEMON_CHARACTER } from './action-types'

const initialState = {
    myFavorites: [],
    getCharacterId : []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }

        case DELETE_FOVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload)
            }
        case GET_POKEMON_CHARACTER: 
            return {
                ...state,
                getCharacterId: action.payload
            }    

        default:
            return { ...state };
    }
}

export default reducer;

