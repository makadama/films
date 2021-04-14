import {

	GET_FILMS ,
	GET_ONE_FILM ,
	DELETE_FILM ,
	FILMS_LOADING,
	FILTERED_FILMS
	

} from "../actions/types";

const initialState={
	films: [],
  	film: {},
  	filteredFilms:[],
  	loading: false
  	
}

export default function(state = initialState, action){
	switch(action.type){
		case GET_FILMS:
			return{
				...state,
				films: action.payload,
				filteredFilms: action.payload,
				loading: false
			};
		case FILTERED_FILMS:
			return{
				...state,
				filteredFilms: action.payload,
				loading: false
			};
		case GET_ONE_FILM:
			return{
				...state,
				film: action.payload
			};
		case DELETE_FILM:
			return{
				...state,
				films: state.films.filter(film => film.id !== action.payload)
			};
		
		case FILMS_LOADING:
			return{
				...state,
				loading: true
					};
		
		default:
			return state;
	}
}

