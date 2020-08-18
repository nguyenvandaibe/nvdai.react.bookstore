import { FETCH_BOOKS, CREATE_BOOK } from "./types";
import axios from 'axios';

const apiUrl = `https://localhost:44372/api/books`;

export const fetchBooks = () => async dispatch => {

    axios.get(apiUrl)
    .then(res => {
        dispatch({
            type: FETCH_BOOKS,
            payload: res.data
        })
    })
    .catch(err => {
        throw(err);
    })
}

export const createBook = (data) => async dispatch => {
    axios.post(apiUrl, data)
    .then(res => {
        dispatch({
            type: CREATE_BOOK,
            payload: res.data
        })
    })
    .catch (error => {
        throw(error)
    })
}