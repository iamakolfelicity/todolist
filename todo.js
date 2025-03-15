// Load tasks from localStorage when the page loads
window.onload = function() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => {
        addRowToTable(task);
    });
};

// Update table with new task and save to localStorage
function updateTable() {
    // Get the input values
    const task = document.getElementById("task").value;
    const date = document.getElementById("date").value;

    if (!task || !date) {
        alert("Please enter both task and date!");
        return;
    }

    const taskData = { task, date };

    // Add the task to the table
    addRowToTable(taskData);

    // Save to localStorage
    saveToLocalStorage(taskData);

    // Clear inputs after adding the task
    document.getElementById("task").value = '';
    document.getElementById("date").value = '';
}

// Add task row to the table
function addRowToTable(taskData) {
    const tableBody = document.getElementById("table").getElementsByTagName("tbody")[0];
    const newRow = tableBody.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const deleteCell = newRow.insertCell(2);
    const editCell = newRow.insertCell(3);

    cell1.textContent = taskData.date;
    cell2.textContent = taskData.task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        deleteRow(deleteButton, taskData);
    };
    deleteCell.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function() {
        editRow(newRow, taskData);
    };
    editCell.appendChild(editButton);
}

// Delete Row Function
function deleteRow(button, taskData) {
    const row = button.parentElement.parentElement;
    row.remove();

    // Remove task from localStorage
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = savedTasks.filter(task => task.date !== taskData.date || task.task !== taskData.task);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

// Edit Row Function
function editRow(row, taskData) {
    // Set the input fields with current row values
    document.getElementById("task").value = taskData.task;
    document.getElementById("date").value = taskData.date;

    // Remove the current row
    row.remove();

    // Update the localStorage data (task will be replaced later after new task is saved)
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = savedTasks.filter(task => task.date !== taskData.date || task.task !== taskData.task);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

// Save task to localStorage
function saveToLocalStorage(taskData) {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.push(taskData);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
}
