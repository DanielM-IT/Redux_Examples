import { combineReducers } from 'redux'

const booksReducer = () => {
    return [
        {title: 'WEB601', notes:'hsth'},
        {title: 'DAT701', notes:'tsrhsr'},
        {title: 'SDV602', notes:'stjhsf'}
    ]
}

const selectedBookReducer = (selectedBook = null, action) => {
    if (action.type === 'BOOK_SELECTED') {
        return action.payload
    }
    return selectedBook
}

export default combineReducers ({
    books: booksReducer,
    selectedBook: selectedBookReducer
})