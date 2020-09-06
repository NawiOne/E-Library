import {getBook, delBook, pageBook, searchBook} from '../../utils/http';
import {getBookAction, addDetailAction, delBookAction, pageAction, editDetailAction, searchAction} from './actionType';

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

export const editDetailCreator = (title, genre, image, year, synopsis, author, qty) => {
    return {
        type: editDetailAction,
        payload: {
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



export const delBookCreator = (id) => {
    return {
        type: delBookAction,
        payload: delBook(id)
    };
};

export const searchBookCreator = (title) => {
    return {
        type: searchAction,
        payload: searchBook(title)
    };
};



export const PageCreator = (params) => {
    return {
        type: pageAction,
        payload: pageBook(params)
    };
};