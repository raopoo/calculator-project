//Write a function to display the numbers(onclick) and claculated result
// Declare variables 
// -Use a class for all the number buttons
// -Use ids for arithmetic operations
// -Use ID for the display field
// -Create an event listener for button click 
// -Use display field innerhtml for displaying the number and operators

let result = document.getElementById('result');
let btn = Array.from(document.getElementsByClassName("btn"));
// let operators = Array.from(document.getElementsByClassName("operators"));
//console.log(btn);
//console.log(operators);
const operations = (num1,num2,operator) =>{
    if(operator === '+'){
        result.innerText = num1 + num2;
        return;
    } else  if(operator === '-'){
        result.innerText = num1- num2;
        return;
    } else  if(operator === '⨉'){
        result.innerText = num1 * num2;
        return;
    } else  if(operator === '÷'){
        result.innerText = num1 / num2;
        return;
    }
}

const calculate = () => {
    //get the numbers and operators
    let input = result.innerText;
    // console.log(typeof(input));
    // console.log(input);

    let i = input.search(/\D/); //Finds the operator
    let operator = input.charAt(i);
    console.log(i)
    let newInput = input.split(/\D/);
    let num1 =Number(newInput[0]) ;
    let num2 = Number(newInput[1]);

    operations(num1,num2,operator);

    
    //console.log(input);
    //switch(result.innerText)
}

btn.map(btn => {
    btn.addEventListener('click', (e) =>{
        //console.log(e.target.innerText)
        if(e.target.innerText === "AC"){
            result.innerText = " ";
            return;
        }
        if(e.target.innerText === "Del"){
            result.innerText = result.innerText.slice(0, -1);
            return;
        }
        if(e.target.innerText === "="){
            calculate();
            return;
        }
        result.innerText += e.target.innerText;
    })
})

