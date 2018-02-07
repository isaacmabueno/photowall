// importing the React library such that we are given access to this libraries methods from this variable "react"
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Take out the trash!', 'Walk the dog', 'Clean the apartment', 'Read Bible', 'Don\'t be a total douche','Keep Honor Alive', 'Hang out with Annie', 'Learn ReactJS'];

// const element = React.createElement('ol', null,
// tasks.map((task, index) => React.createElement('li', {key: index}, task))
// );

// USING JSX SYNTAX
// const element =
// <div>
//     <h1> Task List </h1>
//     <ul>
//         {tasks.map((task, index) => <li key = {index}>{task}</li>)}
//     </ul>
// </div>
// ReactDOM.render(element, document.getElementById('root'));


// class List extends Component {
//     render() {
//     return (
//         <ul>
//             {tasks.map((task, index) => <li key = {index}>{task}</li>)}
//         </ul>
//
//         )
//     }
// }
//
// class Title extends Component {
//     render() {
//         return(<h1>Task List</h1>)
//     }
// }
//
//
// class Main extends Component {
//     render() {
//         return(
//             <div>
//                 <Title/>
//                 <List/>
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(<Main/>, document.getElementById('root'));



class Title extends Component {
    render() {
        return(
            <h1>THIS IS THE TITLE</h1>
        )
    }
}

class Paragraph extends Component {
    render() {
        return(
            <p>here is my task list</p>
        )
    }
}


class TasksLoop extends Component {
    render() {
        return(
            tasks.map((task, index) => <li key = {index}>{task}</li>)
        )
    }
}

class Main extends Component {
    render() {
        return (
            <div>
                <Title/>
                <Paragraph/>
                <TasksLoop/>
            </div>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementById('root'));
