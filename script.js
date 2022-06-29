var equation = "";
var opHitLast = false;

function press(digit) {
    if (equation == "" && opHitLast == false || opHitLast == true)
    {
        document.querySelector('#display').innerText = digit;
    }
    else
    {
        if (document.querySelector('#display').innerText != '0')
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
    equation += char;
    opHitLast = true;
}

function reset() {
    document.querySelector('#display').innerText = "0";
    equation = '';
    opHitLast = false;
}

function calculate() {

}