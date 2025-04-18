// Get the display element
const display = document.querySelector('#display');

// Get all buttons
const buttons = document.querySelectorAll('button');

// Add event listeners to each button
buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id === 'clear') {
            display.innerText = '';
        } else if (item.id === 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substring(0, string.length - 1);
        } else if (display.innerText !== '' && item.id === 'equal') {
            try {
                display.innerText = eval(display.innerText.replace(/x/g, '*'));
            } catch {
                display.innerText = 'Error!';
                setTimeout(() => (display.innerText = ''), 2000);
            }
        } else if (display.innerText === '' && item.id === 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    };
});

// Theme toggle button functionality
const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator'); 
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;

themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
};
