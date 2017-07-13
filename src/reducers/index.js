import { combineReducers } from 'redux';
// import { routerReducer as router } from 'react-router-redux';

import questions from './questionReducer';
import loader from './loaderReducer';

const rootReducer = combineReducers({ questions, loader });

export default rootReducer;
