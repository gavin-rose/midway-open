Thank you for taking the time to look at my submission! 

I created two slightly different versions of this webpage.
This is the 'open' version that does not rely on function parameters to send through a conversion.

The 'strict' version can be found here:
https://github.com/gavin-rose/midway-strict

-- STEPS --
1. Download and/or clone this repository
2. Open a terminal in the project's root directory
3. In the terminal, type npm test
4. If the webpage does not automatically open, go to http://localhost:3000
5. Once you are at http://localhost:3000, enter in values for Hours and Minutes
6. Click convert and watch the webpage output the time converted into words!

-- NOTES --
I decided to do a very barebones application just to show that I understand how raw HTML, CSS, and JS work. I opted to only use one library (express) for this webpage to further show my knowledge.
It is worth mentioning that there were a couple of different ways I could think of to tackle this project. The highest minute text that will ever be used is twenty-nine, so I thought it less confusing to make an array with 29 elements rather than split the number values into ones, tens, etc. as tens would only have two elements.
Minimal CSS was used in this project simply due to the fact that I wanted to focus more on the funcionality than the styling for this prompt.
In the HTML file, onLoad is used in the body tag to ensure that variables are assigned values after all elements have finished loading.