import { initialState } from "./initialState"

const GET_CURRENT_USER = 'GET_CURRENT_USER'
const SET_CURRENT_USER = 'SET_CURRENT_USER'
const LOGOUT = 'LOGOUT'

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CURRENT_USER:
            return { 
                ...state
            }
        case SET_CURRENT_USER:
            return { 
                ...state, 
                currentUser: action.payload, 
            }
        case LOGOUT:
            return { 
                ...state, 
                currentUser: action.payload, 
            }
        default: 
            return state
    }
}