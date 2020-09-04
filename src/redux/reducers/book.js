import {getBookAction, addDetailAction, pending, fulfilled, rejected} from '../actions/actionType';


const initialState = {
    data: [],
    bookDetail : {},
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
            return {
                ...prevState,
                isfulfilled : true,
                data: payload.data.data,
                isPending: false
            };
        case addDetailAction:
 
            if (payload.id === prevState.bookDetail.id){
                return{
                    ...prevState,
                }
            } else{
                
                return{
                    ...prevState,
                    bookDetail : {...payload}
                }
            }

        default:
            return prevState;
    }
};

export default book;