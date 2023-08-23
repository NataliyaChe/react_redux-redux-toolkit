import { createStore, applyMiddleware } from 'redux'
import { animeListReducer } from '../reducers/animeListReducer'
import thunk from 'redux-thunk'

export const store = createStore(animeListReducer, applyMiddleware(thunk))