import {combineReducers, createStore} from 'redux'

import ProductReducer from './product/reducer'

const reducers = combineReducers({
    product : ProductReducer
})

const store = createStore(reducers)

export default store