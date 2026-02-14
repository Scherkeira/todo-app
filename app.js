const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const task = input.value;

  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", function() {
    li.remove();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
});
