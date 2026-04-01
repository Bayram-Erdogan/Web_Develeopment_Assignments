// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('ul');
const dialog = document.querySelector('dialog');
const addBtn = document.querySelector('.add-btn');
const form = dialog.querySelector('form');
const input = form.querySelector('input');

function renderTodoItem(item) {
  const li = document.createElement('li');
  li.dataset.id = item.id;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = item.completed;
  checkbox.addEventListener('change', () => {
    item.completed = checkbox.checked;
    console.log('Updated todoList:', todoList);
  });

  const span = document.createElement('span');
  span.textContent = item.task;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    const index = todoList.findIndex((t) => t.id === item.id);
    if (index > -1) {
      todoList.splice(index, 1);
    }
    ul.removeChild(li);
    console.log('Updated todoList:', todoList);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  ul.appendChild(li);
}

todoList.forEach(renderTodoItem);

addBtn.addEventListener('click', () => {
  dialog.showModal();
  input.value = '';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = input.value.trim();
  if (!taskText) return;

  const newTodo = {
    id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
    task: taskText,
    completed: false,
  };
  todoList.push(newTodo);
  renderTodoItem(newTodo);
  console.log('Updated todoList:', todoList);
  dialog.close();
});
