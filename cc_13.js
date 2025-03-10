// Task 1 - Base Structure Created

// #dashboard
const dashboardById = document.getElementById(("dashboard")); // optimized for Id

const dashboard = document.querySelector("#employeeContainer"); // .class, #id, div

// Task 2 - Employee Cards Dynamic Addition
// Create.div element
function addEmployeeCard(name, position) {
    const employeeCard = document.createElement("div");
   
    employeeCard.setAttribute("class", "employeeCard");
    employeeCard.setAttribute("id", "employeeCard")
    

 // Adds employee name to the card
    const empName = document.createElement("h2");
    empName.textContent = name;

// Adds employee position to the card
    const empPosition = document.createElement("p")
    empPosition.textContent = position;

// Adds remove button to delete the card
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";



    // Task 4 Change
    removeButton.addEventListener('click', function(event) {
        console.log('Removed button was clicked')
        event.stopPropagation();
        dashboard.removeChild(employeeCard);
    });

// Task 4 - Employee Card Removal with Event Bubbling
    employeeCard.addEventListener('click', () => {
        console.log('Clicked Employee Card', empName.textContent)
    });

    

    employeeCard.appendChild(empName);
    employeeCard.appendChild(empPosition);
    employeeCard.appendChild(removeButton);
    dashboard.appendChild(employeeCard);
};

dashboard.addEventListener('click', (event) => {
    if (event.target !== event.currentTarget) {
    console.log('Clicked on Employee');
    }
});



// Test Cases for Task 2

addEmployeeCard("Minnie Mouse", "Bow seller");
addEmployeeCard("Dr. DooLittle", "Doctor");
addEmployeeCard("Shrek", "Real Estate Agent");



// Task 3 - Bulk Update on Employee Cards


// Select all elements with the employee card class
const employeeCardsNodeList = document.querySelectorAll(".employeeCard")
// Convert NodeList into an array
const employeeCardsArray = Array.from(employeeCardsNodeList);

// Use array method to update each card's style

employeeCardsArray.forEach(card => {
    const p = card.querySelector("p");
    if (p) {
        p.textContent += "-Updated"
    }
});


