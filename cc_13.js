// Task 1 - Base Structure Created

// #dashboard
const dashboardById = document.getElementById(("dashboard")); // optimized for Id

const dashboard = document.querySelector("#employeeContainer"); // .class, #id, div

// Task 2 - Employee Cards Dynamic Addition
// Create.div element
function addEmployeeCard(name, position) {
    const employeeCard = document.createElement("div");
   
    employeeCard.setAttribute("class", "employeeCard");
    
    

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


    // Task 5 - Incline Editing for Employee Cards

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    employeeCard.appendChild(editButton);
// Create edit function
    editButton.addEventListener("click", (event) => {
        event.stopPropagation();
// Creating name input
        const nameInput = document.createElement("input");
        nameInput.value = empName. textContent;
    // Creating positon input
        const positionInput = document.createElement("input");
        positionInput.value = employeeName.textContent;
    // Creating save button
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
    
        employeeCard.replaceChild(nameInput, empName);
        employeeCard.replaceChild(positionInput, empPosition);
    
        employeeCard.appendChild(saveButton);
// Listen for a click so editing becomes available
        saveButton.addEventListener("click", (e) => {
            e.stopPropagation();
    
            empName.textContent= nameInput.value;
            empPosition.textContent = positionInput.value;
    
            employeeCard.replaceChild(empName, nameInput);
            employeeCard.replaceChild(empPosition, positionInput);
            employeeCard.removeChild(saveButton);
        });
    });
// Add each of these to the employee cards
    employeeCard.appendChild(empName);
    employeeCard.appendChild(empPosition);
    employeeCard.appendChild(removeButton);
    dashboard.appendChild(editButton);

    dashboard.appendChild(employeeCard);
};


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

// Listening for a click on the dashboard and logs it
dashboard.addEventListener('click', (event) => {
    if (event.target !== event.currentTarget) {
    console.log('Clicked on Employee');
    }
});



