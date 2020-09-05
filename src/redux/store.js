import { createStore, applyMiddleware } from "redux";
// import { persistStore, persistReducer} from "redux-persist";
// import storage from 'redux-persist/lib/storage';

import { createLogger } from "redux-logger";
import rpm from "redux-promise-middleware";
import indexReducer from './reducers/index';
// import indexReducer from './reducers'

// const persistConfig ={
//     key: "root",
//     storage,
//     whitelist: ["book"]
// };

// const persistedReducer = persistReducer(persistConfig, indexReducer )

const logger = createLogger();
const enhancer = applyMiddleware(rpm,logger);

const store = createStore(indexReducer, enhancer);
// const persistor = persistStore(store)

export {store};