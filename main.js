let firstNum = document.getElementById('firstNumber')
let secondNum = document.getElementById('secondNumber')
let btnCal = document.getElementById('click')
let output = document.getElementById('output')

function addNumbers() {
    let firstNum = parseInt(document.getElementById('firstNumber').value);
    let secondNum = parseInt(document.getElementById('secondNumber').value);
 
    return new Promise((resolve, reject) => {
        if (Number.isNaN(firstNum) || Number.isNaN(secondNum)) {
            reject(new Error(`Either ${firstNum} or ${secondNum} (is or are) not number(s)`));
        } else {
            resolve(firstNum + secondNum);
        }
    });
 }
 
 btnCal.addEventListener('click', function() {
    addNumbers()
        .then(result => {
            document.getElementById('output').innerHTML = result;
        })
        .catch(error => {
            document.getElementById('output').innerHTML = error.message;
        });
 });