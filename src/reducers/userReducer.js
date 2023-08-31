import { initialState } from "./initialState"

const GET_CURRENT_USER = 'GET_CURRENT_USER'

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CURRENT_USER:
            return { 
                ...state, 
                currentUser: action.payload, 
            }
        default: 
            return state
    }
}