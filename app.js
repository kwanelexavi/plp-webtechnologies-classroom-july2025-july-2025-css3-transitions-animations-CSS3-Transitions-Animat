// Part 2: JavaScript Functions with Parameters and Return Values

// Function with parameters and return value
function calculateSquare() {
    const input = document.getElementById('number-input');
    const resultElement = document.getElementById('result');
    const number = parseFloat(input.value);
    
    if (isNaN(number)) {
        resultElement.textContent = 'Result: Please enter a valid number';
        return; // Early return for invalid input
    }
    
    // Call another function to calculate the square
    const square = computeSquare(number);
    resultElement.textContent = `Result: ${number}² = ${square}`;
    
    // Demonstrate local scope
    function computeSquare(num) {
        // This variable has local scope to computeSquare function
        const result = num * num;
        return result;
    }
}

//  Factorial Calculation Function
function calculateFactorial() {
    const input = document.getElementById('factorial-input');
    const resultElement = document.getElementById('factorial-result');
    const number = parseInt(input.value);
    
    // Validate input
    if (isNaN(number) || number < 0) {
        resultElement.textContent = 'Result: Please enter a non-negative integer';
        return;
    }
    
    if (number > 20) { // Limit to prevent extremely large numbers
        resultElement.textContent = 'Result: Please enter a number ≤ 20';
        return;
    }
    
    // Calculate factorial using recursive function
    const factorial = computeFactorial(number);
    resultElement.textContent = `Result: ${number}! = ${factorial}`;
    
    // Add a visual effect
    resultElement.classList.add('pulse');
    setTimeout(() => {
        resultElement.classList.remove('pulse');
    }, 1000);
}

// Recursive function to calculate factorial
function computeFactorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // Recursive case: n! = n * (n-1)!
    return n * computeFactorial(n - 1);
}

// Global variable example
let animationState = 'stopped';

// Function to demonstrate global vs local scope
function startAnimation() {
    const box = document.getElementById('controlled-box');
    box.classList.add('spin');
    animationState = 'running';
    
    // Local variable with same name as global (demonstrating scope)
    const message = 'Animation started';
    console.log(message);
}

function stopAnimation() {
    const box = document.getElementById('controlled-box');
    box.classList.remove('spin', 'pulse');
    animationState = 'stopped';
    
    // This local variable doesn't conflict with the global one
    const animationState = 'Local variable with same name';
    console.log('Animation stopped. Local variable:', animationState);
}

function changeAnimation() {
    const box = document.getElementById('controlled-box');
    
    // Check global variable
    if (animationState === 'running') {
        box.classList.toggle('spin');
        box.classList.toggle('pulse');
        
        // Call a function that returns a value
        const currentAnimation = getCurrentAnimation(box);
        console.log('Changed to:', currentAnimation);
    }
}

// Function that returns a value based on element classes
function getCurrentAnimation(element) {
    if (element.classList.contains('spin')) {
        return 'spin';
    } else if (element.classList.contains('pulse')) {
        return 'pulse';
    }
    return 'none';
}

// Part 3: Combining CSS Animations with JavaScript

function flipCard() {
    const card = document.getElementById('flip-card');
    card.classList.toggle('flipped');
    
    // Call a function with a parameter
    logAction('Card flipped');
}

function openModal() {
    const modal = document.getElementById('demo-modal');
    modal.classList.add('active');
    
    logAction('Modal opened');
}

function closeModal() {
    const modal = document.getElementById('demo-modal');
    modal.classList.remove('active');
    
    logAction('Modal closed');
}

// Reusable function with parameter
function logAction(action) {
    console.log(`${new Date().toLocaleTimeString()}: ${action}`);
}

// Additional interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add slide-in animation to cards on page load
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        // Stagger the animations with a delay based on index
        card.style.animation = `slideIn 0.5s ease ${index * 0.1}s forwards`;
        card.style.opacity = '0'; // Start invisible for the animation
    });
    
    // Demonstrate closure with a function factory
    const createCounter = function() {
        let count = 0; // This variable is "closed over" by the inner function
        return function() {
            count += 1;
            return count;
        }
    };
    
    const counter = createCounter();
    
    // Add click counter to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const count = counter();
            console.log(`Button clicked ${count} times total`);
        });
    });
});