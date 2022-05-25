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
let disp = ""
let testArr= [];
// testArr.push(1)
// testArr.push(1)
// testArr.push(1)
// testArr.length

var digits = document.getElementsByClassName('digits');
for(var i = 0; i < digits.length; i++){
    digits[i].addEventListener('click', function(event){
        console.log(this.id);
        testArr.push(this.id)
        console.log("The lengths is" + testArr.length)
        disp=""
        for(let j = 0; j<testArr.length; j++){
            disp=disp+testArr[j]
        }
        displayVal=this.id
        screen.innerText=disp
        //twoNumArr.push(parseInt(this.id))
    
    });
}

var ops = document.getElementsByClassName('operator');
for(var i = 0; i < ops.length; i++){
    // console: print the clicked <p> element
    ops[i].addEventListener('click', function(event){
        testArr=[]
        twoNumArr.push(parseInt(disp))
        
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
    twoNumArr.push(parseInt(disp))
    result = operate(op,twoNumArr)
    displayVal = result
    screen.innerText = displayVal
    testArr=[]
})

let clear = document.getElementById("clear")
clear.addEventListener("click", function(event){
    screen.innerText=0
    displayVal=0
    twoNumArr=[]
    disp=""
    testArr=[]
})
