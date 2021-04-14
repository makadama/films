import {

	GET_CATEGORIES ,
	GET_ONE_CATEGORY ,
	
	

} from "../actions/types";

const initialState={
	categories: [],
  	category: {}
  	
}

export default function(state = initialState, action){
	switch(action.type){
		case GET_CATEGORIES :
			return{
				...state,
				categories: action.payload
			};
		case GET_ONE_CATEGORY:
			return{
				...state,
				category: action.payload
			};
		default:
			return state;
	}
}

