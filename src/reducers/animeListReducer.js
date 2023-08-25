import { initialState } from "./initialState"

const GET_ANIMELIST = 'GET_ANIMELIST'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

export const animeListReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ANIMELIST:
            return { 
                ...state, 
                animes: action.payload.data, 
                totalPages: action.payload.pagination.last_visible_page,
                currentPage: state.currentPage,
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,

            }
        default: 
            return state
    }
}
