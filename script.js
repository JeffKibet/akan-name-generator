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
    const birthDate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;

    // Day, Month and Year
    const day = new Date(birthDate).getDate();
    const month = new Date(birthDate).getMonth() + 1; // Months start from 0
    const year = new Date(birthDate).getFullYear();