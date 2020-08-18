import { FETCH_BOOKS } from "./types";

export const fetchBooks = () => async dispatch => {
    try{
        const res = await axios.get(`https://localhost:44372/api/books`)
        dispatch( {
            type: FETCH_BOOKS,
            payload: res.data
        })
    }
    catch(e){
        // dispatch( {
        //     type: USERS_ERROR,
        //     payload: console.log(e),
        // })
        throw (e);
    }
}