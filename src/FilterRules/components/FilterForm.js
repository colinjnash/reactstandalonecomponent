import React, { Component } from 'react';
import Operators from './Operators';


const formCss = {
width: '35%',
padding: '10px',
margin: '10px',
display: 'inline-block',
outline:'none'
};

class FilterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//Can eventually make a helper function to iterate so any changes will be updated
			attributes: [
				{ filter: 'Rental Left',
					dataType: 'number',
					units: 'days',
				},
				{
					filter: 'Turn Back Milage',
					dataType: 'number',
					units: 'kilometers',
				},
				{
					filter: 'Agreement',
					dataType: 'date',
					units: null,
				},
				{
					filter: 'Model',
					dataType: 'string',
					units: null,
				},
				{
					filter: 'Vehicle Maintenance Needed',
					dataType: 'boolean',
					units: null,
				}
			],
			value: 'Select Attribute',
			selectedDataType: '',
			selectedUnits: '',
			condition: ''
		};
	}

filterType = (value) => {
	const filteredData = this.state.attributes.filter((obj) => {
	if (obj.filter == value) {
		this.setState({
	selectedDataType: obj.dataType,
	selectedUnits: obj.units,
			})
		}
	});
}
//Handle Functions
//Need a reset condition for handleValue change
handleValue = (event) => {
	let value = event.target.value
	console.log(event.target.name)
this.setState({value});
this.filterType(value);
this.handleCondition(event);
//Reset condition not reflecting in Operators select
}

handleCondition = (event) => {
	let name = event.target.name
	let condition = event.target.value
	if (name == 'condition') {
	this.setState({condition});
	} else {
		this.setState({condition: ''})
	}
}


	//Line 83: Need a more elegant solution for Default Attribute.
	//Line 94: Once Again for Testing Purposes Only to make sure the data is populated in the parent state
	render() {
		return (
			<span>
				<form style={formCss}>
					<select name="attribute" value={this.state.value} onChange={this.handleValue}>	
						<option value="Select Attribute" disabled>Select Attribute</option>
						{(this.state.attributes).map((att,i) => <option key={i} 
							value={att.filter}>{att.filter}</option>)}
					</select>
				</form>
				<Operators 
					value={this.state.value}
					dataType={this.state.selectedDataType}
					units ={this.state.selectedUnits}
					handleCondition={this.handleCondition}
				/>
				<p>{this.state.selectedDataType}</p>
				<p>{this.state.selectedUnits}</p>
				<p>{this.state.condition}</p>
			</span>
		);
	}	
}

export default FilterForm;

// Only for Reference Purposes

// | Attribute                  | Data Type |  Units     |
// |----------------------------|-----------|------------|
// | Rental Left                | number    | days       |
// | Turn Back Milage           | number    | kilometers |
// | Agreement                  | date      |            |
// | Model                      | string    |            |
// | Vehicle Maintenance Needed | boolean   |            ||