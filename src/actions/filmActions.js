import {

	GET_FILMS ,
	GET_ONE_FILM ,
	DELETE_FILM ,
	FILMS_LOADING,
	FILTERED_FILMS
	

} from "./types";

import {movies$} from '../movies.js';

export const fetchFilms = () => dispatch => {
	movies$.then(ok=>{
	dispatch({
		type : "GET_FILMS",
		payload: ok
	})
	}).catch(err=>{
		console.log(err)
	})
}

export const filterByCategory = (categoriesSelected) => dispatch  => {
	if(categoriesSelected.length === 0){
				dispatch(fetchFilms())
			}
	else{
	var selectedFilmsTab = [];
	movies$.then(ok=>{
		for(let i=0; i<ok.length; i++ ){
			if(categoriesSelected.find(cat => cat.label === ok[i].category)){
				selectedFilmsTab.push(ok[i])
			}
	}
	dispatch({
		type : "FILTERED_FILMS",
		payload: selectedFilmsTab
	})
	}).catch(err=>{
		console.log(err)
	})
	}

}

export const fetchOneFilm = (filmId) => (dispatch) => {

	movies$.then(ok=>{
		var movieFound = ok.find(movie => movie.id === filmId)
		if(movieFound){
			dispatch({
			type : "GET_ONE_FILM",
			payload: movieFound
		})
		}
		else{
			console.log('error')
		}
	}).catch(err=>{
		console.log(err)
	})
	
}

export const deleteFilm = (filmId) => (dispatch) => {

	movies$.then(ok=>{
		var films = ok.filter(film => film.id !== filmId);
		dispatch({
		type : "GET_FILMS",
		payload: films
	})
	}).catch(err=>{
		console.log(err)
	})
	
}


