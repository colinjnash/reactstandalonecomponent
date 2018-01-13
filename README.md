### Overview

You are tasked with building a component that allows a user to build filter
rules. It is part of a larger form used to define Email/SMS Marketing
Campaigns. See the included PDF for the visual design, it shows the components
in its various interaction states. Treat the assignment as if you were writing
the component to  be included within the teams larger component library.

In addition to the presentational aspect, the application also needs to encode
these rules is a way that is suitable to send to the backend for processing.
You can write these out to `console.log` everytime a new filter is
added or removed.

We haven't listed all the implementation details here, so go ahead and use your
own judgement as to what is good user experience and good application design.
That said, if anything is really unclear feel free to ask.


### Technical Constraints

Source code should be in ES6 or above, using React with JSX.

Styles should be written as Styled Components.

The component must work in the lastest Chrome version.

For some filter scenarios the user will have to select a date. You can use the native Chrome date picker for this.


### What to Include

At a minimum your repo should include an `index.html` file that, when opened in
a browser, shows the component and allows interaction. Also include all your
un-transpiled source files. Also include a markdown file with any notes you have on your implementation. Whatever else you include is up to you.


### Resources

Here are all the selectable attributes – __ignore the list in the mockup:__

| Attribute                  | Data Type |  Units     |
|----------------------------|-----------|------------|
| Rental Left                | number    | days       |
| Turn Back Milage           | number    | kilometers |
| Agreement                  | date      |            |
| Model                      | string    |            |
| Vehicle Maintenance Needed | boolean   |            ||


Here are the corresponding operators:

| Customer/vehicle attribute | Operator         | Input Type  |
|----------------------------|------------------|-------------|
| string                     | is               | string      |
|                            | is not           | string      |
|                            | starts with      | string      |
|                            | ends with        | string      |
|                            | contains         | string      |
|                            | does not contain | string      |
|                            | is unknown       |             |
|                            | has any value    |             |
|                            |                  |             |
| date                       | more than        | days        |
|                            | exactly          | days        |
|                            | less than        | days        |
|                            | after            | date picker |
|                            | on               | date picker |
|                            | before           | date picker |
|                            | is unknown       |             |
|                            | has any value    |             |
|                            |                  |             |
| number                     | greater than     | number      |
|                            | less than        | number      |
|                            | is               | number      |
|                            | is not           | number      |
|                            | is unknown       | number      |
|                            | has any value    |             |
|                            |                  |             |
| boolean                    | is true          |             |
|                            | is false         |             |
|                            | is unknown       |             |
|                            | has any value    |             ||


Here are the possible vehicle models:

`1-SERIES, 6 SERIES, 640IX N55, ALL 4 COUTRYMAN ZC53, CAMION X1, SANTA FE SPORT,
530XI N52, 328DX N47T, 3 SERIES`


Base Build:

Currently running webpack with Stage1, ES2015, and React with Babel-Loader as the transpiler.

ESLINT rules are set to customized rules, although a switch to the AirBnb linter could be possible.

.gitignore needs to be tested to ensure all bloat is left out.

The goal will be to populate the initial data in state, then pass it on to dropdown menus with a callback saving the requested filters. There will then be a final check before populating the Filter List as seen in the design parameter.

Currently stuck on a bug that will not re-render the list and select default option for the form. It is definitely a problem with the rendering and/or key values, and the setup of state.

Clean up of handle functions also need to be addressed, as they can possibly be refactored into one event handler.

UPDATE
01/12/18

Not much time to work on it today, but the main goals were:

1. To have a dynamic InputValue Field
2. To TypeOf all InputValue fields according to the chart
3. Having the correct inputs for 'Agreement field'
4. Cleaning up callbacks

So far, the callbacks can definitely be refactored, and some code review based on the switch statements are needed. I'm sure there is a more elegant way to render them (possibly enums with [state]), but found this to be the most direct and to gain traction.

FilterString now updates according to the filters added, however no RemoveHandler has been instantiated, and Testing must be done for each attribute and condition.

As for server callbacks, no data has yet been formed for the calls. Hoping to start that tomorrow. They will most likely be sent to state and then put together. I need to check if there will be an OnSUBMIT call, or whether there should be a callback to check if all fields are filled and populate the search accordingly.

ISSUES

1. Resetting the form is still giving me problems. Changing the ValueHandler does not reset the actual dropdown for the Operator or the InputValue. This should become a priority as the UX is currently terrible.
2. Minimal styled components at the moment, but this is mostly to see the functionality in place. Styling can always be applied after, however I'm not sure of Beem Practices in what you prefer.
3. No server side data has been populated. Not sure if this is an issue, but I could see it being a problem if there are other teams waiting on me for testing.

QUESTIONS TO BE ASKED

1. Are the InputTypes currently correct? What are the steps and parameters for them?
2. The Operator comparision for the Condition needs to be populated for backend processing. I will need clarification on what each operator does.
3. Mock Data or backend setup. Will the backend also be node? Will it be served in JSON format?

So far that's all for now. I am showing my inexperience here with the possible design, and any code feedback would be much appreciated.

Cheers,

Colin

