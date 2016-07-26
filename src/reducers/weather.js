import { GET_WEATHER } from '../actions/index';

export default function(state = [], action) {
	if(action.payload){
		console.log(action.payload.data)
	}
	switch (action.type){
		case GET_WEATHER:
			// return state.concat([action.payload.data]);
			return [action.payload.data, ...state]
	}

	return state;
}