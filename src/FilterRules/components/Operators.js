import React from 'react';
import { StringType, DateType, NumberType, BooleanType } from './OperatorTypes';
import styled, { css } from 'styled-components';

const Span = styled.span`
	margin: 0px 15px;
	display: inline-block;
	outline: none;
`;

const Operators = (props) => {
	let value = props.value;

	switch(value) {
	case 'Select Attribute':
		return null;
	case 'Rental Left':
		return (
			<Span>
				<select value={props.condition == '' ? 'Select Condition' : props.condition} onChange={props.handleCondition}>
					{NumberType.map((item,i) => <option key={i} value={item.filter}>{item.filter}</option>)}
				</select>
			</Span>
		);
	case 'Turn Back Milage':
		return (
			<Span>
				<select value={props.condition == '' ? 'Select Condition' : props.condition} onChange={props.handleCondition}>
					{NumberType.map((item,i) => <option key={i} value={item.filter}>{item.filter}</option>)}
				</select>
			</Span>
		);
	case 'Agreement':
		return (
			<Span>
				<select value={props.condition == '' ? 'Select Condition' : props.condition} onChange={props.handleCondition}>
					{DateType.map((item,i) => <option key={i} value={item.filter}>{item.filter}</option>)}
				</select>
			</Span>
		);
	case 'Model':
		return (
			<Span>
				<select value={props.condition == '' ? 'Select Condition' : props.condition} onChange={props.handleCondition}>
					{StringType.map((item,i) => <option key={i} value={item.filter}>{item.filter}</option>)}
				</select>
			</Span>
		);
	case 'Vehicle Maintenance Needed':
		return (
			<Span>
				<select value={props.condition == '' ? 'Select Condition' : props.condition} onChange={props.handleCondition}>
					{BooleanType.map((item,i) => <option key={i} value={item.filter}>{item.filter}</option>)}
				</select>
			</Span>
		);
	default:
		return null;
	}
};

export default Operators;



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