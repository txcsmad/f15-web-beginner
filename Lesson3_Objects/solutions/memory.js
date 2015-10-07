//jQuery-like shortcuts
var $ = function(id) {
    return document.getElementById(id);
}
$.create = function(type) {
    return document.createElement(type);
}

//Query search box
var queryBox = $('query');
var contentsWrapper = $('contents_wrapper'); 

//Global memory store
var memory = {};
//Active selected memory
var selected = '';

$('submit').addEventListener('click', function(event) {
    if(queryBox.value) {
        selected = queryBox.value;
        drawResults(memory[selected]);
    }
});

function drawResults(obj) {

    //Clear the contents of contentsWrapper
    contentsWrapper.innerHTML = '';

    //If the object from our lookup exists, write out its properties
    if(obj) {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop)) {
                contentsWrapper.appendChild(createElementEditor(prop, obj));
            }
        }
        //Add an additional horizontal line
        contentsWrapper.appendChild($.create('hr'));
    }

    //Add the property adder elements
    contentsWrapper.appendChild(createElementAdder());    
}

function updateResults() {

    //Redraw the information from the currently selected element
    drawResults(memory[selected]);
}

function createElementEditor(name, target) {
    var content = target[name];

    //Create the wrapper element
    var wrapper = $.create('div');

    //Create the header element (shows the property name)
    var header = $.create('div');
    header.innerHTML = name;

    //Create the input field element
    var textbox = $.create('input');
    textbox.type = 'text';
    //Set the content of the input field as appropriate
    textbox.value = content ? content : '';

    //Create a button for updating the property contents
    var update = $.create('button');
    update.innerHTML = 'Update';

    //When pressing the button, mutate the target's properties
    update.addEventListener('click', function(event) {
        target[name] = textbox.value;
        updateResults();
    });

    //Combine all the elements
    wrapper.appendChild(header);
    wrapper.appendChild(textbox);
    wrapper.appendChild(update);

    //Return the parent of all the elements
    return wrapper;
}

function createElementAdder() {
    var wrapper = $.create('div');
    var textbox = $.create('input');
    textbox.placeholder = 'New property name';
    
    var update = $.create('button');
    update.innerHTML = 'Add';

    update.addEventListener('click', function(event) {
        if(textbox.value) {
            //If the target object doesn't exist in memory, make it
            if(!memory[selected]) {
                memory[selected] = {};
            }

            //Set the value of the property of the target object
            memory[selected][textbox.value] = '';
            updateResults();
        }
    });

    //Combine all the elements
    wrapper.appendChild(textbox);
    wrapper.appendChild(update);

    //Return the parent of all the elements
    return wrapper;
}
