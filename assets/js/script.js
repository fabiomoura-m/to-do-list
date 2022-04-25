document.querySelectorAll('.add-task').forEach(item => {
  item.addEventListener('click', addTask);
});

function addTask(element) {
  const ulId = element.currentTarget.previousElementSibling.id;
  const text = prompt('Qual é a tarefa?');
  const board = document.getElementById(ulId);

  const template = `
    <li>
      <p>${text}</p>
      <p class="remove">x</p>
    </li>
  `;

  board.innerHTML = board.innerHTML + template;
}
