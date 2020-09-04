import {combineReducers} from 'redux';
import animateReducer from './animate';
import bookReducer from './book'

const indexReducer = combineReducers({
    animate : animateReducer,
    book : bookReducer,
})

export default indexReducer;