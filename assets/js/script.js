document.querySelectorAll('.add-task').forEach(item => {
  item.addEventListener('click', addTask);
});

function addTask(element) {
  const ulId = element.currentTarget.previousElementSibling.id;
  const text = prompt('Qual é a tarefa?');
  const board = document.getElementById(ulId);

  const template = `
    <li id="${new Date().getTime()}">
      <p>${text}</p>
      <p class="remove">x</p>
    </li>
  `;

  board.innerHTML = board.innerHTML + template;

  document.querySelectorAll('.remove').forEach(item => {
    item.addEventListener('click', removeTask);
  });
}

function removeTask(element) {
  element.currentTarget.parentElement.remove();
}
