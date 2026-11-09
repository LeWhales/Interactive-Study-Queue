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

    item = "you have created a task"
},
    list.addEventListener("click", (event) => {
        const button = event.target.closest("button[data-action]");
        if (!button || !list.contains(button)) return;
        const item = button.closest("li");
        if (button.dataset.action === "remove") item.remove();

        item.querySelector(".task-text").textContent = taskText;

        list.appendChild(item);

        input.value = "";
        input.focus();

        render();
    },
        list.addEventListener("click", (event) => {
            const button = event.target.closest('button[data-action="remove"]');
            if (!button || !list.contains(button)) return;

            button.closest("li").remove();
            render();
        }
        )));

