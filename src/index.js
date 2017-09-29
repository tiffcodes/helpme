import React from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './reducers/index';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import Loader from './components/Loader/Loader';
import initialState from './initialState';
import { startListeningForQuestions } from './actions/firebaseActions';
import { startListeningForClassrooms } from './actions/firebaseClassroomActions';

const middleware = [thunk];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(...middleware),
        ...enhancers,
    ),
);

const App = () => (
    <Provider store={store}>
        <Router>
            <div>
                <Loader />
                <h1>HelpCue</h1>
                <DashboardContainer />
            </div>
        </Router>
    </Provider>
);

render(<App />, document.getElementById('app'));

store.dispatch(startListeningForQuestions());
store.dispatch(startListeningForClassrooms());
