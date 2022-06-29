var equation = "";
var opHitLast = false;
var calculated = false;

function press(digit) {
    if (calculated == true)
    {
        reset();
    }
    
    if (equation == "" && opHitLast == false || opHitLast == true)
    {
        document.querySelector('#display').innerText = digit;
    }
    else
    {
        document.querySelector('#display').innerText += digit;
    }

    opHitLast = false;
    equation += digit;
    console.log(equation);
}

function clr() {
    reset();
}

function setOP(char) {
    if (calculated == true)
    {
        
    }

    if (opHitLast == true)
    {
        equation = equation.slice(0, -1) + char;
    }
    else
        equation += char;
    opHitLast = true;
}

function reset() {
    document.querySelector('#display').innerText = "0";
    equation = '';
    opHitLast = false;
    calculated = false;
}

function calculate() {
    document.querySelector('#display').innerText = eval(equation);
    console.log(eval(equation));
    calculated = true;
    opHitLast = false;
}