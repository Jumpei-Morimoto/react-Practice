import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Adduser from './Adduser';
import Searchuser from './Searchuser';
import Edituser from './Edituser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>  
        <Route path="/" element={<App />}/>
        <Route path="/adduser" element={<Adduser />}/>
        <Route path="/searchuser" element={<Searchuser />}/>
        <Route path="/edituser/:id" element={<Edituser />}/>
      </Routes>   
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
