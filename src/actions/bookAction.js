import { FETCH_BOOKS } from "./types";
import axios from 'axios';

export const fetchBooks = () => async dispatch => {
    try {
        const res = await axios.get(`https://localhost:44372/api/books`)
        dispatch({
            type: FETCH_BOOKS,
            payload: res.data
        })
    }
    catch (e) {
        throw (e);
    }
}