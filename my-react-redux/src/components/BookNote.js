import React from 'react'
import {connect} from 'react-redux'

const BookNote = ({book}) => {
    if(!book /*Or this could also be "book === null"*/) {
        return <div>Please select a book</div>
    }
    return (
        <div>
            <h3>Notes for: </h3>
            <p>
                Title: {book.title}
                <br/>
                Note: {book.notes}
            </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {book: state.selectedBook}
}


export default connect(mapStateToProps)(BookNote)