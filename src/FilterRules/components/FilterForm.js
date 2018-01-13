import React, { Component } from 'react';
import Operators from './Operators';
import InputTypes from './InputTypes';
import FilterString from './FilterString';
import styled, { css } from 'styled-components';

const Form = styled.form`
padding: 5px;
margin: 20px 15px;
display: inline-block;
outline: none;
`;

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
					units: ''
				},
				{
					filter: 'Model',
					dataType: 'string',
					units: ''
				},
				{
					filter: 'Vehicle Maintenance Needed',
					dataType: 'boolean',
					units:''
				}
			],
			value: 'Select Attribute',
			selectedDataType: '',
			selectedUnits: '',
			condition: '',
			inputValue: ''
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
	let value = this.refs.attribute.value
this.setState({value: value, condition: '', selectedDataType: ''});
this.filterType(value);

//Reset condition not reflecting in Operators select
}

handleCondition = (event) => {
	let name = event.target.name
	console.log(event.target.name);
	let condition = event.target.value
	this.setState({condition});
	if ((this.state.condition == 'more than' || 'exactly' || 'less than') 
		&& (this.state.value == 'Agreement')) {
		this.setState({selectedUnits: 'days'})
	}
}

handleInputValue = (event) => {
	let value = event.target.value
	console.log(event.target.value);
this.setState({inputValue: value});

}


	//Line 83: Need a more elegant solution for Default Attribute.
	//Line 94: Once Again for Testing Purposes Only to make sure the data is populated in the parent state
	render() {
		return (
			<div>
			<FilterString
				value={this.state.value}
				dataType={this.state.selectedDataType}
				selectedUnits ={this.state.selectedUnits}
				condition={this.state.condition}
				inputValue={this.state.inputValue}
				handleInputValue={this.handleInputValue}
			/>
			<span>
				<Form>
					<select ref='attribute' value={this.state.value} onChange={this.handleValue}>	
						<option value="Select Attribute" disabled>Select Attribute</option>
						{(this.state.attributes).map((att,i) => <option key={i} 
							value={att.filter}>{att.filter}</option>)}
					</select>
				<Operators 
					value={this.state.value}
					dataType={this.state.selectedDataType}
					selectedUnits ={this.state.selectedUnits}
					handleCondition={this.handleCondition}
				/>
				<InputTypes
				value={this.state.value}
				condition={this.state.condition}
				dataType={this.state.selectedDataType}
				inputValue={this.state.inputValue}
				handleInputValue={this.handleInputValue}
				selectedUnits ={this.state.selectedUnits}
				/>
				</Form>
			</span>
			</div>
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