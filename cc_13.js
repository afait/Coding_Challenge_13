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

    removeButton.addEventListener("click", function() {
        employeeCard.remove();
    });

    employeeCard.appendChild(empName);
    employeeCard.appendChild(empPosition);
    employeeCard.appendChild(removeButton);
    dashboard.appendChild(employeeCard);

}




// Test Cases for Task 2

addEmployeeCard("Minnie Mouse", "Bow seller");
addEmployeeCard("Dr. DooLittle", "Doctor");
addEmployeeCard("Shrek", "Real Estate Agent");