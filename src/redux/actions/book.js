import {getBook, delBook, pageBook} from '../../utils/http';
import {getBookAction, addDetailAction, delBookAction, pageAction} from './actionType';

export const getBookCreator = () => {
    return {
        type: getBookAction,
        payload: getBook()
    };
};

export const addDetailCreator = (id, title, genre, image, year, synopsis, author, qty) => {
    return {
        type: addDetailAction,
        payload: {
            id: id,
            title: title,
            genre: genre,
            image: image,
            realease_year: year,
            synopsis: synopsis,
            author: author,
            qty: qty
        }
    };
};

export const delBookCreator = (id) =>{
    return {
        type: delBookAction,
        payload: delBook(id)
    }
}

export const PageCreator = (params) =>{
    return {
        type : pageAction,
        payload: pageBook(params)
    }
}