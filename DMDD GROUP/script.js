// Function to handle the login redirection
function redirectToLanding() {
    // Get the values from the email and password inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Basic form validation to check if both fields are filled
    if (email && password) {
        // If both fields are filled, redirect to the landing page
        window.location.href = "landing.html"; // Replace with the actual landing page URL
    } else {
        // If any field is empty, show an alert message
        alert("Please fill in both fields!");
    }
}
function logout() {
    window.location.href = "login.html"; // Redirect to login page
}

function getSelectedTiming() {
    const selectedBtn = document.querySelector('.timing-btn.active');
    return selectedBtn ? selectedBtn.textContent.trim() : null;
}

document.querySelector('.book-btn').addEventListener('click', function () {
    const date = document.getElementById('movie-date').value;
    const seats = document.getElementById('num-seats').value;
    const seatSelection = document.getElementById('seat-selection').value;
    const paymentMethod = document.getElementById('payment-method').value;
    const timing = getSelectedTiming();

    if (!timing) {
        alert("Please select a show timing.");
        return;
    }

    if (!date || !seats || !seatSelection || !paymentMethod) {
        alert("Please fill all fields.");
        return;
    }

    // For now, just show a success message
    alert(`🎟️ Ticket booked!\n\nMovie Time: ${timing}\nDate: ${date}\nSeats: ${seats}\nSeat: ${seatSelection}\nPayment: ${paymentMethod}`);
    
    // Later, you can redirect or send data to a server here.
});





