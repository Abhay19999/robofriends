import React,{ Component } from 'react';
import {robots} from './robots';  
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends Component {
	constructor(){
		super()
		this.state={
			robots: robots,
			searchfield:''
		}
	}
	
	
	onsearchChange = (event) =>{
		this.setState({ searchfield: event.target.value })
	}
	render(){
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); 
		})
		return(
		<div className='tc'>
		<h1>RoboFriends</h1>
		<SearchBox searchChange={this.onsearchChange} />
		<Scroll>
		<CardList robots={filteredRobots}/>
		</Scroll>
		</div>
		);
}
}
export default App;