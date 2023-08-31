import { createStore, applyMiddleware, combineReducers } from 'redux'
import { animeListReducer } from '../reducers/animeListReducer'
import { userReducer } from '../reducers/userReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    animes: animeListReducer,
    user: userReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))