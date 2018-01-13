import React from 'react';
import styled, { css } from 'styled-components';


const Span = styled.span`
	margin: 0px 15px;
	display: inline-block;
	outline: none;
`;

const InputTypes = (props) => {
	let value 		= props.value;
	let condition = props.condition;
	let data 			= props.dataType;
	let units 		= props.selectedUnits;

	function isKilometers(units) {
		if(units == 'kilometers') {
			return 5000;
		} else {
			return 1;
		}
	}
	switch(data) {

	case 'string':
		return (
			<Span><input type='text' value={props.inputValue} onChange={props.handleInputValue}/>
			</Span>
		);
	case 'date':
		if (units == 'days') {
			return (
				<Span><input type='number'value={props.inputValue} onChange={props.handleInputValue}/></Span>
			);
		} else {
			return (
				<Span><input type='date'value={props.inputValue} onChange={props.handleInputValue}/></Span>
			);
		}
	case 'number':
		return (
			<Span><input type='number' value={props.inputValue} onChange={props.handleInputValue} step={isKilometers(units)}/></Span>
		);
	case 'boolean':
		return null;
	default:
		return null;
	}
};

export default InputTypes;




// Here are the possible vehicle models:

// `1-SERIES, 6 SERIES, 640IX N55, ALL 4 COUTRYMAN ZC53, CAMION X1, SANTA FE SPORT,
// 530XI N52, 328DX N47T, 3 SERIES`
// ### Resources

// Here are all the selectable attributes – __ignore the list in the mockup:__

// | Attribute                  | Data Type |  Units     |
// |----------------------------|-----------|------------|
// | Rental Left                | number    | days       |
// | Turn Back Milage           | number    | kilometers |
// | Agreement                  | date      |            |
// | Model                      | string    |            |
// | Vehicle Maintenance Needed | boolean   |            ||


// Here are the corresponding operators:

// | Customer/vehicle attribute | Operator         | Input Type  |
// |----------------------------|------------------|-------------|
// | string                     | is               | string      |
// |                            | is not           | string      |
// |                            | starts with      | string      |
// |                            | ends with        | string      |
// |                            | contains         | string      |
// |                            | does not contain | string      |
// |                            | is unknown       |             |
// |                            | has any value    |             |
// |                            |                  |             |
// | date                       | more than        | days        |
// |                            | exactly          | days        |
// |                            | less than        | days        |
// |                            | after            | date picker |
// |                            | on               | date picker |
// |                            | before           | date picker |
// |                            | is unknown       |             |
// |                            | has any value    |             |
// |                            |                  |             |
// | number                     | greater than     | number      |
// |                            | less than        | number      |
// |                            | is               | number      |
// |                            | is not           | number      |
// |                            | is unknown       | number      |
// |                            | has any value    |             |
// |                            |                  |             |
// | boolean                    | is true          |             |
// |                            | is false         |             |
// |                            | is unknown       |             |
// |                            | has any value    |             ||