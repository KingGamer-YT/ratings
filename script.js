// Get all elements with the class 'score' and store them in a variable
// This will be used to manage the rating buttons
let buttons = document.getElementsByClassName("score");

// Initialize a variable to keep track of the currently selected rating
// 'null' indicates no rating is selected initially
let currentValue = null;

// Define a function to set the rating when a button is clicked
function setRating(rating) {
    // Remove the 'active' class from all rating buttons
    // This will reset the visual state of all buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    // Add the 'active' class to all buttons up to the selected rating
    // This will highlight the selected rating and all previous ratings
    for (let i = 0; i < rating; i++) {
        buttons[i].classList.add("active");
    }

    // Update the global variable to reflect the currently selected rating
    currentValue = rating;
}

// Define a function to handle form submission
function submitForm() {
    // Check if a rating has been selected
    if (currentValue !== null) {
        // Redirect the user to 'thanks.html' and pass the selected rating as a URL parameter
        // For example, if the rating is 4, the URL will be 'thanks.html?rating=4'
        window.location.href = "thanks.html?rating=" + currentValue;
    } else {
        // If no rating has been selected, show an alert message
        alert("Please select a rating before submitting.");
    }
}
