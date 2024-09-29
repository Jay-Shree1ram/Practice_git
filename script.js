// Contact Form Script
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic validation
    if (name && email && message) {
        document.getElementById("formMessage").textContent = "Thank you for your message!";
    } else {
        document.getElementById("formMessage").textContent = "Please fill out all fields.";
    }

    // Clear form
    document.getElementById("contactForm").reset();
});

