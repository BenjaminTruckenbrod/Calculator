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

let screen = document.getElementById("display");
let displayVal = 0;
let result = 0;
let twoNumArr = []
let op = "";

var digits = document.getElementsByClassName('digits');
for(var i = 0; i < digits.length; i++){
    digits[i].addEventListener('click', function(event){
        console.log(this.id);
        displayVal=this.id
        screen.innerText=this.id
        twoNumArr.push(parseInt(this.id))
    
    });
}

var ops = document.getElementsByClassName('operator');
for(var i = 0; i < ops.length; i++){
    // console: print the clicked <p> element
    ops[i].addEventListener('click', function(event){
        //case for performing operations on multiple numbers without hitting "="
        if (twoNumArr.length == 2){
            result= operate(op,twoNumArr)
            displayVal=result
            screen.innerText=displayVal
            twoNumArr = [result]
        }
        else{
            op=this.id
            console.log(op)
        }
    });
}


let equals = document.getElementById("equals");
equals.addEventListener("click", function(event) {
    result = operate(op,twoNumArr)
    displayVal = result
    screen.innerText = displayVal
})

let clear = document.getElementById("clear")
clear.addEventListener("click", function(event){
    screen.innerText=0
    displayVal=0
    twoNumArr=[]
})
