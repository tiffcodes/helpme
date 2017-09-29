import { combineReducers } from 'redux';
// import { routerReducer as router } from 'react-router-redux';

import questions from './questionReducer';
import loader from './loaderReducer';
import classrooms from './classroomReducer';


const rootReducer = combineReducers({ questions, loader, classrooms });

export default rootReducer;
