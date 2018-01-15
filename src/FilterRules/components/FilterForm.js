import React, { Component } from 'react';
import Operators from './Operators';
import InputTypes from './InputTypes';
import FilterString from './FilterString';

import styled, { css } from 'styled-components';
import { attributeList } from './Attributes'

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
			value: 'Select Attribute',
			selectedDataType: '',
			selectedUnits: '',
			condition: '',
			inputValue: '',
			filter: []
		};
	}

filterType = (value) => {
	const filteredData = attributeList.filter((obj) => {
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
this.setState({value: value,
 condition: '', 
 selectedDataType: '',
 inputValue: ''}, () => this.filterType(value));
}

//TO DO: This must be reduced. This will need more work as handleCondition will bloat.
handleCondition = (event) => {		
	let name = event.target.name
	let condition = event.target.value
			this.setState({condition}, () => {
				if (this.state.value == 'Agreement') {
			if (this.state.condition == 'more than' || this.state.condition  ==  'less than' || this.state.condition == 'exactly') {
				this.setState({selectedUnits: 'days'});
			} else {
				console.log("Reset State");
				this.setState({selectedUnits: ''});
			} 
		}
	});
	
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
						{attributeList.map((att,i) => <option key={i} 
							value={att.filter}>{att.filter}</option>)}
					</select>
				<Operators 
					value={this.state.value}
					dataType={this.state.selectedDataType}
					condition={this.state.condition}
					selectedUnits ={this.state.selectedUnits}
					handleCondition={this.handleCondition}
				/>
				<InputTypes
				value={this.state.value}
				dataType={this.state.selectedDataType}
				inputValue={this.state.inputValue}
				condition={this.state.condition}
				handleInputValue={this.handleInputValue}
				selectedUnits ={this.state.selectedUnits}
				/>
				<button>Submit</button>
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