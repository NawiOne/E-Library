import Axios from 'axios';

export const getBook = () => {
    return Axios.get(process.env.REACT_APP_GET_BOOK);
}