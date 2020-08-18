import { FETCH_BOOKS, CREATE_BOOK } from "../actions/types";

const initialState = {
    books: [],
    loading: true
}

export default function (state = initialState, action) {

    switch (action.type) {
        case FETCH_BOOKS:
            return {
                ...state,
                books: action.payload,
                loading: false
            }

        case CREATE_BOOK:
            console.log(action);
            
            return {
                ...state,
                books: state.books.concat(action.payload)
            };
        default:
            return state;
    }
}