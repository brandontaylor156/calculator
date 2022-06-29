// equation variable used to store the current equation we are calculating
var equation = "";

// opHitLast (operation hit last) is a flag variable which determines whether or not
// an operation key (+, -, /, or *) was just hit
var opHitLast = false;

// calculated is another flag used to determine whether or not we just evaluated an 
// equation by pressing the = sign
var calculated = false;

// a result variable to store the currently evaluated equation (in case we want to continue
// arithmetic on an evaluated equation)
var result  = '';

// This is a reset function used when we clear the display. It sets the display back to read 
// '0', clears the current equation, and resets the flag variables
function reset() {
    document.querySelector('#display').innerText = "0";
    equation = '';
    opHitLast = false;
    calculated = false;
}

// this function handles what happens when a number is pressed
function press(digit) {
    // if = sign was just pressed, reset 
    if (calculated == true)
        reset();
    
    // if statement which reacts based on the last button pressed
    // this is meant to handle all scenarios of button combinations
    if (equation == "" && opHitLast == false || opHitLast == true)
        document.querySelector('#display').innerText = digit;
    else
        document.querySelector('#display').innerText += digit;

    // flag set to false
    opHitLast = false;

    // add this digit to the current equation
    equation += digit;
}

function clr() {
    reset();
}

// function for when an operator is pressed
function setOP(char) {
    // if equals sign was pressed just before, retain that result and use it for
    // any further calulations
    if (calculated == true)
        equation = result;

    // if another operator was hit just before, override that operator with the 
    // operator that was pressed after
    if (opHitLast == true)
        equation = equation.slice(0, -1) + char;

    // otherwise, add that new operator to equation
    else 
        equation += char;

    // set flags
    opHitLast = true;
    calculated = false;
}

// function used to produce result when = sign pressed
function calculate() {
    // eval function used to evaluate arithmetic that is currently in string form
    document.querySelector('#display').innerText = eval(equation);

    // store result in variable 
    result = eval(equation);

    // set flags
    calculated = true;
    opHitLast = false;
}