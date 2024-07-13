document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="task-text">${taskText}</span>
                <div class="task-actions">
                    <button class="edit-btn">✏</button>
                    <button class="delete-btn">🗑</button>
                </div>
            `;
            taskList.appendChild(li);
            newTaskInput.value = '';
        }
    }

    function handleTaskClick(event) {
        if (event.target.classList.contains('delete-btn')) {
            deleteTask(event.target);
        } else if (event.target.classList.contains('edit-btn')) {
            editTask(event.target);
        } else if (event.target.tagName === 'LI' || event.target.classList.contains('task-text')) {
            toggleCompleteTask(event.target);
        }
    }

    function deleteTask(button) {
        const li = button.parentElement.parentElement;
        taskList.removeChild(li);
    }

    function editTask(button) {
        const li = button.parentElement.parentElement;
        const taskText = li.querySelector('.task-text');
        const newTaskText = prompt('Edit task:', taskText.textContent);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskText.textContent = newTaskText.trim();
        }
    }

    function toggleCompleteTask(taskElement) {
        const li = taskElement.tagName === 'LI' ? taskElement : taskElement.parentElement;
        li.classList.toggle('completed');
    }
});