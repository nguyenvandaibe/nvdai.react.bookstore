import React, { Component } from "react";
import { connect } from 'react-redux';
import { createBook } from "../actions/bookAction";

class CreateBook extends Component {
    constructor(props) {
        super(props);
        this.onCreateSubmit = this.onCreateSubmit.bind(this);
    }

    onCreateSubmit() {
        this.props.createBook({Name:'Viet Nam su luoc', Price: 10, Category: 'History', Author: 'Tran Trong Kim'});
    }

    render() {
        return (
            <div>
                <button className="btn btn-success" onClick={this.onCreateSubmit}>Create</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ book: {} })

export default connect(mapStateToProps, { createBook })(CreateBook);