// Script to greet the user based on the time of day
function getGreeting() {
    const currentTime = new Date().getHours();
    let greeting = "Welcome";
    if (currentTime < 12) {
        greeting = "Good Morning";
    } else if (currentTime < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }
    document.getElementById("greeting-message").innerText = `${greeting}, Welcome to the Electronic Patient Management System (EPMS)`;
}

// Call the function when the window loads
window.onload = getGreeting;
