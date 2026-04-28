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
   let DD = Date.getDate();
   let MM = Date.getMonth() + 1; // Months start from 0
   let YYYY = Date.getFullYear()

//    validation
if (DD < 1 || DD > 31) {
    alert("Please enter a valid day (1-31).");
    return;
  }

  if (MM < 1 || MM > 12) {
    alert ("Please enter a valid month (1-12).");
    return;
  }

//   to split the year
    let CC = Math.floor(YYYY / 100);
    let YY = YYYY % 100;

    // Calculation using the formula
    let d =  ((CC / 4 - 2 * CC - 1) +
      (5 * YY) / 4 +
      (26 * (MM + 1)) / 10 +
      DD) % 7

    //   To avoid negative day index
    if (d < 0) {
        d = (d + 7) % 7;
    }

    // Get Akan name
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // get the selected gender
    const selectedGender = gender.value;