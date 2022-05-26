function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function operate(operator, arr){
    if (operator == "plus")
        return add(arr[0],arr[1])
    if (operator == "minus")
        return subtract(arr[0],arr[1])
    if (operator == "mulitply")
        return multiply(arr[0],arr[1])
    if (operator == "divide")
        return divide(arr[0],arr[1])
}

function nextOperation(){
    dispArr=[]
    twoNumArr=[result]
}

function round(num){
    return Math.round((num + Number.EPSILON) * 100) / 100
}

let screen = document.getElementById("display");
let displayVal = 0;
let result = 0;
let twoNumArr = []
let op = "";
let disp = ""
let dispArr= [];


var percent = document.getElementById('percent')
percent.addEventListener('click', function(event){
    displayVal = displayVal/100
    disp = displayVal
    screen.innerText=disp

})

var plusMinus = document.getElementById("plus-minus")
plusMinus.addEventListener('click', function(event){
    displayVal = displayVal*(-1)
    disp = displayVal
    screen.innerText=disp
})

//block for typing in digits to the calculator
var digits = document.getElementsByClassName('digits');
for(var i = 0; i < digits.length; i++){
    digits[i].addEventListener('click', function(event){
        if (dispArr.includes('.') && this.id == 'dot'){
        }
        else{
            console.log(this.innerText)
            dispArr.push(this.innerText)
            disp=""
            for(let j = 0; j<dispArr.length; j++){
                disp=disp+dispArr[j]
            }
            displayVal=this.innerText
            screen.innerText=disp
        }
    });
}

//block handles when operators are pushed
var ops = document.getElementsByClassName('operator');
for(var i = 0; i < ops.length; i++){
    // console: print the clicked <p> element
    ops[i].addEventListener('click', function(event){
        dispArr=[]
        twoNumArr.push(parseFloat(disp))
        
        //case for performing operations on multiple numbers without hitting "="
        if (twoNumArr.length == 2){
            result= round(operate(op,twoNumArr))
            displayVal=result
            screen.innerText=displayVal
            twoNumArr = [result]
            op=this.id
        }
        else{
            op=this.id
            console.log(op)
        }
    });
}

//block for when the equals sign is pushed
let equals = document.getElementById("equals");
equals.addEventListener("click", function(event) {
    twoNumArr.push(parseFloat(disp))
    result = round(operate(op,twoNumArr))
    displayVal = result
    screen.innerText = displayVal
    nextOperation();
})

//block for clearing the calculator
let clear = document.getElementById("clear")
clear.addEventListener("click", function(event){
    screen.innerText=0
    displayVal=0
    twoNumArr=[]
    disp=""
    dispArr=[]
})
