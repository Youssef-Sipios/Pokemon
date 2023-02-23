import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import DetailPage from './components/DetailPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Routing = () => {
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/details/:id" component={DetailPage} />
      </Switch>
    </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
