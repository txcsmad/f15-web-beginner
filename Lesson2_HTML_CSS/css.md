# CSS

## Styling the HTML page

* CSS is used for making the HTML look nicer
* Colors, font families, font sizes, backgrounds
* Widths, heights, positions
* Animations, transitions

# Syntax

Syntax looks like this:

* the selector to apply the style for
* the styles to apply inside braces `{..}`
* each line ends with `;`

````css
selector {
  property-name: value;
  ...
  ...
}
````

## CSS selectors

* Picks (one or more) HTML elements to apply the styles specified inside the braces `{ .. }`
* Examples:

*Make all divs on the page have font-size 40px*

````css
div {
  font-size: 40px;
}
````

*Make all list items have a square bullet*

````css
li {
  list-style-type: none;
}
````
*Make all images have max. width of 200px and a blue border*

````css
img {
  max-width: 200px;
  border: 1px solid #069;
}
````

## Being more specific

* What was the issue with the above examples?
  * The styles targetted all the elements of that particular type.
* **Solution:** Target what you want by being more specific

# `id` and `class` keywords

* Useful for picking certain, specific HTML elements 

## How to use `id` and `class`

* Step 1:  In HTML, add the `id` / `class` attribute
* Step 2: In CSS`#` for `id`s, and `.` for `class`es.

Example:

* Add it to the html element

````html
<div>Normal text</div>
<div id="special">This is special text</div>
<div class="great">This is great text</div>
````

* Target with CSS

````css
#special {
  color: red;
}

.great {
  color: green
}
````

## Useful CSS properties

* color
* font-family
* font-size
* background
* opacity
* display
* width / max-width / min-width
* height / max-height / min-height
* border
* transition

[**JSBin**](http://jsbin.com/tagavu/edit)