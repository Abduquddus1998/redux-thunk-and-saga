import {FETCH_CATS_ERROR,
        FETCH_CATS_SUCCESS,
        FETCH_CATS_START} from "./actionTypes";


const fetchCatsError = () => {
    return {type: FETCH_CATS_ERROR}
}

const fetchCarsStarted = () => {
    return {type: FETCH_CATS_START}
}

const fetchCatsSuccess = (cat) => {
    return {
        type: FETCH_CATS_SUCCESS,
        payload: cat
    }
}


const fetchCats = () => {
    return (dispatch) => {

        dispatch(fetchCarsStarted());


        fetch("https://api.thecatapi.com/v1/images/search", {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "c547a57f-b0e8-4785-90ef-0a9a18698fa1"
            }
        })
            .then(catResponse => catResponse.json())
            .then(cat => dispatch(fetchCatsSuccess(cat)))
            .catch(err => dispatch(fetchCatsError()))
    }
}

export default fetchCats;




