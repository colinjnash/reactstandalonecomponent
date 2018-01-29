###REACT STANDALONE COMPONENT EXAMPLE


To install, simply clone the repo from above, then run `npm install` to install all dependencies.

to run, use the command `npm start`, to initiate the webpack dev server.


###PERSONAL NOTES

My React was a little rusty, but this was a great project to work on.

Initial mistakes were using the `<select>` option, and realized that styling was impossible.

From there, design was a little simpler. Styled Components were a treat, as it was my first time using them. They were especially useful for conditional rendering of elements.

The code for the FilterForm can definitely be more functional. I unfortunately should have started clean when I realized my mistake, and had flawed implementation logic when beginning the program. The static assets could have had more objects to pare down the `if else` statements and `case` statements used throughout.

I still decided to keep my project in a form, and I'm weak on procedure for saving state, since on refresh the state resets. Reading up on lifecycle components would help immensely.

As for serving to the backend, I'm currently researching ideas about this.

Styling is showing a big weakness, as my CSS could also be refactored. I'm still stuck in the CSS I learned over a decade ago. Further adjustments should be to make it responsive and layout friendly to IPAD and mobile screens with the `@media` query. 

###UPDATES

SVG assets loaded. Media queries are now fixed for screens less than `980 px`. The form dropdowns will now display as block elements to keep styling intact.
Can't figure out how to remove assets from date picker. Tried the `::after` element on the `date-picker-indicator`, but was only able to remove the arrow and not replace with `icomoon` icons.







