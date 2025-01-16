let currentInput = ''; // This stores the number the user is typing now
let previousInput = ''; // This stores the number before the operator
let operator = ''; // This stores the current operator (+, -, *, /)

// Function to clear the display and reset all values
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('display').value = ''; // Clear the screen
}

// Function to append a number to the current input
function appendNumber(number) {
    currentInput += number; // Add the clicked number to the current input string
    document.getElementById('display').value = previousInput + operator + currentInput; // Update the display with the full equation
}

// Function to append an operator (+, -, *, /)
function appendOperator(op) {
    if (currentInput === '') return; // If there's no number typed, do nothing
    if (previousInput !== '') {
        calculate(); // If there’s already a number, calculate before switching the operator
    }
    operator = op; // Store the current operator
    previousInput = currentInput; // Store the current number before operator
    currentInput = ''; // Clear current input for the next number
    document.getElementById('display').value = previousInput + operator; // Update display with the operator and first number
}

// Function to append a decimal point
function appendDecimal() {
    if (currentInput.includes('.')) return; // Prevent multiple decimals in the same number
    currentInput += '.'; // Add a decimal point
    document.getElementById('display').value = previousInput + operator + currentInput; // Update display
}

// Function to calculate the result based on the operator
function calculate() {
    if (previousInput === '' || currentInput === '') return; // Make sure both numbers are entered
    let result;
    let prev = parseFloat(previousInput); // Convert previous input to a number
    let current = parseFloat(currentInput); // Convert current input to a number

    // Perform the operation based on the operator
    switch (operator) {
        case '+':
            result = prev + current; // Addition
            break;
        case '-':
            result = prev - current; // Subtraction
            break;
        case '*':
            result = prev * current; // Multiplication
            break;
        case '/':
            if (current === 0) {
                result = 'Error'; // Prevent division by zero
            } else {
                result = prev / current; // Division
            }
            break;
        default:
            return;
    }

    // Display the result
    document.getElementById('display').value = result;
    previousInput = result.toString(); // Save the result for further calculations
    currentInput = ''; // Clear current input for the next number
    operator = ''; // Reset the operator
}
