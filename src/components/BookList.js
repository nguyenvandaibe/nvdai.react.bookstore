import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchBooks } from "../actions/bookAction";

class BookList extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }
    render() {
        const { books } = this.props.books;
        return (
            <div>
                <h1>Book list</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book, index) => {
                                return (
                                    <tr key={index} no={index}>
                                        <td>{index + 1}</td>
                                        <td>{book.Name}</td>
                                        <td>{book.Price}</td>
                                        <td>{book.Category}</td>
                                        <td>{book.Author}</td>
                                        <td>
                                            <button className="btn btn-danger">Remove</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps, { fetchBooks })(BookList);