import React from 'react';
import styled, { css } from 'styled-components';
import { Div , Button, Li } from './css/Styles';



const FilterString = (props) => {
	let filterArr = props.filter;

	const renderFilter = () => {
		return filterArr.map((item, i) => <Li key={i}>
			{item.value} {item.condition} <strong>{item.inputValue} {item.selectedUnits}</strong>
			<Button onClick={(e) => props.deleteFilter(e,i)}>X</Button></Li>);
	};

	return (
		<Div>
			<ul>
				{renderFilter()}
			</ul>
		</Div>
	);
};

export default FilterString;