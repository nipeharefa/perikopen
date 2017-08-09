import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = () => {

};

export default createStore(reducers, composeWithDevTools(middleware()));
