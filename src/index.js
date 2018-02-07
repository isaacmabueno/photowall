// importing the React library such that we are given access to this libraries methods from this variable "react"
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// const tasks = ['Take out the trash!', 'Walk the dog', 'Clean the apartment', 'Read Bible', 'Don\'t be a total douche','Keep Honor Alive', 'Hang out with Annie', 'Learn ReactJS'];

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
            <h1>{this.props.title}</h1>
        )
    }
}

class Paragraph extends Component {
    render() {
        return(
            <p>{this.props.paragraph}</p>
        )
    }
}


class TasksLoop extends Component {
    render() {
        return(
            <ul>{this.props.tasks.map((task, index) => <li key = {index}>{task}</li>)}</ul>

        )
    }
}

class Main extends Component {
    render() {
        return (
            <div>
                <Title title = {'ToDo\'s List'}/>
                <Paragraph paragraph = {'this is a new paragraph using the props '}/>
                <TasksLoop tasks = {['test', 'testtwo']}/>
                <TasksLoop tasks = {['Bring in the trash from the alley!', 'get a haircut']}/>
            </div>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementById('root'));
