document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildTask(e.target.new_task_description.value);
    form.reset();
  });
});
function buildTask(task) {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  const btn2 = document.createElement("button");
  btn.addEventListener("click", deleteTask);
  btn2.addEventListener("click", taskPriority);
  btn2.textContent = "priority";
  btn.textContent = "x";
  li.textContent = `${task} `;
  li.appendChild(btn2);
  li.appendChild(btn);
  document.querySelector("#tasks").appendChild(li);
}
function deleteTask(e) {
  e.target.parentNode.remove();
}
function taskPriority(e) {
  e.target.parentNode.style.color = "red";
}
