import React, { Component } from "react";
import { connect } from 'react-redux';
import { createBook } from "../actions/bookAction";

class CreateBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: '',
            bookPrice: 0,
            bookCategory: '',
            bookAuthor: ''
        }
        this.onCreateSubmit = this.onCreateSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        const target = event.target;

        console.log(target.name);
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onCreateSubmit() {
        this.props.createBook({
            Name: this.state.bookName,
            Price: this.state.bookPrice,
            Category: this.state.bookCategory,
            Author: this.state.bookAuthor
        });
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" id="inputName" name="bookName" placeholder="Book's name" onChange={this.onInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPrice">Price</label>
                        <input type="numeric" className="form-control" id="inputPrice" name="bookPrice" placeholder="Price" onChange={this.onInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputCategory">Category</label>
                        <input type="text" className="form-control" id="inputCategory" name="bookCategory" placeholder="Category" onChange={this.onInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAuthor">Author</label>
                        <input type="text" className="form-control" id="inputAuthor" name="bookAuthor" placeholder="Author" onChange={this.onInputChange} />
                    </div>
                    <button className="btn btn-success" onClick={this.onCreateSubmit}>Create</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ book: {} })

export default connect(mapStateToProps, { createBook })(CreateBook);