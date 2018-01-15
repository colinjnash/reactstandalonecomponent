import React, { Component } from 'react';
import Operators from './Operators';
import InputTypes from './InputTypes';
import FilterString from './FilterString';

import styled, { css } from 'styled-components';
import { Form, Span } from './css/Styles';
import { attributeList } from './Attributes';


class FilterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			selectedDataType: '',
			selectedUnits: '',
			condition: '',
			inputValue: '',
			filter: []
		};
	}

filterType = (value) => {
	attributeList.filter((obj) => {
		if (obj.filter == value) {
			this.setState({
				selectedDataType: obj.dataType,
				selectedUnits: obj.units,
			});
		}
	});
}
// ================================================
//Event Handlers
//=================================================


handleValue = () => {
	let value = this.refs.attribute.value;
	this.setState({value: value,
		condition: '', 
		selectedDataType: '',
		inputValue: ''}, () => this.filterType(value));
}

handleCondition = (event) => {
	let condition = event.target.value;
	const conditionCheck = () => {
		if (condition == 'is unknown' || condition == 'has any value' 
			|| condition == 'is true' || condition == 'is false') {
			this.setState({selectedUnits: ''}, () => this.submitFilter());
		} 	else if (this.state.value == 'Agreement') {
			if (this.state.condition == 'more than' || this.state.condition  ==  'less than' || this.state.condition == 'exactly') {
				this.setState({selectedUnits: 'days'});
			} else {
				this.setState({selectedUnits: ''});
			}
		}
	};
	this.setState({condition},() => conditionCheck());
}

handleInputValue = (event) => {
	let value = event.target.value;
	this.setState({inputValue: value}, () => this.submitFilter());
}

// ================================================
//Form Filter Event Handlers
//=================================================

submitFilter = () => {
	let filter = this.state.filter.slice();
	let newArr = [];
	let newFilter = {
		value: this.state.value,
		condition: this.state.condition, 
		inputValue: this.state.inputValue, 
		selectedUnits:this.state.selectedUnits
	};
	newArr.push(newFilter);
	this.setState({filter:[...filter, ...newArr]}, () => this.clearForm());
}


clearForm = () => {
	this.setState({
		value: '',
		selectedDataType: '',
		selectedUnits: '',
		condition: '',
		inputValue: '',
	});
}

deleteFilter = (event, index) => {
	this.setState({
		filter: this.state.filter.filter((_, i) => i !== index)
	});

}

	//Line 83: Need a more elegant solution for Default Attribute.
	//Line 94: Once Again for Testing Purposes Only to make sure the data is populated in the parent state
render() {
	return (
		<div>
			<FilterString
				filter={this.state.filter}
				deleteFilter={this.deleteFilter}
			/>
			<span>
				<Form>
					<select ref='attribute' value={this.state.value == '' ? 'Select Attribute' : this.state.value} onChange={this.handleValue}>	
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