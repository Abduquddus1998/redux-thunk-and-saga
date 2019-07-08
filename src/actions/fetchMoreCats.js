import {FETCH_MORE_CATS} from "../saga/sagaTypes";

const fetchMoreCats = () => dispatch => {
    dispatch({type: FETCH_MORE_CATS})
}

export default fetchMoreCats();