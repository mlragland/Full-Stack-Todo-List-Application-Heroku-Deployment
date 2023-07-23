const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Fetch tasks from the server and display them
async function fetchTasks() {
  const response = await fetch('http://localhost:3000/tasks');
  const tasks = await response.json();
  
  // Clear the task list
  while (taskList.firstChild) {
    taskList.firstChild.remove();
  }
  
  // Add each task to the task list
  for (const task of tasks) {
    const li = document.createElement('li');
    li.dataset.id = task._id;
    li.innerHTML = `
      <input type="checkbox">
      <span>${task.task}</span>
      <button>Delete</button>
    `;
    taskList.appendChild(li);
  }
}

// Add a new task
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const task = input.value.trim();
    
    if (task !== '') {
      const response = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task }),
      });
      
      const newTask = await response.json();
      
      const li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox">
        <span>${newTask.task}</span>
        <button data-id="${newTask._id}">Delete</button>
      `;
      taskList.appendChild(li);
      input.value = '';
    }
  });

// Delete a task
taskList.addEventListener('click', async (e) => {
    if (e.target.nodeName === 'BUTTON') {
      const id = e.target.dataset.id;
      
      await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'DELETE',
      });
      
      e.target.parentNode.remove();
    }
  });
// Fetch tasks when the page loads
fetchTasks();