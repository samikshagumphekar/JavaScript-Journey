
document.getElementById("studentForm").addEventListener("submit",
function(event) {
    event.preventDefault();

    // Clear previous messages
    const messageDiv = document.getElementById("message");
    messageDiv.innerHTML = "";

    // Get form values
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const gender = document.getElementById("gender").value;
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validation
    if (!name || !/^[a-zA-Z\s]+$/.test(name)) {
        messageDiv.innerHTML += "Please enter a valid name.<br>";
    }

    if (!address) {
        messageDiv.innerHTML += "Address cannot be empty.<br>";
    }

    if (!city) {
        messageDiv.innerHTML += "City cannot be empty.<br>";
    }

    if (!state) {
        messageDiv.innerHTML += "State cannot be empty.<br>";
    }

    if (gender === "") {
        messageDiv.innerHTML += "Please select a gender.<br>";
    }

    if (!mobile || !/^\d{10}$/.test(mobile)) {
        messageDiv.innerHTML += "Please enter a valid mobile number (10 digits).<br>";
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        messageDiv.innerHTML += "Please enter a valid email ID.<br>";
    }

    // Show success message if there are no errors
    if (messageDiv.innerHTML === "") {
        alert("Congratulations! Welcome, " + name + "!");
        // window.location.href = "welcome.html";
    }
});
