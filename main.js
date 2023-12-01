let firstNumInput = document.getElementById('firstNumber');
let secondNumInput = document.getElementById('secondNumber');
let btnCal = document.getElementById('click');
let results = document.getElementById('output');

function add() {
    let firstNum = firstNumInput.value;
    let secondNum = secondNumInput.value;
    return new Promise((resolve, reject) => {
        // Check if the input values are numbers
        if (!isNumeric(firstNum) || !isNumeric(secondNum)) {
            reject(new Error('Please enter valid numeric values.'));
        } else {
            // Parse the input values as integers and resolve the promise
            resolve(parseInt(firstNum) + parseInt(secondNum));
        }
    });
}

// Utility function to check if a value is a numeric string or a number
function isNumeric(value) {
    return !isNaN(value) && (typeof value === 'number' || !isNaN(parseFloat(value)));
}

btnCal.addEventListener('click', function() {
    add()
        .then(result => {
            results.innerHTML = result;
        })
        .catch(error => {
            results.innerHTML = error.message;
            // Focus on the first input for better user experience
            firstNumInput.focus();
        });
});