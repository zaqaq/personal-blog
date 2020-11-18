import {combineReducers} from 'redux'
import {countReducer} from './count'
import {loginReducer} from './loginStatus'

export default combineReducers({
    count: countReducer,
    loginStatus: loginReducer
})
