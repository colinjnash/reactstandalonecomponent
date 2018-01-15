import React from 'react';
import { StringType, DateType, NumberType, BooleanType } from './OperatorTypes';
import styled, { css } from 'styled-components';

import { Form, Span } from './css/Styles';


const Operators = (props) => {
	let value = props.value;

	const renderOperator = (arr) => {
		return (
			<Span>
				<select value={props.condition == '' ? 'Select Condition' : props.condition} onChange={props.handleCondition}>
					{arr.map((item,i) => <option key={i} value={item.filter}>{item.filter}</option>)}
				</select>
			</Span>
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