import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/';
import Container from './components/Classroom/Container';

const store = createStore(
    reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => (
    <Provider store={store}>
        <Router>
            <div>
                <h1>HelpCue</h1>
                <Container />
            </div>
        </Router>
    </Provider>
);

render(<App />, document.getElementById('app'));

