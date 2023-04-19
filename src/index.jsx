import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './components/Application';
import { BrowserRouter as Router, } from 'react-router-dom';
import '@public/styles.css';


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <Router>
        <Application/>
    </Router>,
);
