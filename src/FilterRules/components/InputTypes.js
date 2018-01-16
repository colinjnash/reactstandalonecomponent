import React from 'react';
import styled, { css } from 'styled-components';

import { DropContainer, InputDropdown, Chevron,
	InputSelectSpan, DropdownList, DatePicker, SearchInput } from './css/Styles';

const InputTypes = (props) => {
	let data 			= props.dataType;
	let units 		= props.selectedUnits;
	let condition	=	props.condition;
	let filteredInputs = props.filteredInputs;

	const renderArr = (arr) => {
		return (
			arr.map((item,i) => <DropdownList units={units} key={i} 
				title={item} onClick={props.handleInputValue}>{item} {units}</DropdownList>)
		);
	};

	const renderInputType = (arr) => {
		return (
			<DropContainer>
				<InputSelectSpan
					inputValue={props.inputValue}
					onClick={props.toggleInput}>{props.inputValue == '' ? 'Select a type or value' : props.inputValue}
				</InputSelectSpan>
				<Chevron onClick={props.toggleInput}>&#8964;</Chevron>
				<InputDropdown
					inputTypeList ={props.inputTypeList}
				>
					<DropdownList><SearchInput placeholder="&#8981;" type='text' onChange={props.searchInputs}/></DropdownList>
					{renderArr(arr)}
				</InputDropdown>
			</DropContainer>
		);
	};
	if (condition =='') {
		return null;
	}
	
	switch(data) {
	case 'string':
		return  renderInputType(filteredInputs);
	case 'date':
		if (units == 'days') {
			return renderInputType(filteredInputs);
		} else { 
			return <DatePicker type='date' value={props.inputValue} onChange={props.handleInputValue}/>;
		}
	case 'number':
		return renderInputType(filteredInputs);
	case 'boolean':
		return null;
	default:
		return null;
	}
};

export default InputTypes;