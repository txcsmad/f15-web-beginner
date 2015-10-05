# HTML

## Quick Intro

* Hypertext Markup Language
* The web is built on HTML
* Almost a programming language, with it's own syntax + rules
* Made up of tags

## Sections of a HTML page

### html

* Defines the HTML document
* Everything in a HTML document goes in between

````html
<html>
...
...
...
</html>
````

### head

* First of two main parts of any HTML document

````html
<html>
  <head>
  ...
  ...
  </head>
...
</html>
````

### body

* Second of two main parts of any HTML document

````html
<html>
  <head>
  ...
  ...
  </head>
  <body>
  ...
  ...
  </body>
</html>
````

**Tip:** Indent levels of your HTML document to make the file easier to read / navigate later.


### What does the `<head>...</head>` section contain?


* The title of the page

````html
<title>The Name of your Page</title>
````

* CSS styles

````html
<style> 
...
...
...
</style>
````

* Stylesheet tag

Include CSS from external file locations

````html
<link rel="stylesheet" type="text/css" href="../location/of/style.css">
````

### What does the `<body>...</body>` section contain?

* The body section is the meat of the document
* It contains the stuff you see on a webpage
* Made of tags such as `div`s, etc. (more in the next section on **Tags**).

## Tags

* Building blocks of html
* In JavaScript, tags are referred to as a `Nodes` or `Elements`
* What each tag is for
* The following demo should cover examples of `div`, `span`, `img`, `header`, `footer`, `ul`, `li` elements


## Creating a webpage

[**JSBin Demo**](http://jsbin.com/tagavu/edit) – *http://jsbin.com/tagavu/edit* – JSBin is an online, live HTML/CSS/JS editor
