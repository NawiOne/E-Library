import Axios from 'axios';

export const getBook = () => {
    return Axios.get(process.env.REACT_APP_GET_BOOK);
}

export const delBook = (id) =>{
    const url = process.env.REACT_APP_BOOK
    return Axios.delete(`${url}?id=${id}`)
}

export const pageBook = (params) =>{
    const url = 'http://localhost:2300';
    return Axios.get(`${url}${params}`)
}