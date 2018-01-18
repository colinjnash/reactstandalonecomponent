import React, { Component } from 'react';
import FilterForm from './components/FilterForm';



export default class App extends Component {

//Will have to update defaults when rendering second filter list
//Current idea is to pass event as a boolean check to populate the next 
//boxes and then save all to a parent state to populate the filters


	render() {
		return (
			<div>
				<FilterForm 
				/>
			</div>
		);
	}
}


