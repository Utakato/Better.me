import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunk from "redux-thunk"


const combinedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, combinedEnhancers(applyMiddleware(thunk)))

export default store