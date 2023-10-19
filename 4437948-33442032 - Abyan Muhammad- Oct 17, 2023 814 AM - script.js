//CALCULATOR
// Select the HTML element with the id "input" and store it in the variable "inputField"
let inputField = document.getElementById('input');

// Function to append a given "value" to the input field's current value
function appendToInput(value) {
    inputField.value += value;
}

// Function to clear the content of the input field
function clearInput() {
    inputField.value = '';
}

// Function to calculate the expression in the input field and update the input field with the result
function calculate() {
    try {
        inputField.value = eval(inputField.value);
    } catch (error) {
        // If an error occurs during evaluation, set the input field value to 'Error'
        inputField.value = 'Error';
    }
}

//ITEM FADING

// Get all HTML elements with the class "fade-in" and store them in the "elements" variable
const elements = document.querySelectorAll('.fade-in');

// Function to check if elements are in the viewport and add/remove the class "active" accordingly
function checkElements() {
    elements.forEach((element) => {
        // Get the top and bottom positions of the element relative to the viewport
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        // Check if the element is in the viewport (partially or fully)
        if (elementTop < window.innerHeight - 100 && elementBottom > 100) {
            // If the element is in the viewport, add the class "active" to it
            element.classList.add('active');
        } else {
            // If the element is not in the viewport, remove the class "active" from it
            element.classList.remove('active');
        }
    });
}

// Initially check elements when the page loads
checkElements();

// Add a scroll event listener to check elements on scroll
window.addEventListener('scroll', checkElements);