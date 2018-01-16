import React from 'react';
import styled, { css } from 'styled-components';
import { Models } from './Models.js';

import { DropContainer, InputDropdown, Chevron,
	SelectSpan, DropdownList } from './css/Styles';

const InputTypes = (props) => {
	let value 		= props.value;
	let data 			= props.dataType;
	let units 		= props.selectedUnits;
	let condition	=	props.condition;
	let kmArr 		= [];
	let dayArr		= [];

	const kmDataList = (num,km) => {
		if (km < num) {
			kmArr.push(km);
			kmDataList(num, km+=5000);
		} 
		return kmArr;
	};

	const dayDataList =(num,day) => {
		if (day < num) {
			dayArr.push(day);
			dayDataList(num, day+=1);
		} 
		return dayArr;
	};

	const renderArr = (arr) => {
		return (
			arr.map((item,i) => <DropdownList units={units} key={i} 
				title={item} onClick={props.handleInputValue}>{item} {units}</DropdownList>)
		);
	};

	const renderInputType = (arr) => {
		return (
			<DropContainer>
				<SelectSpan onClick={props.toggleInput}>{props.inputValue == '' ? 'Select a type or value' : props.inputValue}
				</SelectSpan>
				<Chevron onClick={props.toggleInput}>&#8964;</Chevron>

				<InputDropdown
					inputTypeList ={props.inputTypeList}
				>
					{renderArr(arr)}
				</InputDropdown>
			</DropContainer>
		);
	};

	if (condition =='' || condition == 'is unknown' || condition == 'has any value') {
		return null;
	}

	switch(data) {
	case 'string':
		return  renderInputType(Models);
	case 'date':
		if (units == 'days') {
			dayDataList(31,0);
			return renderInputType(dayArr);
		} else { return (
			<input type='date' value={props.inputValue} onChange={props.handleInputValue}/>
		);
		}
	case 'number':
		if (units == 'km') {
			kmDataList(50000,0);
			return renderInputType(kmArr);
		} else {
			dayDataList(31,0);
			return renderInputType(dayArr);
		}
	case 'boolean':
		return null;
	default:
		return null;
	}
};

export default InputTypes;