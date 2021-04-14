import {

	GET_CATEGORIES ,
	GET_ONE_CATEGORY 
	

} from "./types";

import {movies$} from '../movies.js';

export const fetchCategories = () => dispatch => {
	var categoriesTab=[];
	movies$.then(ok=>{
		for(let i=0; i<ok.length; i++){
			if(categoriesTab.includes(ok[i].category)){
				continue;
			}
			else{
				categoriesTab.push(ok[i].category)
			}
		}
		dispatch({
			type : "GET_CATEGORIES",
			payload: categoriesTab
		})
	}).catch(err=>{
		console.log(err)
	})
}


