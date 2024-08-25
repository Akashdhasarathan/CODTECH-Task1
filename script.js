document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("input");
    const list = document.getElementById("list");

    function addTask() {
        const taskText = input.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a close button for each task
        const span = document.createElement("span");
        span.innerHTML = "&times;";
        span.classList.add("close");

        // Add close button to the task item
        li.appendChild(span);

        // Add click event to toggle 'checked' class
        li.addEventListener("click", function() {
            li.classList.toggle("checked");
        });

        // Add click event to remove task
        span.addEventListener("click", function() {
            li.remove();
        });

        // Append the task item to the list
        list.appendChild(li);

        // Clear the input field
        input.value = "";
    }

    document.querySelector("button").addEventListener("click", addTask);

    // Allow pressing Enter to add a task
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
