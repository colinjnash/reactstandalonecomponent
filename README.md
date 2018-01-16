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


###FILTER RULE

To install, simply clone the repo from above, then run `npm install` to install all dependencies.

to run, use the command `npm start`, to initiate the webpack dev server.


###PERSONAL NOTES

My React was a little rusty, but this was a great project to work on.

Initial mistakes were using the `<select>` option, and realized that styling was impossible.

From there, design was a little simpler. Styled Components were a treat, as it was my first time using them. They were especially useful for conditional rendering of elements.

The code for the FilterForm can definitely be more functional. I unfortunately should have started clean when I realized my mistake, and had flawed implementation logic when beginning the program. The static assets could have had more objects to pare down the `if else` statements and `case` statements used throughout.

I still decided to keep my project in a form, and I'm weak on procedure for saving state, since on refresh the state resets. Reading up on lifecycle components would help immensely.

As for serving to the backend, I'm currently researching ideas about this.

Styling is showing a big weakness, as my CSS could also be refactored. I'm still stuck in the CSS I learned over a decade ago. Further adjustments should be to make it responsive and layout friendly to IPAD and mobile screens with the `@media` query. Currently if the display size is less than `960px` in length there is trouble with the input dropdown bars. I can definitely add more functionality here.






