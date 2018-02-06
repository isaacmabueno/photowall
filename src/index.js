// importing the React library such that we are given access to this libraries methods from this variable "react"
import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement('h3', null, 'this is some body text');
ReactDOM.render(element, document.getElementById('inner-inner-root'));
