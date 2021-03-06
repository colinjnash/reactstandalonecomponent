import React from 'react';
import { StringType, DateType, NumberType, BooleanType } from './Static/OperatorTypes';
import styled, { css } from 'styled-components';

import { Form, OpSelectSpan, Chevron, 
	DropContainer, OperatorDropdown, DropdownList } from './css/Styles';


const Operators = (props) => {
	let value = props.value;
	let condition = props.condition;

	const renderOperator = (arr) => {
		return (
			<DropContainer>
				<OpSelectSpan 
					condition ={props.condition}
					onClick={props.toggleCondition}>{condition == '' ? 'Select a Condition' : condition}</OpSelectSpan>
				<Chevron onClick={props.toggleCondition}></Chevron>
				<OperatorDropdown
					conditionList={props.conditionList}
				>
					{arr.map((item,i) => <DropdownList key={i} onClick={props.handleCondition} title={item.filter}>{item.filter}</DropdownList>)}
				</OperatorDropdown>
			</DropContainer>
	
		);
	};

	switch(value) {
	case 'Select Attribute':
		return null;
	case 'Rental Left':
		return (
			renderOperator(NumberType)
		);
	case 'Turn Back Milage':
		return (
			renderOperator(NumberType)
		);
	case 'Agreement':
		return (
			renderOperator(DateType)
		);
	case 'Model':
		return (
			renderOperator(StringType)
		);
	case 'Vehicle Maintenance Needed':
		return (
			renderOperator(BooleanType)
		);
	default:
		return null;
	}
};

export default Operators;