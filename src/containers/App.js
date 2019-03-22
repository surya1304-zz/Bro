import React, { Component } from 'react'
import SearchBox from '../components/Searchbox';
import CardList from "../components/CardList";
import Scroll from '../components/Scroll';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: '',
        };

        console.log('check1');
    };

    componentDidMount() {
        console.log('check2');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users=> {this.setState({robots: users})});
    }

    onSearchChange = (event) =>{
        this.setState({searchfield : event.target.value});
    };

    render() {
        const { robots, searchfield } = this.state;
        console.log('check3');
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        if(!robots.length)
        {
            return <h1>Robots are loading!</h1>
        }
        return (
            <div className='tc'>
                <h1 className='f1 hello'>Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    };
}

export default App;
