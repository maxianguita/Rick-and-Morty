import { ADD_FAVORITE, DELETE_FOVORITE } from './action-types'

const initialState = {
    myFavorites: []
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

        default:
            return { ...state };
    }
}

export default reducer;

