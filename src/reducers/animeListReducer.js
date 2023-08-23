import { initialState } from "./initialState"

const GET_ANIMELIST = 'GET_ANIMELIST'

export const animeListReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ANIMELIST:
            return { ...state, animes: action.payload}
        default: 
            return state
    }
}
