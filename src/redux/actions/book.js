import {getBook} from '../../utils/http';
import {getBookAction, addDetailAction} from './actionType';

export const getBookCreator = () => {
    return {
        type: getBookAction,
        payload: getBook()
    };
};

export const addDetailCreator = (id, title, genre, image, year, synopsis) => {
    return {
        type: addDetailAction,
        payload: {
            id: id,
            title: title,
            genre: genre,
            image: image,
            realease_year: year,
            synopsis: synopsis,

        }
    };
};