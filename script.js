// Fieldnotes JavaScript

// Mobile Navigation
const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

});


// Close menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


// Save Favourite Products
document.querySelectorAll(".save-button").forEach((button) => {

    button.addEventListener("click", () => {

        const saved = button.classList.toggle("saved");

        button.textContent = saved ? "♥" : "♡";

        button.setAttribute(
            "aria-pressed",
            String(saved)
        );

    });

});


// Demo Login Form
document.querySelector("#login-form").addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        const message = document.querySelector("#form-message");

        message.textContent =
            "Demo only — your details have not been sent or saved.";

    }
);


// Forgot Password Message
document.querySelector("#forgot-link").addEventListener(
    "click",
    (event) => {

        event.preventDefault();

        document.querySelector("#form-message").textContent =
            "Password reset is not available in this front-end demo.";

    }
);