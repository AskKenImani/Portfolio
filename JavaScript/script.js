document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header-placeholder", "header.html");
    loadComponent("footer-placeholder", "footer.html");

    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            validateForm();
        });
    }
});

function loadComponent(placeholderId, componentUrl) {
    fetch(componentUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById(placeholderId).innerHTML = data;
        })
        .catch(error => console.error("Error loading component:", error));
}

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        return;
    }
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Message sent successfully!");
    document.querySelector("form").reset();
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
