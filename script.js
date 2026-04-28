// get form
const form = document.querySelector('form');

// Akan names
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Listen for form submission
form.addEventListener("submit", (event) => {
    // prevent form from submitting
    event.preventDefault();

    // get input values
    const birthDate = document.getElementById("birth-date").value;
    const gender = document.querySelector("input[name='gender']:checked");

    // validation for birth date and gender
if (!birthDate) {
    alert("Please enter your birth date.");
    return;
}

if (!gender) {
    alert("Please select your gender.");
    return;
}

    // Day, Month and Year
   const date = new Date(birthDate);

// //    get the day of the week
// const date = date.getDay();

   let DD = date.getDate();
   let MM = date.getMonth() + 1;
   let YYYY = date.getFullYear();

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
    let d =Math.floor ((CC / 4 - 2 * CC - 1) +
      (5 * YY) / 4 +
      (26 * (MM + 1)) / 10 +
      DD) % 7

    //   To avoid negative day index
    if (d < 0) {
        d = (d + 7) % 7;
    }

    // get the selected gender
    const selectedGender = gender.value;

    let akanName;

    if (selectedGender === "male") {
        akanName = maleNames[d];
    } else if (selectedGender === "female") {
        akanName = femaleNames[d];
    } else {
        alert("Please select a gender.");
        return;
    }

    // Display the Akan name
     document.querySelector(".result").innerHTML = `
    <h3>Your Akan Name is: ${akanName}</h3>
    <p>You were born on: ${daysOfWeek[d]}</p>
    <p>Day: ${d}</p>
  `;
});
