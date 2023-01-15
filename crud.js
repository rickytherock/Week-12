//
  
  // Define an array to store the entities
const entities = [];

// Define a function to create a new entity
function createEntity(name) {
    // Create a new entity object
    const newEntity = { name };
    // Add the new entity to the array
    entities.push(newEntity);
    // Return the new entity
    return newEntity;
}

// Get the table body element
const entitiesBody = document.getElementById("entities-body");

// Call the updateTable function to initialize the table with the current entities
updateTable();

// Get the form element
const form = document.getElementById("entity-form");

// Add an event listener to the form's submit event
form.addEventListener("submit", event => {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the form data
    const name = form.elements.name.value;

    // Validate the form data
    if (!name) {
        // Show an error message
        alert("Please enter a name.");
        return;
    }

    // Create a new entity
    const newEntity = createEntity(name);

    // Clear the form
    form.reset();

    // Call the updateTable function to refresh the table
    updateTable();
});

// Define a function to update the table
function updateTable() {
    // Clear the current contents of the table body
    entitiesBody.innerHTML = "";

    // Loop through the array of entities
    for (const entity of entities) {
        // Create a new row element
        const row = document.createElement("tr");

        // Create a new cell element to display the name
        const nameCell = document.createElement("td");
        nameCell.textContent = entity.name;

        // Create a new cell element for the actions
        const actionsCell = document.createElement("td");

        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            // Find the index of the entity in the array
            const index = entities.indexOf(entity);

            // Remove the entity from the array
            entities.splice(index, 1);

            // Call the updateTable function to refresh the table
            updateTable();
        });

        // Create an update button
        const updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.addEventListener("click", () => {
            // Get the new name from the user
            const newName = prompt("Enter the new name:");

            // Update the entity's name
            entity.name = newName;

            // Call the updateTable function to refresh the table
            updateTable();
        });

        // Append the delete and update buttons to the actions cell
        actionsCell.appendChild(deleteButton);
        actionsCell.appendChild(updateButton);

        // Append the name and actions cells to the row
        row.appendChild(nameCell);
        row.appendChild(actionsCell);

        // Append the row to the table body
        entitiesBody.appendChild(row);
    }
}
