import React, { Component } from 'react';
import Operators from './Operators';
import InputTypes from './InputTypes';
import FilterString from './FilterString';

import styled, { css } from 'styled-components';
import { Img, Form, Title, 
	AttSelectSpan, ContainerWrapper, Chevron,
	FormWrapper, Dropdown, DropContainer, 
	DropdownList, SearchInput } from './css/Styles';

import { attributeList } from './Attributes';
import { dayArr, kmArr } from './InputArrays';
import { Models } from './Models.js';

class FilterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			attList: false,
			conditionList: false,
			inputTypeList: false,
			value: '',
			selectedDataType: '',
			selectedUnits: 'days',
			condition: '',
			inputValue: '',
			filter: [],
			attArray: attributeList,
			filteredAtts: attributeList,
			inputArray: dayArr,
			filteredInputs: dayArr
		};
	}

filterType = (value) => {
	attributeList.filter((obj) => {
		if (obj.filter == value) {
			this.setState({
				selectedDataType: obj.dataType,
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
	if (value == 'Turn Back Milage') {
		this.setState({value: value,
			condition: '', 
			selectedDataType: '',
			selectedUnits: 'km',
			inputArray: kmArr,
			filteredInputs: kmArr,
			inputValue: ''}, () => this.filterType(value));
	} else if (value == 'Model') {
		this.setState({value: value,
			condition: '', 
			selectedDataType: '',
			selectedUnits: '',
			inputArray: Models,
			filteredInputs: Models,
			inputValue: ''}, () => this.filterType(value));
	}	else	{
		this.setState({value: value,
			condition: '', 
			selectedDataType: '',
			inputValue: ''}, () => this.filterType(value));
	}
}

handleCondition = (event) => {
	let condition = event.currentTarget.title;
	const conditionCheck = () => {
		if (condition == 'is unknown' || condition == 'has any value' 
			|| condition == 'is true' || condition == 'is false') {
			this.setState({selectedUnits: ''}, () => this.submitFilter());
		} 	else if (this.state.value == 'Agreement') {
			if (this.state.condition == 'after' || this.state.condition  ==  'on' || this.state.condition == 'before') {
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
		selectedUnits: 'days',
		condition: '',
		inputValue: '',
		inputArray: dayArr,
		filteredInputs: dayArr,
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
	this.setState({attList: true});
}
toggleCondition = (e) => {
	e.preventDefault();
	this.setState({conditionList: true});
}

toggleInput = (e) => {
	e.preventDefault();
	this.setState({inputTypeList: true});
}

renderAttribute = (arr) => {
	return (
		arr.map((att,i) => <DropdownList key={i} 
			onClick={this.handleValue} title={att.filter}>{att.filter}</DropdownList>)
	);
}

searchAttributes = (event) => {
	let List = this.state.attArray;
	let updatedList = List.filter((item) => {
		return item.filter.toLowerCase().search(
			event.target.value.toLowerCase()) !== -1;
	});
	this.setState({filteredAtts: updatedList});
}
searchInputs = (event) => {
	let List = this.state.inputArray;
	let updatedList = List.filter((item) => {
		return item.toString().toLowerCase().search(
			event.target.value.toLowerCase()) !== -1;
	});
	this.setState({filteredInputs: updatedList});
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
					<AttSelectSpan 
						onClick={this.toggleAtt}
						value={this.state.value}
					>
						{this.state.value == '' ? 'Select Attribute' : this.state.value}</AttSelectSpan>
					<Chevron onClick={this.toggleAtt}>&#8964;</Chevron>
					<Dropdown
						attList={this.state.attList}
					>					
						<DropdownList><SearchInput placeholder="&#8981;" type='text' onChange={this.searchAttributes}/></DropdownList>
						{this.renderAttribute(this.state.filteredAtts)}
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
					filteredInputs={this.state.filteredInputs}
					dataType={this.state.selectedDataType}
					inputValue={this.state.inputValue}
					condition={this.state.condition}
					handleInputValue={this.handleInputValue}
					selectedUnits ={this.state.selectedUnits}
					toggleInput={this.toggleInput}
					inputTypeList={this.state.inputTypeList}
					searchInputs={this.searchInputs}
				/>
			</Form>
		</ContainerWrapper>
	);
}	
}

export default FilterForm;
