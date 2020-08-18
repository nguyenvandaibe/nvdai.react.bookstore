import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchBooks } from "../actions/bookAction";

class BookList extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }
    render() {
        const { books } = this.props.books;
        console.log(books);

        return (
            
        )
    }
}