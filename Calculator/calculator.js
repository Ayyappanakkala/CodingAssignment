document.addEventListener("DOMContentLoaded", function() {
    // Get the display element
    const display = document.querySelector(".display");

    // Get all buttons
    const buttons = document.querySelectorAll("input[type='button']");

    // Add a click event listener to each button
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = button.value;
            if (value === "=") {
                try {
                    // Use eval() to calculate the result
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = "Error";
                }
            } else if (value === "AC") {
                // Clear the display
                display.value = "";
            } else {
                // Append the button value to the display
                display.value += value;
            }
        });
    });
});
