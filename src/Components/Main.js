import React, {Component} from 'react'
import List from './List'
import Title from './Title'

class Main extends Component {
    render() {
        return (
            <div>
                <Title title= {'ToDo\'s List'}/>
                <List tasks= {['test', 'testtwo']}/>
                <List tasks= {['Bring in the trash from the alley!', 'get a haircut']}/>
            </div>
        )
    }
}

export default Main
