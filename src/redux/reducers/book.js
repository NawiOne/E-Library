import {
    getBookAction,
    addDetailAction,
    delBookAction,
    pageAction,
    pending,
    fulfilled,
    rejected
} from '../actions/actionType';


const initialState = {
    data: [],
    pageInfo: {},
    bookDetail: {},
    error: '',
    isPending: false,
    isfulfilled: false,
    isRejected: false,
};

const book = (prevState = initialState, {type, payload}) => {
    switch(type) {
        case getBookAction + pending:
            return {
                ...prevState,
                isPending: true
            };
        case getBookAction + rejected:
            return {
                ...prevState,
                isRejected: true,
                error: payload,
                isPending: false
            };
        case getBookAction + fulfilled:
            console.log(payload)
            return {
                ...prevState,
                isfulfilled: true,
                data: payload.data.data,
                isPending: false,
                pageInfo:payload.data.pageInfo
            };
        case addDetailAction:

            if(payload.id === prevState.bookDetail.id) {
                return {
                    ...prevState,
                };
            } else {
                return {
                    ...prevState,
                    bookDetail: {...payload}
                };

            }
        case delBookAction:
            return{
                ...prevState,
            }
        case pageAction + fulfilled:
            return{
                ...prevState,
                data: payload.data.data,
                pageInfo: payload.data.pageInfo
            }

        default:
            return prevState;
    }
};

export default book;