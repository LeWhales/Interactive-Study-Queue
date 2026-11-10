attempted this line hoping it could be reused, it did nothing
remove.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button || !list.contains(button)) return;
    const item = button.closest("li");
    if (button.dataset.action === "remove") item.remove();});

same as the last one, again nothing
list.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");

    if (!button || !list.contains(button)) return;

    const index = Number(button.dataset.index);

    if (button.dataset.action === "remove") {
        tasks.splice(index, 1);
    }

    if (button.dataset.action === "complete") {
        tasks[index].done = !tasks[index].done;
    }

    render();
});