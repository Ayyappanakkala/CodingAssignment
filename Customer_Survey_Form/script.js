// Function to display the popup
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

// Function to close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form input values
    const firstName = document.querySelector(".fn:nth-of-type(1)").value;
    const lastName = document.querySelector(".fn:nth-of-type(2)").value;
    const dob = document.querySelector(".fn:nth-of-type(3)").value;
    const country = document.querySelector("#country").value;

    const genderCheckboxes = document.querySelectorAll("input[name='gender']:checked");
    const selectedGenders = [];
    genderCheckboxes.forEach((checkbox) => {
        selectedGenders.push(checkbox.value);
    });

    const profession = document.getElementById("profession").value;
    const email = document.querySelector(".fn:nth-of-type(4)").value;
    const mobile = document.querySelector(".fn:nth-of-type(5)").value;

    // Populate the popup with the form data
    document.getElementById("popupFirstName").textContent = firstName;
    document.getElementById("popupLastName").textContent = lastName;
    document.getElementById("popupDob").textContent = dob;
    document.getElementById("popupCountry").textContent = country;
    document.getElementById("popupGender").textContent = selectedGenders.join(", ");
    document.getElementById("popupProfession").textContent = profession;
    document.getElementById("popupEmail").textContent = email;
    document.getElementById("popupMobile").textContent = mobile;

    // Display the popup
    openPopup();
}

// Add an event listener to the form for form submission
const form = document.querySelector(".form");
form.addEventListener("submit", submitForm);
