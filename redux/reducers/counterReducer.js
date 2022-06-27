import * as actionTypes from "../actions/actionTypes";
const INITIAL_STATE = 0;

const counterReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.INCREASE_COUNTER:
			return state + action.payload;

		case actionTypes.DECREASE_COUNTER:
			return state - action.payload;

		default:
			return state;
	}
};

export default counterReducer;
