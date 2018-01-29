import styled, { css } from 'styled-components';




export const Title = styled.div`
display: flex;
color: grey;
align-items: center;
filter: opacity(80%);
font-size: .6em;
`;

export const ContainerWrapper = styled.div`
font-family: 'Open Sans', sans-serif;
margin: 5%; 
`;

export const FormWrapper = styled.div`
margin-top: 10px;
`;

export const FilterWrapper= styled.div`
font-size: .6 em;
display: block;
`;


export const DropContainer = styled.div`
margin: 10px 40px 0 0;
min-height: 20px;
width: 250px;
box-shadow: 0px 0px 4px 0px rgba(100, 100, 100, 0.2);
border: 1px solid #bbb;
display: inline-block;
@media (max-width: 980px) {
    display: block;
    margin-bottom: 20px;
}
font-size: .7em;
padding: 2px;

`;

export const Form = styled.form`
margin-left: 10px;
display: flex;
@media (max-width: 980px) {
    display: block;
}
justify-content: flex-start;
outline: none;
margin-left: 0px;
`;

export const Chevron = styled.button`
  outline: none;
  background: none;
  position: relative;
  display: inline;
  border: none;
  padding-left: 15px;
  text-align: right;
  font-weight: 50;
  font-size: 10px;
  display:inline;

  &:before {font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: 100;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  content: '\\e907';
}
`;

export const Button = styled.button`
outline: none;
background: none;
border: none;
font-weight: 800;
margin: 0 5px;
height: 6px;
margin-left: 25px;
font-size: 10px;

&:before {font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: 800;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  content: '\\e90d';
}
`;

export const Img = styled.img`
max-height:24px;
max-width:24px;
margin-right: 10px;
`;

export const AttSelectSpan = styled.span`
color: grey;
${props => props.value !== '' && css `
	color:black;
	`};
display: inline-block;
width: 200px;
text-align: left;
padding: 5px 0;
margin-left: 5px;
`;

export const OpSelectSpan = styled.span`
color: grey;
${props => props.condition !== '' && css `
	color:black;
	`};
display: inline-block;
width: 200px;
text-align: left;
padding: 5px 0;
margin-left: 5px;
`;

export const InputSelectSpan = styled.span`
color: grey;
${props => props.inputValue !== '' && css `
	color:black;
	`};
display: inline-block;
width: 200px;
text-align: left;
padding: 5px 0;
margin-left: 5px;
`;

export const ListSpan = styled.span`
display: inline-block;
background-color: #d2e2fc;
padding: 7px;
margin: 5px 0;
`;




export const FilterList = styled.ul`
list-style-type: none;
width: auto;
font-size: .7em;
padding: 0px;
`;

export const Dropdown = styled.ul`
   display: none;
${props => props.attList && css `
	display:block;
	`};
   list-style: none;
   position: absolute;
   background-color: #f9f9f9;
   width: 250px;
   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);
   z-index: 1;
   margin-top: 25px;
   padding: 4px 0;
`;

export const OperatorDropdown = styled.ul`
   display: none;
${props => props.conditionList && css `
	display:block;
	`};
   list-style: none;
   position: absolute;
   background-color: #f9f9f9;
   width: 250px;
   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);
   z-index: 1;
   margin-top: 25px;
   padding: 4px 0;
`;

export const InputDropdown = styled.ul`
   display: none;
${props => props.inputTypeList && css `
	display:block;
	`};
   list-style: none;
   position: absolute;
   background-color: #f9f9f9;
   width: 250px;
   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);
   z-index: 1;
   margin-top: 25px;
   padding: 4px 0;
`;


export const DropdownList = styled.li`
&:hover {
	background-color: rgba(210,226,252,.8);
	}
  color: black;
  text-decoration: none;
  display: block;
  width: auto;
  padding: 5px 0;
  margin: 10px 0;
  padding-left: 15px;
  line-height: 1.2em;
`;


export const Li = styled.li`
padding: 0px;
`;

export const DatePicker = styled.input`
  margin: 10px 40px 0 0;
  @media (max-width: 980px) {
 margin: 0px;
}
  height: 31px;
  width: 254px;
  box-shadow: 0px 0px 4px 0px rgba(100, 100, 100, 0.2);
  border: 1px solid #bbb;
  display: inline-block;
  font-size: 1em;
  text-align: center;
  ::-webkit-inner-spin-button { display: none; }
  ::-webkit-calendar-picker-indicator {
  margin-right: 10px;
  background-color: none;
}
`;

export const SearchInput = styled.input`
  padding-top: 7px;
  width: 210px;
  height: 1.5em;
  line-height: 2em;
  &::placeholder {
      font-family: 'icomoon';
  	font-size:16px;
  	text-indent: 8px;
    padding-top: 4px; }
`;