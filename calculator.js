// Get the display element
const display = document.getElementById('result');

// Get all the buttons
const buttons = document.querySelectorAll('button');

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the button value
    const buttonValue = button.textContent;

    // Handle the button clicks
    switch(buttonValue) {
      case 'C':
        // Clear the display
        display.value = '';
        break;
      case '<':
        // Delete the last character
        display.value = display.value.slice(0, -1);
        break;
      case '=':
        try {
          // Evaluate the expression
          const result = eval(display.value);
          // Display the result
          display.value = result;
        } catch {
          // Handle errors
          display.value = 'Error';
        }
        break;
      default:
        // Append the button value to the display
        display.value += buttonValue;
    }
  });
});
