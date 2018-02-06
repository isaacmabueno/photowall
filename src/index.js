// importing the React library such that we are given access to this libraries methods from this variable "react"
import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Take out the trash!', 'Walk the dog', 'Clean the apartment', 'Read Bible', 'Don\'t be a total douche','Keep Honor Alive', 'Hang out with Annie', 'Learn ReactJS'];

// const element = React.createElement('ol', null,
// tasks.map((task, index) => React.createElement('li', {key: index}, task))
// );

// USING JSX SYNTAX
const element =
<div>
    <h1> Task List </h1>
    <ul>
        {tasks.map((task, index) => <li key = {index}>{task}</li>)}
    </ul>
</div>
ReactDOM.render(element, document.getElementById('root'));
