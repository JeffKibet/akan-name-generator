// get form
const form = document.querySelector('form');

// Akan names
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Listen for form submission
form.addEventListener("submit", (event) => {
    // prevent form from submitting
    event.preventDefault();

    // get input values
    const birthDate = document.querySelector("birthdate").value;