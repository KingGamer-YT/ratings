let buttons = document.getElementsByClassName("score");
let currentValue = null;

function setRating(rating) {
    // Remove active state from all buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    // Add active state to all buttons up to the selected rating
    for (let i = 0; i < rating; i++) {
        buttons[i].classList.add("active");
    }

    // Update current selection globally
    currentValue = rating;
}

function submitForm() {
    // Redirect to thanks.html with the selected rating as a parameter
    if (currentValue !== null) {
        window.location.href = "thanks.html?rating=" + currentValue;
    } else {
        alert("Please select a rating before submitting.");
    }
}