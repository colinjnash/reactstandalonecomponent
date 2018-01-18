import React from 'react';
import styled, { css } from 'styled-components';
import { Div , ListSpan,
 Button, Li, FilterWrapper, FilterList, ContainerWrapper } from './css/Styles';



const FilterString = (props) => {
	let filterArr = props.filter;

	const renderFilter = () => {
		return filterArr.map((item, i) => <Li key={i}>
			<ListSpan>
				{item.value} {item.condition} <strong>{item.inputValue} {item.selectedUnits}</strong>
				<Button onClick={(e) => props.deleteFilter(e,i)}></Button>
			</ListSpan>
		</Li>);
	};

	return (
		<FilterWrapper>
			<FilterList>
				{renderFilter()}
			</FilterList>
		</FilterWrapper>
	);
};

export default FilterString;