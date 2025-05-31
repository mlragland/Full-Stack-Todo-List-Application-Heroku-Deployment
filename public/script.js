const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const themeToggle = document.getElementById('theme-toggle');

// Toggle dark mode
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
  });
}

// Fetch tasks from the server and display them
async function fetchTasks() {
  const response = await fetch('/tasks');
  const tasks = await response.json();

  // Clear the task list
  while (taskList.firstChild) {
    taskList.firstChild.remove();
  }

  // Add each task to the task list
  for (const task of tasks) {
    const li = document.createElement('li');
    li.dataset.id = task._id;
    li.className = 'list-group-item d-flex align-items-center';
    li.innerHTML = `
      <input type="checkbox" class="form-check-input me-2">
      <span class="flex-grow-1">${task.task}</span>
      <button class="btn btn-sm btn-danger" data-id="${task._id}">Delete</button>
    `;
    taskList.appendChild(li);
  }
}

// Add a new task
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const task = input.value.trim();

  if (task !== '') {
    const response = await fetch('/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task }),
    });

    const newTask = await response.json();

    const li = document.createElement('li');
    li.className = 'list-group-item d-flex align-items-center';
    li.innerHTML = `
      <input type="checkbox" class="form-check-input me-2">
      <span class="flex-grow-1">${newTask.task}</span>
      <button class="btn btn-sm btn-danger" data-id="${newTask._id}">Delete</button>
    `;
    taskList.appendChild(li);
    input.value = '';
  }
});

// Delete a task
taskList.addEventListener('click', async (e) => {
  if (e.target.matches('button[data-id]')) {
    const id = e.target.dataset.id;

    await fetch(`/tasks/${id}`, {
      method: 'DELETE',
    });

    e.target.closest('li').remove();
  }
});

// Fetch tasks when the page loads
fetchTasks();
