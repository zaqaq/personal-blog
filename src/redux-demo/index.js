import { combineReducers } from 'redux'
import { catInfo } from './list'
import { count } from './count'

export default combineReducers({
    catInfo,
    count
})