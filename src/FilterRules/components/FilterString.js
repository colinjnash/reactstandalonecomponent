import React from 'react';
import styled, { css } from 'styled-components';

const Div = styled.div`
background-color: rgb(123, 187, 237);
width: 50%;
`;


const FilterString = (props) => {
	let units     = props.selectedUnits;
	let value 		= props.value;
	let condition = props.condition;
	let data 			= props.dataType;
	let inputValue = props.inputValue;
	return (
		<Div>{
			`${value} 
			${condition} 
			${inputValue}
			${units}`}
		</Div>
	);
};

export default FilterString;