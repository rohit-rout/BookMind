import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "./index.css"

ReactDOM.render(<>
<BrowserRouter>
<App></App>
</BrowserRouter></>
,document.getElementById("root"))