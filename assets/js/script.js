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
  document.querySelectorAll('li').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.setAttribute('draggable', 'true');
  });
  document.querySelectorAll('ul').forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', drop);
  });
}

function removeTask(element) {
  element.currentTarget.parentElement.remove(); // remove o pai do elemento clicado
}

function dragStart(event) {
  event.dataTransfer.setData('task', event.target.id); // salvando o elemento ao arrastar, neste caso salvado o id do li
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault(); // previne a ação padrão que é de negar o drop
  const target = event.target;
  const data = event.dataTransfer.getData('task');
  const task = document.getElementById(data);
  target.appendChild(task);
  event.dataTransfer.clearData(); // apagar da memória o elemento
}
