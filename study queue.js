const list = document.querySelector("#tasks");
const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const emptyState = document.querySelector("#empty-state");

function render() {
    emptyState.hidden = list.children.length > 0;
}
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = input.value.trim();

    if (!taskText) {
        input.focus();
        return;
    }

    const item = document.createElement("li");
    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = taskText;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.dataset.action = "complete";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.dataset.action = "remove";

    item.appendChild(text);
    item.appendChild(completeButton);
    item.appendChild(removeButton);
    list.appendChild(item);
    input.value = "";
    input.focus();

    render();
});

// complete/remove task
list.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button || !list.contains(button)) return;
    const item = button.closest("li");

    if (button.dataset.action === "remove") {
        item.remove();
    }

    if (button.dataset.action === "complete") {
        item.classList.toggle("completed");

        button.textContent =
            item.classList.contains("completed")
                ? "Undo"
                : "Complete";
    }

    render();
});


