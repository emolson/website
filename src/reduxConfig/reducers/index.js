import { combineReducers } from 'redux'
import {counterSlice} from '../slices'

export default combineReducers({
    counter: counterSlice
})