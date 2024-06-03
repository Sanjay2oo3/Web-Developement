import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Person from './Person';
import Button from './Button';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import List from './List';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header title="React Web Page"></Header>
    <Person name="Sanjay Choudhary" age="21"></Person>
    <Person name="Rahul Choudhary" age="19"></Person>
    <Button text="Click me" onClick={() => console.log("Button Clicked")} />
    <List items={["HTML", "CSS", "JS", "React", "Nodejs", "Expressjs"]}></List>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
