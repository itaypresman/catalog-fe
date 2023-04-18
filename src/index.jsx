import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './components/Application.jsx';
import { BrowserRouter as Router, } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <Router>
        <Application/>
    </Router>,
);
