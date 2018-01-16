import React, { Component } from 'react';
import Operators from './Operators';
import InputTypes from './InputTypes';
import FilterString from './FilterString';

import styled, { css } from 'styled-components';
import { Img, Form, Title, 
	SelectSpan, ContainerWrapper, Chevron,
	FormWrapper, Dropdown, DropContainer, 
	DropdownList } from './css/Styles';
import { attributeList } from './Attributes';


class FilterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			attList: false,
			conditionList: false,
			inputTypeList: false,
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
				attList: !this.state.attList
			});
		}
	});
}
// ================================================
//Event Handlers
//=================================================


handleValue = (event) => {
	let value = event.currentTarget.title;
	this.setState({value: value,
		condition: '', 
		selectedDataType: '',
		inputValue: ''}, () => this.filterType(value));
}

handleCondition = (event) => {
	let condition = event.currentTarget.title;
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
	this.setState({condition:condition, conditionList:!this.state.conditionList },() => conditionCheck());
}

handleInputValue = (event) => {
	let value = event.target.value || event.currentTarget.title;
	this.setState({inputValue: value, inputTypeList: !this.state.inputTypeList}, () => this.submitFilter());
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
		attList: false,
		conditionList: false,
		InputTypeList: false
	});
}

deleteFilter = (event, index) => {
	this.setState({
		filter: this.state.filter.filter((_, i) => i !== index)
	});

}
// ================================================
//Toggle Operators
//=================================================
toggleAtt = (e) => {
	e.preventDefault();
	console.log('clicked');
	this.setState({attList: true});
}
toggleCondition = (e) => {
	e.preventDefault();
	console.log('condition clicked');
	this.setState({conditionList: true});
}

toggleInput = (e) => {
	e.preventDefault();
	console.log('input clicked');
	this.setState({inputTypeList: true});
}

renderAttribute = () => {
	return attributeList.map((att,i) => <DropdownList key={i} 
		onClick={this.handleValue} title={att.filter}>{att.filter}</DropdownList>)
}

render() {
	return (
		<ContainerWrapper>
			<Title>
				<Img src={require('./img/3_circle1.png')} alt="Number 3 with circle"/>
				ADD ATTRIBUTES
			</Title>
			<FilterString
				filter={this.state.filter}
				deleteFilter={this.deleteFilter}
			/>
			<Form>
				<DropContainer>
					<SelectSpan onClick={this.toggleAtt}>{this.state.value == '' ? 'Select Attribute' : this.state.value}</SelectSpan>
					<Chevron onClick={this.toggleAtt}>&#8964;</Chevron>
					<Dropdown
						attList={this.state.attList}
					>					
						{this.renderAttribute()}
					</Dropdown>
				</DropContainer>
				<Operators 
					value={this.state.value}
					condition={this.state.condition}
					conditionList={this.state.conditionList}
					handleCondition={this.handleCondition}
					toggleCondition={this.toggleCondition}

				/>
				<InputTypes
					value={this.state.value}
					dataType={this.state.selectedDataType}
					inputValue={this.state.inputValue}
					condition={this.state.condition}
					handleInputValue={this.handleInputValue}
					selectedUnits ={this.state.selectedUnits}
					toggleInput={this.toggleInput}
					inputTypeList={this.state.inputTypeList}
				/>
			</Form>
		</ContainerWrapper>
	);
}	
}

export default FilterForm;
