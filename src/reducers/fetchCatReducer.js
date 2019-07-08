import {FETCH_CATS_ERROR,
        FETCH_CATS_START,
        FETCH_CATS_SUCCESS} from "../actions/actionTypes";
import {
    FETCH_MORE_CATS_SAGA_SUCCESS,
    FETCH_MORE_CATS,
    FETCH_MORE_CATS_SAGA_START} from "../saga/sagaTypes";




const initialState = [];


const fetchCatReducer = (state = initialState, action) => {

    switch(action.type){
        case FETCH_CATS_START:
            return state

        case FETCH_CATS_SUCCESS:
            return {...state, ...action.payload}

        case FETCH_MORE_CATS_SAGA_SUCCESS:
            return {...state, ...action.payload}


        case FETCH_MORE_CATS_SAGA_START:
            return state;


        case "FETCH_MORE_SAGA_ERROR":
            return state;

        case FETCH_CATS_ERROR:
            return state;

        default:
            return state;
    }
}

export default fetchCatReducer;