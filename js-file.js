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
    testArr=[]
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
let testArr= [];

var digits = document.getElementsByClassName('digits');
for(var i = 0; i < digits.length; i++){
    digits[i].addEventListener('click', function(event){
        // console.log(this.id);
        console.log(this.innerText)
        testArr.push(this.innerText)
        disp=""
        for(let j = 0; j<testArr.length; j++){
            disp=disp+testArr[j]
        }
        displayVal=this.innerText
        screen.innerText=disp
        //twoNumArr.push(parseInt(this.id))
    
    });
}

var ops = document.getElementsByClassName('operator');
for(var i = 0; i < ops.length; i++){
    // console: print the clicked <p> element
    ops[i].addEventListener('click', function(event){
        testArr=[]
        twoNumArr.push(parseFloat(disp))
        
        //case for performing operations on multiple numbers without hitting "="
        if (twoNumArr.length == 2){
            result= operate(op,twoNumArr)
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


let equals = document.getElementById("equals");
equals.addEventListener("click", function(event) {
    twoNumArr.push(parseFloat(disp))
    result = round(operate(op,twoNumArr))
    displayVal = result
    screen.innerText = displayVal
    // testArr=[]
    // twoNumArr=[result]
    nextOperation();
})

let clear = document.getElementById("clear")
clear.addEventListener("click", function(event){
    screen.innerText=0
    displayVal=0
    twoNumArr=[]
    disp=""
    testArr=[]
})
