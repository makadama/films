import { combineReducers } from "redux";
import filmsReducer from './filmsReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
	film: filmsReducer,
	category: categoryReducer
});